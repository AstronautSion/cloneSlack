# WebSocket

socket이 없을때는 단방향으로 주기적으로 요청을하는 폴링 또는 롱폴링 기법을 사용했지만
socket이 나오고나서는 양방향으로 실시간으로 프론트와 서버간의 데이터를 주고받을 수 있다.

<br>
`socket.io` 페키지가 node에서 유명한데 현재 3버전까지 나옴
backend에 설치된 nest 7버전에서 아직 정식으로 socket.io 3 버전을 지원하지 않아서 2 버전 설치. ( nest8 버전에서 정식지원한다고 함.)

```
npm i socket.io-client@2
npm i -D @types/socket.io-client
```

## socket.on && off

서버에서 클라이언트로 보내는 이벤트 (클라이언트에서는 on으로 받음)

```js
socket.on('data', (data) => {
  console.log(data);
});

socket.off('data');
```

## socket.emit

클라이언트에서 서버로 보내는 이벤트 (클라이언트에서는 emit으로 받음)

```js
socket.emit('hello', 'world');
```

## disconnect

```js
socket.disconnect();
```

클라이언트에서 소켓 연결을 종료하는 함수

## useSocket hoos

```js
import io from 'socket.io-client';
import { useCallback } from 'react';

const backUrl = 'http://localhost:3095';
const sockets: { [key: string]: SocketIOClient.Socket } = {};
const useSocket = (workspace?: string): [SocketIOClient.Socket | undefined, () => void] => {
  const disconnect = useCallback(() => {
    if (workspace) {
      sockets[workspace].disconnect();
      delete sockets[workspace];
    }
  }, [workspace]);

  if (!workspace) {
    return [undefined, disconnect];
  }

  sockets[workspace] = io.connect(`${backUrl}/ws-${workspace}`, {
    transports: ['websocket'],
  });

  return [sockets[workspace], disconnect];
};

export default useSocket;
```
