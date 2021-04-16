# **Code Splitting**

싱글페이지 특정상 자바스크립트 번들 파일에 어플리케이션에 대한 모든 로직을 불러와서 규모가 커지면 용량이 커지기 때문에, 로딩속도가 지연 될 수 있다.

따라서 코드 스플리팅을 통해 한개의 파일에서 처음부터 모든걸 불러오는게 아니라
설정한대로 라이브러리나 컴포넌트가 실제로 필요해질때, 나중에 불러올 수 있게 해준다.

<br>

## **Code Splitting이 필요한 경우**

- Page별로 분리
- 서버사이드렌더링이 필요하지 않는 경우

<br>

## **설치**

```
npm i @loadable/component
npm i @types/loadable__component
```

<br>

```tsx
import loadable from '@loadable/component';

const LogIn = loadable(() => import('@pages/LogIn'));
const SignUp = loadable(() => import('@pages/SignUp'));
```
