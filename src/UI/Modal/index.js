import React, { Component } from "react";
import Backdrop from "../Backdrop"; // 不需要 point 去 index 他自动会处理 point去 index
import "./Modal.css";

/**
 *
    从 Paremt 传 show 的 state 和 closeModal function 来 Modal
    从 Parent 传过来的 资料 放 在 Backdrop 里
    Backdrop 通过 props 接受到 从 Modal pass过来的 value
    Backdrop 不需要 指定 this.props 去拿value 通过 props就行了

    把 从 App pass 过来的 fucntion 再 pass 去  Backdrop
    Backdrop 被能调用 这个 从1parent set 的 function 去更改 state 状态
 *
 */


class Modal extends Component {
  // props 的 value 是从 App.js 传来的
  render() {
    return (
      <React.Fragment>
        <Backdrop show={this.props.show} closeModal={this.props.closeModal} />
        <div
          className="Modal row"
          style={{
            transform: this.props.show ? "translateY(0)" : "translateY(-100vh)",
            opacity: this.props.show ? "1" : "0"
          }}
        >
          {this.props.children}
        </div>
      </React.Fragment>
    );
  }
}

export default Modal;