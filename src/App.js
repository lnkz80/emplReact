import { Component } from 'react';

import AppHeader from './components/app-header/app-header';
import LibControlPanel from './components/lib-control-panel/lib-control-panel';
import LibListItems from './components/lib-list-items/lib-list-items';

// import Counter from './components/counter/counter';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
    };
    this.maxId = this.state.data.length;
  }

  addNewItem = ({name, type, location, user}) => {      
    
    const newItem = {
      id: ++this.maxId,
      name,
      type,
      location,
      user,
    };
    
    this.setState(({data})=>{
      const newArr = [...data, newItem];
      return{
        data: newArr
      };
    });

  }
  
  deleteItem = id => {    
    this.setState(({data}) =>{      
      return {
          data: data.filter(elem => elem.id !== id ),
          }
        })
    
      };
      
  render() {    
    // console.log(this.state.data);
    return (          
      <div className='App'>
        <AppHeader title='Devices library' icon='fa-solid fa-book' />
        <LibControlPanel onAddNewItem = {this.addNewItem} />
        <LibListItems data = {this.state.data} onDelete = {this.deleteItem} />
        {/* <Counter start={0} /> */}
      </div>
    );
  }
}

export default App;
