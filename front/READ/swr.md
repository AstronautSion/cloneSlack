# SWR

[swr](https://github.com/vercel/swr)은 데이터를 가져오는 데(get) 특화되어 있는 라이브러리다.<br>
swr은 데이터를 가져오는 데 특화되어 있기 때문에 post 등 순수하지 않은(not a 'pure') 동작에 있어서는 이점이 없다<br>
(불가능하진 않음)
<br>
비슷한 라이브러리로 [react-query](https://react-query.tanstack.com/) 도 있으니 추후에 사용해 보자.

## 특징

1. 포커싱을 하면 갱신된다.
   axios는 한 번 get으로 호출을 하면 다시 호출하지 않는 이상 이전의 데이터를 그대로 유지.
   <br>
   swr은 최초 한 번만 호출해도 다른 곳으로 포커싱을 옮겼다가 다시 포커싱하면 새로운 데이터로 갱신된다 (브라우저에서 다른 탭을 보고 다시 돌아온다던가 하는 행위)

2. 주기적인 호출 가능
   swr은 포커싱할 때 데이터를 갱신해주기도 하지만, 사용자의 설정에 따라 원하는 순간에 revalidate할 수도 있고 일정 시간 간격으로 revalidate할 수도 있다.

3. 캐시된 데이터를 이용
   최초에 데이터를 수집한 후에는 계속해서 오래 걸리는 호출 방식을 고수하는 것이 아니라 캐시된 데이터를 이용해서 효율적인 동작을 만들어냄

```
npm i swr
```

```js
import useSWR from 'swr';
import fetcher from './utils/fetcher';

// revalidate() : 선언하여 내가 원하는 곳에서 다시 호출 시킬 수 있음.
const { data, error, revalidate } = useSWR('url주소', fetcher, {
  dedupingInterval: 100000,
  // 주기적으로 호출은 되지만 dedupingInterval 기간 내에는 캐시에서 불러온다.
  // 그 외 자주쓰는거
  // loadingTimeout: 3000, 요청하고 로딩시간 지정
  // errorRetryInterval: 5000, 요청했는데 에러가 났을때 재요청 시간
  // errorRetryCount: 최대 몇번까지 요청할건지 설정 그 이 후엔 에러
});
```

```js
import axios from 'axios';

const fetcher = (url) =>
  axios
    .get(url, {
      withCredentials: true,
    })
    .then((response) => response.data);

export default fetcher;
```

서버에 요청할땐 항상 조심. 디도스공격하는 자사해커가 되지말자.

[더많은 옵션 보기](https://github.com/vercel/swr)
