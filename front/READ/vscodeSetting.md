# Eslint + Prettier with VSC

VS Code에서 .tsx 파일의 Typescript를 JSX로 인식하는 현상이 나타남..

VS Code Setting.json에서 defaultFormatter 대상을 지정해주니 잘된다!!

항상 세팅을 하는데 있어서 힘이 빠지는거같다.

Webpack도 그렇고 좀 더 심도있게 공부해봐야 겠다.

```json
"editor.formatOnSave": true,
"[typescript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"[typescriptreact]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
},
"eslint.alwaysShowStatus": true,
```
