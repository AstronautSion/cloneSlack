# CORS Proxy로 해결 방법

프론트에서 Proxy를 사용해서 요청할때 백엔드 주소에서 요청하는 것처럼 보내 cors문제를 피할 수 있다.<br>
프론트 백엔드 둘다 localhost일때는 가능하지만 프론트는 localhost이고 백엔드는 실제로 돌아가고있는 상태이면 불가능.. (개발환경에서 필요할때 사용하자)

```
npm i webpack-dev-server -D
```

```json
devServer: {
  ...
  proxy: {
    '/api/': {
      target: 'http://localhost:3095',
      changeOrigin: true,
    },
  },
},
```

<br>
<br>
<br>

## create-react-app 에서 Proxy 설정

```
npm install http-proxy-middleware --save
```

/src/setupProxy.js

```js
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/api', {
      target: 'http://localhost:5000/',
      changeOrigin: true,
    }),
  );
};
```
