# electron-web-app-example

A demo app that can be run using electron and also rendered in a browser using a mocked API. This app was bootstrapped using [@quick-start/electron](https://github.com/alex8088/quick-start/tree/master/packages/create-electron), that relies on [electron-vite](https://github.com/alex8088/electron-vite).

When you launch the app in an electron window, you can open a file system prompt window:
```bash
yarn dev
```

When you launch the app in the browser directly, you cannot access the file system, but instead you will see a mocked prompt:

```bash
yarn web
```
