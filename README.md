# HR
## 프로젝트 설명
이 프로젝트는 헤더, 사이드바, 공지사항, 일정관리, 통계의 5가지 주요 섹션으로 구성되어 있습니다.

## 기술 스택
- **React**: 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리. React는 컴포넌트 기반 아키텍처를 사용하여 UI의 각 부분을 독립적이고 재사용 가능한 컴포넌트로 만들 수 있게 해줍니다.
- **React DOM**: React와 DOM(Document Object Model)을 연결하는 패키지로, React 컴포넌트가 실제 DOM과 상호작용할 수 있게 해줍니다.
- **React Scripts**: Create React App(CRA)으로 생성된 프로젝트에서 사용되는 스크립트와 설정을 포함한 패키지입니다. 개발 서버 실행, 빌드, 테스트 등을 위한 명령어를 제공합니다. 
- **Chart.js**: JavaScript 기반의 차트 라이브러리로, 다양한 유형의 차트를 쉽게 생성할 수 있습니다. 인터랙티브하고 반응형 차트를 지원합니다.
- **React Chart.js 2**: React와 Chart.js를 연결하는 패키지로, React 컴포넌트로 차트를 쉽게 렌더링하고 관리할 수 있게 해줍니다.
- **Apollo Client**: GraphQL 클라이언트로, React와 잘 통합되어 사용됩니다. Apollo Client를 통해 GraphQL 서버와 통신하며, 데이터를 가져오고 캐싱할 수 있습니다.
- **GraphQL**: 데이터 쿼리 언어 및 실행 환경으로, 클라이언트가 필요한 데이터를 명확하게 요청할 수 있게 해줍니다.

## 프로젝트 구동
**메인 페이지**
![메인페이지](/public/image.png)
**GIF**
![동작하는gif](/public/GIF.gif)

## 프로젝트 구조
![폴더구조](/public/image-1.png)

### 폴더 구조 설명
- **src/component:**
  - **notice** 
  중요 공지 및 정보를 사용자에게 알립니다.
  - **schedule** 
  병원 운영 일정을 보여줍니다.
  - **statistics** 
  데이터를 시각화하여 통계 정보를 제공합니다.
  - **header**
  사이트의 상단에 위치하여 주요 탐색 및 사용자 정보를 표시합니다.
  - **sidebar**: 좌측 또는 우측에 위치하여 다양한 탐색 옵션 및 도구를 제공합니다.
  - **_app.tsx:** 모든 페이지에 공통으로 적용되는 설정.
  - **index.tsx:** 메인 페이지.

  ### 라이브러리 설명
  - **@testing-library/jest-dom**: DOM 노드에 대한 맞춤 matcher를 추가하여 Jest와 함께 사용하는 라이브러리.
- **@testing-library/react**: React 컴포넌트를 테스트하기 위한 라이브러리.
- **@testing-library/user-event**: 사용자가 요소와 상호작용하는 이벤트를 시뮬레이트하기 위한 라이브러리.
- **chart.js**: JavaScript 기반의 차트 라이브러리.
- **react**: 사용자 인터페이스를 구축하기 위한 JavaScript 라이브러리.
- **react-chartjs-2**: React와 Chart.js를 연결하는 라이브러리.
- **react-dom**: React와 DOM(Document Object Model)을 연결하는 라이브러리.
- **react-scripts**: Create React App(CRA)으로 생성된 프로젝트에서 사용되는 스크립트와 설정을 포함한 라이브러리.
- **web-vitals**: 웹 애플리케이션의 성능을 측정하기 위한 라이브러리.
- **@apollo/client**: GraphQL 클라이언트로, React와 잘 통합되어 사용되는 라이브러리.
- **graphql**: 데이터 쿼리 언어 및 실행 환경 라이브러리.