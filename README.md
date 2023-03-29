# X-SHOP

### 평소 좋아하던 의류 쇼핑몰인 Nomanual을 모티브로 만든 쇼핑 서비스 프로젝트

<br/>

- 프로젝트 참여 인원:

`Front-End: 1명`

<br/>

- 사용 기술 스택:

`React, React-Query, Next.js, TypeScript, Tailwind, Axios, Firebase, GitHub`

<br/>

- 프로젝트 진행 기간:

`23.03.16 - 23.03.24 (9일)`

<br/>

## 배포 주소

https://x-shop-46k508rau-betterplaywon.vercel.app/

<br/>

## 💻 설치 방법

    yarn install
    yarn dev

<br/>

## 📂 파일 구조
```bash
📦public
 ┣ 📂videos
 ┃ ┗ 📜nomanual_banner_video.mp4
 ┣ 📜favicon.ico
 ┣ 📜next.svg
 ┣ 📜thirteen.svg
 ┗ 📜vercel.svg
📦src
 ┣ 📂components
 ┃ ┣ 📜BagStatus.tsx
 ┃ ┣ 📜Banner.tsx
 ┃ ┣ 📜Button.tsx
 ┃ ┣ 📜MyBagCard.tsx
 ┃ ┣ 📜Nav.tsx
 ┃ ┣ 📜PriceTag.tsx
 ┃ ┣ 📜ProductCard.tsx
 ┃ ┗ 📜UserProfile.tsx
 ┣ 📂context
 ┃ ┗ 📜UserContext.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useBag.tsx
 ┃ ┗ 📜useProducts.tsx
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┣ 📜firebase.ts
 ┃ ┃ ┗ 📜upload.ts
 ┃ ┣ 📂error
 ┃ ┃ ┗ 📜notFound.tsx
 ┃ ┣ 📂product
 ┃ ┃ ┣ 📜[id].tsx
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜new.tsx
 ┃ ┣ 📜_app.tsx
 ┃ ┣ 📜_document.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜myBag.tsx
 ┗ 📂styles
 ┃ ┗ 📜globals.css
📦.eslintrc.json
📦.gitignore
📦.prettierrc
📦next.config.js
📦package.json
📦postcss.config.js
📦README.md
📦tailwind.config.js
📦tsconfig.json
 ```

## 기능

1. Nav
  - Firebase authentication을 이용한 구글 로그인 구현

2. Home 페이지 구현

3. New 페이지(= 어드민) 구현
	- google signin 시 includeAdminUid라는 변수를 추가해 어드민 계정을 체크
	- firebase realtime database를 사용해 상품 이미지와 정보 저장
	- cloudinary를 사용한 이미지 업로드 처리 후 응답을 받아 firebase에 저장하는 흐름으로 구현

4. 마이백 페이지 구현(= 장바구니)
  - Firebase DB 정보를 기반으로 데이터를 받아와 처리

5. 디테일 페이지 구현
	- 다이나믹 라우트를 사용한 디테일 페이지 구현
	- next/router의 쿼리로 데이터를 전달받아 사용
	
  
  
## 기술 채택 이유

  firebase 활용
  
	- 공식 문서 참조 & 구글링을 통한 통신 방법 학습 후 적용
	- json server와 비교 시 데이터의 지속성을 위해 선택
	
  클라이언트 상태관리로 useContext 채택
  
	- 리덕스 사용시 보일러 플레이트로 답답함을 느낀 것이 컸고,
  
    좀 더 간편하게 상태 관리를 할 수 있으며
    
    프로젝트 크기가 상대적으로 작아 context API로 상태 관리를 해보자고 결정.
