import React, { Component, Fragment } from 'react';
import Header from './components/Header'
import PizzaForm from './components/PizzaForm'
import PizzaList from './containers/PizzaList'
class App extends Component {
  state={
    pizza:[],
    topping:"",
    size:"samll",
    vege:null,
    id:null
  }
  componentDidMount() {
    fetch("http://localhost:3000/pizzas").then(res=> res.json())
    .then(data=> {
      return this.setState({
        pizza:data
      })
    })
  }

  editPizza=(id)=>{
    this.state.pizza.map(pizza=> {
      if (pizza.id===id) {
        this.setState({
          topping:pizza.topping,
          size:pizza.size,
          vege:pizza.vegetarian,
          id:id
        })
      }
    

    })
   
  }
  handleEditText=(e)=>{
    console.log(e.target.value)
    this.setState({
      topping:e.target.value
    })
  }
 
  handleEditSize=(e)=>{
    this.setState({
      size:e.target.value
    })
  }

  handleEditVege=(e)=>{
    if (e.target.value=== "Vegetarian"){
      this.setState({
         vege:true
      })
    } else {
      this.setState({
        vege:false
     })
    }
  }

  handleEditNotVege=(e)=>{
    if (e.target.value=== "Not Vegetarian"){
      this.setState({
         vege:false
      })
    }else {
      this.setState({
        vege:true
     })
    }
   
  }

  savePizza=(id)=>{
    let newPizza= [...this.state.pizza]
    newPizza.map(pizza=> {
       if(pizza.id===id) {
          pizza.topping=this.state.topping,
          pizza.size=this.state.size,
          pizza.vegetarian=this.state.vege
       }
     })
     this.setState({
       pizza:newPizza
     })
     
  }

  render() {
    return (
      <Fragment>
        <Header/>
        <PizzaForm 
        topping={this.state.topping} 
        size={this.state.size} 
        vege={this.state.vege}
        editText={this.handleEditText}
        editSize={this.handleEditSize}
        editVege={this.handleEditVege}
        editNotVege={this.handleEditNotVege}
        savePizza={this.savePizza}
        id={this.state.id}
        />
        <PizzaList pizza={this.state.pizza} editPizza={this.editPizza} />
      </Fragment>
    );
  }
}

export default App;
