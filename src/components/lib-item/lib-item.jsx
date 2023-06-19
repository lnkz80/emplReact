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
        const {i, item} = this.props;
        const {name, type, location, user} = item;
        const {selected} = this.state;
        let classNames = "lib-item";
        if (selected) {
            classNames += " selected";
        }
        return(
            <tr className={classNames} onClick = {this.onSelected}>
                <td>{i}</td>
                <td>{name}</td>
                <td>{type}</td>
                <td>{location}</td>
                <td>{user}</td>
                <td>                
                    <a className="lib-item__edit" href="\"><i className="fa-regular fa-pen-to-square"></i></a>
                    <a className="lib-item__delete" href="\"><i className="fa-regular fa-trash-can"></i></a>
                </td>
            </tr>
        );
    };
    
    
};

export default LibItem;