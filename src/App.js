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
  }

  deleteItem = id => {    
    this.setState(({data}) =>{
      return {
          data: data.filter(elem => elem.id !== id ),
          }
        })
    
  };

  render() {
    return (
      <div className='App'>
        <AppHeader title='Devices library' icon='fa-solid fa-book' />
        <LibControlPanel />
        <LibListItems data = {this.state.data} onDelete = {this.deleteItem} />
        {/* <Counter start={0} /> */}
      </div>
    );
  }
}

export default App;
