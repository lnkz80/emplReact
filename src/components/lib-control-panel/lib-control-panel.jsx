import { Component } from 'react';
import LibNewItem from '../lib-new-item/lib-new-item';
import './lib-control-panel.css';

class LibControlPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showPanel: false,       
      searchText: '',
    };    
  }
//! ANIMATE APPEARING OF BLOCK!!!!!
  toggleNewItem = () =>
    this.setState((state) => ({
      showPanel: !state.showPanel,      
    }));

  onSearch = (e) => {
    const searchText = e.target.value;
    this.setState({searchText});
    this.props.onSearch(searchText);
  };
  

  render() {
    const {onAddNewItem} = this.props;
    return (
      <div className='lib-control-panel app-brd'>
        <div className='lib-control-panel__afs-line'>
          <i className='fa-sharp fa-solid fa-circle-plus' onClick={this.toggleNewItem}></i>
          <i className='fa-solid fa-filter'></i>
          <input type='text' name="search" placeholder='Пошук...' onChange={this.onSearch} />
        </div>
        {this.state.showPanel && <LibNewItem onAddNewItem = {onAddNewItem} />}        
      </div>
    );
  }
}

export default LibControlPanel;
