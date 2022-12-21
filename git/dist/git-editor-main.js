(()=>{"use strict";var e={4516:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.IPCClient=void 0;const o=r(8605);t.IPCClient=class{constructor(e){this.handlerName=e;const t=process.env.VSCODE_GIT_IPC_HANDLE;if(!t)throw new Error("Missing VSCODE_GIT_IPC_HANDLE");this.ipcHandlePath=t}call(e){const t={socketPath:this.ipcHandlePath,path:`/${this.handlerName}`,method:"POST"};return new Promise(((r,s)=>{const n=o.request(t,(e=>{if(200!==e.statusCode)return s(new Error(`Bad status code: ${e.statusCode}`));const t=[];e.on("data",(e=>t.push(e))),e.on("end",(()=>r(JSON.parse(Buffer.concat(t).toString("utf8")))))}));n.on("error",(e=>s(e))),n.write(JSON.stringify(e)),n.end()}))}}},8605:e=>{e.exports=require("http")}},t={};function r(o){var s=t[o];if(void 0!==s)return s.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,r),n.exports}var o={};(()=>{var e=o;Object.defineProperty(e,"__esModule",{value:!0});const t=r(4516);!function(e){const r=new t.IPCClient("git-editor"),o=e[e.length-1];r.call({commitMessagePath:o}).then((()=>{setTimeout((()=>process.exit(0)),0)})).catch((e=>function(e){console.error(e),process.exit(1)}(e)))}(process.argv)})();var s=exports;for(var n in o)s[n]=o[n];o.__esModule&&Object.defineProperty(s,"__esModule",{value:!0})})();
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/7cfaa41a98f38b80073974f02bfc42fc345405fc/extensions/git/dist/git-editor-main.js.map