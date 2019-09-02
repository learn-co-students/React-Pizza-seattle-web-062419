import React from "react"
const handleSubmit=(e,props)=>{
   e.preventDefault()
   props.savePizza(props.id)
   console.log(props.id)

}
const PizzaForm = (props) => {
  return(
      <div className="form-row">
        <div className="col-5">
            <input onChange={props.editText} type="text" className="form-control" placeholder="Pizza Topping" value={
                props.topping
              }/>
        </div>
        <div className="col">
          <select onChange={props.editSize} value={props.size} className="form-control">
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input onClick={props.editVege} className="form-check-input" type="radio" value="Vegetarian" checked={props.vege}/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input onClick={props.editNotVege} className="form-check-input" type="radio" value="Not Vegetarian" checked={!props.vege}/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={(e)=>handleSubmit(e,props)}>Submit</button>
        </div>
      </div>

  )
}

export default PizzaForm
