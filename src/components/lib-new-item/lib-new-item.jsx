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
        //! ?USE STATE TO REMOVE CLASS REJECTED?
        const target = e.target;
        target.classList.remove('field_rejected');
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
        const sbtBtn = e.target.querySelector('button');
        e.preventDefault();

        const btnAnimate = (tglClass, tglWord) => {
            sbtBtn.classList.add(tglClass);
            sbtBtn.textContent = tglWord;
            sbtBtn.disabled = true;
            setTimeout(() => {
                sbtBtn.disabled = false;
                sbtBtn.classList.remove(tglClass);
                sbtBtn.textContent = "Send";
            }, 2000);
        }

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
            btnAnimate('approve', 'Sended!');
            e.currentTarget.reset();

        } else {
            //? MAYBE CAN USE STATE WHEN CHANGE COLOR OF BORDER?
            inValidFields.forEach(fieldName=>e.currentTarget.querySelector(`[name=${fieldName}]`).classList.add('field_rejected'));
            btnAnimate('reject', 'Error!');
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
                    <option value="" defaultValue>Choose location</option>
                    <option value="Office1">Office 1</option>
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