#run
npm install
npm run start

#自动会 point 去 index.js
import时 不必直接poin index file

#孩子 更改 parent state
从 Paremt 传 show 的 state 和 closeModal function 来 Modal
从 Parent 传过来的 资料 放 在 Backdrop 里
Backdrop 通过 props 接受到 从 Modal pass过来的 value
Backdrop 不需要 指定 this.props 去拿value 通过 props就行了

把 从 App pass 过来的 fucntion 再 pass 去  Backdrop
Backdrop 被能调用 这个 从1parent set 的 function 去更改 state 状态

#style
style={{ reactCss: "css"}}