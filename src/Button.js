import PropTypes from "prop-types";
import styles from "./Button.module.css"

//인자로 text props를 받아서 사용하는 Button component
function Button({text}){
  return <button className={styles.btn}>{text}</button>
}

//text props의 type 정하기
Button.propTypes = {
  text: PropTypes.string.isRequired,
}

//Button function을 App.js에서 가져다 사용할 수 있게 export하기
export default Button;