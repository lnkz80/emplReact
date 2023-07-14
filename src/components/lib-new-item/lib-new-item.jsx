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
        //!REMOVE CLASS REJECTED

        const target = e.target;
        this.setState(()=>({
            [target.name]: target.value,
        }));
    }

    validateFields = (field) => {
        if (!field || field.length < 3) {
            return false;
        } else {
            return true;
        }
    }

    onSubmit = (e) => {
        let isValid = true,
            inValidFields = [];

        e.preventDefault();

        for (let key in this.state) {
            if (!this.validateFields(this.state[key])){
                inValidFields.push(key);
                isValid = false;
            }
        }

        if (isValid){
            this.props.onAddNewItem(this.state);
            this.setState({
                name: '',
                type: '',
                location: '',
                user: ''
            });
            e.currentTarget.reset();
        } else {
            //! CHANGE STYLE ON CLASS REJECTED BORDER
            inValidFields.forEach(fieldName=>e.currentTarget.querySelector(`[name=${fieldName}]`).style.border='2px solid #ef2f0e');
        }

    }

    render(){
        // const {onAddNewItem} = this.props;
        return (
            <form action="" method="" className="lib-new-item" onSubmit={this.onSubmit} >
                <h5>Add new item</h5>
                <input  onChange={this.onChangeItemValue} type="text" placeholder="Item name" name="name" />
                <input  onChange={this.onChangeItemValue} type="text" placeholder="Type of item" name="type" />
                <select onChange={this.onChangeItemValue} name="location" id="location">
                    <option value="" disabled selected>Choose location</option>
                    <option value="Office1">Office 1</option>
                    <option value="Office2">Office 2</option>
                    <option value="Office3">Office 3</option>
                    <option value="ConfRoom">Conference Room</option>
                </select>
                <input  onChange={this.onChangeItemValue} type="text" placeholder="User" name="user" />
                {/*
                //! MAKE BUTTON GREEN WHEN SUBMITTING
                */}
                <button>Send</button>
            </form>
        )
    }

};

export default LibNewItem;