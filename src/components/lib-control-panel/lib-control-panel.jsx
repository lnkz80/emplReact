import { Component } from 'react';
import LibNewItem from '../lib-new-item/lib-new-item';
import './lib-control-panel.css';

class LibControlPanel extends Component {
  constructor() {
    super();
    this.state = {
      showPanel: false,
      newItemClass: 'new-item',      
    };    
  }
//! ANIMATE APPEARING OF BLOCK!!!!!
  toggleNewItem = () =>
    this.setState((state) => ({
      showPanel: !state.showPanel,
      newItemClass: state.newItemClass !== 'new-item' ? 'new-item' : 'new-item animate',      
    }));

  render() {
    return (
      <div className='lib-control-panel app-brd'>
        <div className='lib-control-panel__afs-line'>
          <i className='fa-sharp fa-solid fa-circle-plus' onClick={this.toggleNewItem}></i>
          <i className='fa-solid fa-filter'></i>
          <input type='text' placeholder='Пошук...' />
        </div>
        <div className={this.state.newItemClass}>{this.state.showPanel && <LibNewItem />}</div>
      </div>
    );
  }
}

export default LibControlPanel;
