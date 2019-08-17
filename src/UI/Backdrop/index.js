import React from "react";
import "./Backdrop.css";


/**
 *
    主意 这个 不是 class Backdrop 所以 他没有 用1this 去 point props
    它是 被Modal 调用的 东西
    在 Modal 指定 this 去 Modal 才是
 */

const Backdrop = (props) => (
  props.show ? <div className="Backdrop" onClick={props.closeModal}></div> : null
)

export default Backdrop;