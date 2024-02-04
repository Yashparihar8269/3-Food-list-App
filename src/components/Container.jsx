import Styles from "./Container.module.css"

const Container = ({children})=>{
  return <div className={Styles.Container}>
    {children}
  </div>
  
}

export default Container;