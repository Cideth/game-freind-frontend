# 기술스택 및 버전

## 사용한 기술

- [Node.js](https://nodejs.org/en/docs) - 18.17.0
- [Yarn](https://yarnpkg.com/) - 1.22.19
- [React](https://ko.legacy.reactjs.org/) - 18.2.0
- [React-Query](https://tanstack.com/query/latest) - ^5.8.4
- [Recoil](https://recoiljs.org/ko/docs/introduction/getting-started) - ^0.7.7
- [Axios](https://axios-http.com/kr/docs/intro) - ^1.6.0
- [Next.js](https://nextjs.org/) - 14.0.1
- [TypeScript](https://www.typescriptlang.org/) - 5.2.2
- [SCSS](https://sass-lang.com/) - {sass: ^1.69.5, scss: ^0.2.4 }

## 설치

### 1. 저장소 복제

- git clone [본인 github 주소]

### 2. 의존성 설치

```bash
yarn
```

### 3. 개발 서버 실행

```bash
yarn dev
```

## 기여 방법

1. Fork 해주세요!
2. feature 브랜치를 만들어주세요: git checkout -b my-new-feature
3. 변경 사항을 커밋해주세요: git commit -am 'Add some feature'
4. 브랜치에 푸시해주세요: git push origin my-new-feature
5. 피드백과 함께 Pull request를 보내주세요

# 요구사항 정의서

## **1. 개요**

- **프로젝트 명칭**: Find Game Friends
- **목적**: 사용자들이 자신과 타인의 게임 통계를 조회하고, 게임 내에서 듀오 파트너를 찾을 수 있는 웹 플랫폼 구축
- **대상 사용자**: 같이 플레이 할 게임 플레이어, 파트너를 찾고자 하는 사용자
- **기대 효과**: 게임 통계를 쉽게 조회하고, 상호 작용하는 커뮤니티 구축

## **2. 기능 요구 사항**

### **2.1 사용자 인터페이스**

- **홈페이지**: 게임 통계 조회 서비스 소개 및 가입 안내
- **로그인/회원가입 페이지**: OAuth, jwt 및 개인정보 인증을 통한 사용자 인증 시스템
- **프로필 페이지**: 사용자별 게임 통계, 매치 히스토리, 선호 포지션 등 표시
- **검색 기능**: 플레이어 또는 특정 게임의 매치를 검색
- **파트너 매칭 시스템**: 사용자의 게임 스타일과 선호도에 기반하여 파트너 추천

### **2.2 백엔드 서비스**

- **데이터 크롤링**: 공식 게임 API로부터 실시간 게임 데이터 수집
- **데이터베이스 관리**: 사용자 정보, 게임 통계, 매치 데이터 관리
- **RESTful API**: 프론트엔드와 통신할 수 있는 API 제공
- **보안**: 사용자 데이터 보호를 위한 암호화 및 보안 조치

## **3. 성능 요구 사항**

- **응답 시간**: 사용자 요청에 대한 응답 시간은 1~5초 이내
- **동시성**: 동시에 최소 1000명의 사용자가 서비스를 이용할 수 있도록 고려
- **가용성**: 연중무휴 99% 이상의 서비스 가용성

## **4. 제약 조건**

- **기술 스택**: 프론트엔드는 React, Next.js, TypeScript를 사용하고, 백엔드는 Java Spring, MySQL을 사용
- **플랫폼 호환성**: 모든 주요 브라우저와 모바일 디바이스에서 호환 가능해야 함

## **5. 배포**

- **클라우드 서비스**: AWS 또는 Vercel을 사용하여 애플리케이션 배포
- **자동화된 배포 파이프라인**: 지속적 통합(CI) 및 지속적 배포(CD) 파이프라인 구축

## **6. 기타**

- **문서화**: 모든 코드와 API는 명확하게 문서화
- **국제화**: 추후 다국어 지원을 고려한 설계

### README.md 현재 버전

- v1.0.2

### 버전 기록

- v1.0.0: 초기 릴리스, 패키지 설치, 레이아웃 구성, README.md 작성
- v1.0.1: 전역 상태관리 Recoil 라이브러리 설치 및 페이지 title 전역 상태관리 적용
- v1.0.2: signIn 페이지 추가, modal component 추가
