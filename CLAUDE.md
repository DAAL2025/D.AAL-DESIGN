# CLAUDE.md

## 영상 분석
- 유튜브 등 영상 분석은 Mac(yumungil-ui-Macmini)에 설치된 **에고라이트(Ego Lite, https://lite.ego.app)** 를 사용한다.
- 클라우드 세션은 youtube.com, lite.ego.app 접속이 막혀 있고 Mac에도 직접 접근할 수 없다. 이 경우 내용을 추측하지 말고, Mac의 Claude Code(Desktop 앱 또는 `claude remote-control`)에서 진행하라고 안내한다.

## REA (Reverse Engineer Anything)
- **정체:** 소스 코드 없이 앱·바이너리·웹사이트를 역분석하는 오픈소스 도구(`morluto/rea`, npm `rea-agents`). MCP 서버(도구 수가 많음)와 `reverse-engineer-anything` 스킬로 Claude Code에 붙는다. Mac에 설치되어 있다. 클라우드 세션에는 없다.
- **분석 대상:** 네이티브 바이너리(Hopper/Ghidra/IDA 필요), JavaScript·Electron 앱, .NET, Android APK, 웹사이트(페이지 구조·스크립트·네트워크), HAR 등 네트워크 캡처.
- **호출 원칙: 필요할 때만 쓴다.** REA는 무겁고, 다른 작업과 같이 호출되면 충돌한다. 그래서 다음 경우에만 호출한다.
  - 사용자가 REA나 역분석을 직접 요청할 때
  - "다른 앱/사이트의 이 기능이 어떻게 동작하는지 알아내서 우리 프로젝트에 만들어줘"처럼, 소스가 없는 외부 대상을 분석해야만 답할 수 있을 때
- **호출하지 않는 경우:** 이 저장소 코드 읽기·수정·빌드, 디자인·카피 작업, 일반 웹 검색, 영상 분석(에고라이트 사용) 등 일상 작업. 이런 작업에는 REA 도구를 섞어 쓰지 않는다.
- **호출 방식:**
  - 애매하면 먼저 사용자에게 REA를 쓸지 묻는다.
  - 쓸 때는 다른 작업과 병렬로 돌리지 않고 단독 단계로 실행한다.
  - 결과는 근거와 함께 요약해서 넘긴 뒤 원래 작업으로 돌아온다.
