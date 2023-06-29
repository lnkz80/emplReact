import { Component } from 'react';
import './lib-item.css'

class LibItem extends Component {
    
    constructor(props){
        super(props);
        
        this.state = {
            selected: false,
        }        
    }
    
    onSelected = () => {
        this.setState(({selected}) => ({ // this.state.selected або {selected} - деструктуризація
            selected: !selected
        }));
    };
    
    render() {
        const {i, item, onDelete} = this.props;
        const {name, type, location, user} = item;
        const {selected} = this.state;
        let classNames = "lib-item";
        if (selected) {
            classNames += " lib-item_selected";
        }
        return(
            // <tr className={classNames} onClick = {this.onSelected}>            
            <tr className={classNames}>            
                <td>{i}</td>
                <td>{name}</td>
                <td>{type}</td>
                <td>{location}</td>
                <td>{user}</td>
                <td>                
                    <i className="fa-regular fa-pen-to-square lib-item__edit"></i>
                    <i onClick={onDelete} className="fa-regular fa-trash-can lib-item__delete"></i>
                </td>
            </tr>
        );
    };
    
    
};

export default LibItem;