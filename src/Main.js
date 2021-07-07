import { Component } from 'react';
import Ratings from './Ratings'
import './styleCss/Main.css';

import { FoodListDataContext } from './FoodListDataContext'

class Main extends Component {
  static contextType = FoodListDataContext;

  render() {
    const { foodList } = this.context;
    const foodLists = foodList.length ? (foodList.map(list => {
      return (
        <div key={list.id} className='card'>
          <img src={list.strMealThumb} alt="pics" className='pic' />
          <div className='innercard'>
            <div className='cardtitleprice'>
              <div className='title'>{list.title}</div>
              <div className='price'>{list.price}</div>
            </div>
            <p className='strmeal'>{(list.strMeal) + " + drink"}</p>
            <p className='description'>{(list.description.length > 0) ? (list.description.slice(0, 85) + " and more...") : (null)}</p>
          </div>
          <div className='cardratingbtn'>
            <div className='rating'><Ratings ratings={list.ratings} /></div>
            <button className='btn'> + </button>
          </div>
        </div>
      )
    })
    ) : (
      <div className="loader">
        <div className="loading"></div>
      </div>
    )
    return (
      <div className='container'>
        <div className="App"> {foodLists} </div>
        <div className='btn'>
        <button className='learnbtn'>Learn More</button>
        </div>
      </div>
    )
  }
}

export default Main;
