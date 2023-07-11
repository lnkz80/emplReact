import { Component } from "react";
import "./lib-new-item.css"

class LibNewItem extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: '',
            type: '',
            location: '',
            user: ''
        }
    }

    onChangeItemValue = (e) => {
        const target = e.target;
        this.setState(()=>({
            [target.name]: target.value,
        }));
    }   
    
    onSubmit = (e) => {
        e.preventDefault();        
        this.props.onAddNewItem(this.state);
        this.setState({
            name: '',
            type: '',
            location: '',
            user: ''
        });
    }

    render(){
        // const {onAddNewItem} = this.props;
        //! DEFAULT OPTION DONT GET INTO DATA
        return (
            <form action="" method="" className="lib-new-item" onSubmit={this.onSubmit} >
                <h5>Add new item</h5>
                <input  onChange={this.onChangeItemValue} type="text" placeholder="Item name" name="name" />
                <input  onChange={this.onChangeItemValue} type="text" placeholder="Type of item" name="type" />            
                <select onChange={this.onChangeItemValue} name="location" id="location">
                    <option value="Office1" defaultValue>Office 1</option>
                    <option value="Office2">Office 2</option>
                    <option value="Office3">Office 3</option>
                    <option value="ConfRoom">Conference Room</option>
                </select>
                <input  onChange={this.onChangeItemValue} type="text" placeholder="User" name="user" />
                <button>Send</button>
            </form>
        )
    }
    
};

export default LibNewItem;