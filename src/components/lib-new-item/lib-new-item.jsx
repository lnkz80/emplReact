import "./lib-new-item.css"

const LibNewItem = () => {
    return (
        <form action="" method="" className="lib-new-item">
            <h5>Add new item</h5>
            <input type="text" placeholder="Item name" name="itemName" />
            <input type="text" placeholder="Type of item" name="itemType" />            
            <select name="itemLocation" id="loc">
                <option value="Office1">Office 1</option>
                <option value="Office2">Office 2</option>
                <option value="Office3">Office 3</option>
                <option value="ConfRoom">Conference Room</option>
            </select>
            <input type="text" placeholder="User" name="itemUser" />
            <button>Send</button>
        </form>
    )
};

export default LibNewItem;