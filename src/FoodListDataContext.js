import React, { Component, createContext } from 'react'


export const FoodListDataContext = createContext()

export class FoodListDataProvider extends Component {
  
	state = {
		foodList:[]
	}

	componentDidMount() {
		fetch('https://asm-dev-api.herokuapp.com/api/v1/food')
		 .then(res => res.json())
		  .then(data => {
			  this.setState({
				  foodList: data.data.meals
				});
			}
		)
	}


   render() {
		const { foodList } = this.state;
		return (
			<FoodListDataContext.Provider value={{ foodList }}>
				{this.props.children}
			</FoodListDataContext.Provider>
		)
	}
}



