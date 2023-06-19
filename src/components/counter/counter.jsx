import { Component } from 'react';

class Counter extends Component {
    constructor(props){
      super();
      this.maxPoint = 5;
      this.minPoint = -5;
      this.state ={
        count: props.start,
      }
    }
  
    countPlus = () => this.setState(state => (    
        {
          count: state.count < this.maxPoint ? state.count + 1 : state.count,
        }
      )
    );
  
    countMinus = () => this.setState(state => (
        {
          count: state.count > this.minPoint ? state.count - 1 : state.count,
        }
      )
    );
  
    reset = () => this.setState(state => ({count: this.props.start})) ;
  
    round = () => this.setState(state => (
          {
            count: Math.round(Math.random() * (this.maxPoint - this.minPoint) + this.minPoint)
          }
        )
      ) ;
    
    render(){
      return (
        <div>
          <button onClick={ this.countMinus }>-</button>
          <span >{this.state.count}</span>
          <button onClick={ this.countPlus }>+</button>
          <button onClick={ this.round }>RND</button>
          <button onClick={ this.reset }>RST</button>
        </div>
      );
    }
  
  }

  export default Counter;