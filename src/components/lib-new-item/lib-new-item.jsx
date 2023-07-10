import { Component } from "react";
import "./lib-new-item.css"

class LibNewItem extends Component {
    constructor(){
        super();

        this.state = {
            itemName: '',
            itemType: '',
            itemLocation: '',
            itemUser: ''
        }
    }

    onChangeItemValue = (e) => {
        const target = e.target;
        this.setState(()=>({
            [target.name]: target.value,
        }));
    }

    addNewItem = (e) => {
        e.preventDefault();
        console.log(this.state);
    }

    render(){
        return (
            <form action="" method="" className="lib-new-item">
                <h5>Add new item</h5>
                <input  onChange={this.onChangeItemValue} type="text" placeholder="Item name" name="itemName" />
                <input  onChange={this.onChangeItemValue} type="text" placeholder="Type of item" name="itemType" />            
                <select onChange={this.onChangeItemValue} name="itemLocation" id="loc">
                    <option value="Office1">Office 1</option>
                    <option value="Office2">Office 2</option>
                    <option value="Office3">Office 3</option>
                    <option value="ConfRoom">Conference Room</option>
                </select>
                <input  onChange={this.onChangeItemValue} type="text" placeholder="User" name="itemUser" />
                <button onClick={this.addNewItem}>Send</button>
            </form>
        )
    }
    
};

export default LibNewItem;