import Styles from "./FoodInput.module.css"

const FoodInput = ({handleKeyDown}) =>{


  return (
    <>
      <input type="text" placeholder="Input Food Item here" className={Styles.InputFoodItem}
      onKeyDown={handleKeyDown}
      />
    
    </>
  )
}

export default FoodInput;