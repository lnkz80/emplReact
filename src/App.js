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
      searchText: '',
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

  onUpdSearch = searchText => this.setState({searchText});

  searchName = (items, text) => {
    if (text.length === 0){
      return items;
    }
    return items.filter(item => {
      return item.name.indexOf(text) > -1
    });
  }

  render() {
    const {data, searchText} = this.state;
    // console.log(this.state.data);
    const visibleItems = this.searchName(data, searchText);

    return (
      <div className='App'>
        <AppHeader title='Devices library' icon='fa-solid fa-book' />
        <LibControlPanel onAddNewItem = {this.addNewItem} onSearch = {this.onUpdSearch} />
        <LibListItems data = {visibleItems} onDelete = {this.deleteItem} />        
      </div>
    );
  }
}

export default App;
