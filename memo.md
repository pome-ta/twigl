# start log

```
[ERR] `.bitly` not found.

[OK] development build
ℹ ｢wds｣: Project is running at http://localhost:9090/
ℹ ｢wds｣: webpack output is served from /js/
ℹ ｢wds｣: Content not from webpack is served from /private/var/mobile/Containers/Shared/AppGroup/A2F05B95-E190-4D22-B466-3FDBABAAFCE1/File Provider Storage/Repositories/twigl/public
/private/var/mobile/Containers/Shared/AppGroup/A2F05B95-E190-4D22-B466-3FDBABAAFCE1/File Provider Storage/Repositories/twigl/node_modules/webpack-dev-server/node_modules/opn/xdg-open:1
#!/bin/sh
^

SyntaxError: Invalid or unexpected token
    at wrapSafe (internal/modules/cjs/loader.js:1079:16)
    at Module._compile (internal/modules/cjs/loader.js:1138:23)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1196:10)
    at Module.load (internal/modules/cjs/loader.js:1009:32)
    at Function.Module._load (internal/modules/cjs/loader.js:903:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:74:12)
    at MessagePort.<anonymous> (internal/main/worker_thread.js:167:24)
    at MessagePort.emit (events.js:321:20)
    at MessagePort.onmessage (internal/worker/io.js:78:8)
Browserslist: caniuse-lite is outdated. Please run:
npx browserslist@latest --update-db

Why you should do it regularly:
https://github.com/browserslist/browserslist#browsers-data-updating
ℹ ｢wdm｣: Hash: ffe8b2c2ab9d4c2d5ca4
Version: webpack 4.42.1
Time: 3910ms
Built at: 01/03/2022 11:59:05 PM
    Asset      Size  Chunks             Chunk Names
script.js  3.58 MiB  script  [emitted]  script
Entrypoint script = script.js
[0] multi ../node_modules/webpack-dev-server/client?http://localhost:9090 ./script.js 40 bytes {script} [built]
[../node_modules/firebase/analytics/dist/index.esm.js] 68 bytes {script} [built]
[../node_modules/firebase/app/dist/index.cjs.js] 974 bytes {script} [built]
[../node_modules/firebase/database/dist/index.esm.js] 67 bytes {script} [built]
[../node_modules/promise-polyfill/src/index.js] 5.82 KiB {script} [built]
[../node_modules/webpack-dev-server/client/index.js?http://localhost:9090] ../node_modules/webpack-dev-server/client?http://localhost:9090 4.29 KiB {script} [built]
[../node_modules/webpack-dev-server/client/overlay.js] 3.51 KiB {script} [built]
[../node_modules/webpack-dev-server/client/socket.js] 1.53 KiB {script} [built]
[../node_modules/webpack-dev-server/client/utils/createSocketUrl.js] 2.91 KiB {script} [built]
[../node_modules/webpack-dev-server/client/utils/log.js] 964 bytes {script} [built]
[../node_modules/webpack-dev-server/client/utils/reloadApp.js] 1.59 KiB {script} [built]
[../node_modules/webpack-dev-server/client/utils/sendMessage.js] 402 bytes {script} [built]
[../node_modules/webpack-dev-server/node_modules/strip-ansi/index.js] 161 bytes {script} [built]
[../node_modules/webpack/hot sync ^\.\/log$] ../node_modules/webpack/hot sync nonrecursive ^\.\/log$ 170 bytes {script} [built]
[./script.js] 91.6 KiB {script} [built]
    + 42 hidden modules
ℹ ｢wdm｣: Compiled successfully.

```



# build log

```
[ERR] `.bitly` not found.

[OK] production build
Browserslist: caniuse-lite is outdated. Please run:
npx browserslist@latest --update-db

Why you should do it regularly:
https://github.com/browserslist/browserslist#browsers-data-updating
Hash: 09fee46c069ad10a9bf8
Version: webpack 4.42.1
Time: 6800ms
Built at: 01/03/2022 11:56:17 PM
    Asset     Size  Chunks                    Chunk Names
script.js  355 KiB       0  [emitted]  [big]  script
Entrypoint script [big] = script.js
[15] ./script.js + 10 modules 266 KiB {0} [built]
     | ./script.js 91.6 KiB [built]
     | ./fragmen.js 39.2 KiB [built]
     | ./onomat.js 17.2 KiB [built]
     | ./music.js 7.58 KiB [built]
     | ./firedb.js 12.3 KiB [built]
     | ./shader_snippet/noise.glsl 8.65 KiB [built]
     |     + 5 hidden modules
    + 15 hidden modules

WARNING in asset size limit: The following asset(s) exceed the recommended size limit (244 KiB).
This can impact web performance.
Assets: 
  script.js (355 KiB)

WARNING in entrypoint size limit: The following entrypoint(s) combined asset size exceeds the recommended limit (244 KiB). This can impact web performance.
Entrypoints:
  script (355 KiB)
      script.js


WARNING in webpack performance recommendations: 
You can limit the size of your bundles by using import() or require.ensure to lazy load some parts of your application.
For more info visit https://webpack.js.org/guides/code-splitting/

```


# debug log

```
[ERR] `.bitly` not found.

[OK] development build
Browserslist: caniuse-lite is outdated. Please run:
npx browserslist@latest --update-db

Why you should do it regularly:
https://github.com/browserslist/browserslist#browsers-data-updating
Hash: 3147dfc40e5cd8b51063
Version: webpack 4.42.1
Time: 3540ms
Built at: 01/03/2022 11:57:52 PM
    Asset      Size  Chunks             Chunk Names
script.js  2.73 MiB  script  [emitted]  script
Entrypoint script = script.js
[./firedb.js] 12.3 KiB {script} [built]
[./fragmen.js] 39.2 KiB {script} [built]
[./music.js] 7.58 KiB {script} [built]
[./onomat.js] 17.2 KiB {script} [built]
[./script.js] 91.6 KiB {script} [built]
[./shader_snippet/noise.glsl] 8.65 KiB {script} [built]
    + 20 hidden modules

```