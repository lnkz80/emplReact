

const LibItem = ({i, item}) => {
    const {name, type, location, user} = item;
    return(
        <tr>
            <td>{i}</td>
            <td>{name}</td>
            <td>{type}</td>
            <td>{location}</td>
            <td>{user}</td>
            <td>
                {/* //! NEED 2 ADD CLASSES WITH HOVER COLORS ON THIS BUTTONS (btnEdit, btnTrash)  */}
                <a href="\"><i className="fa-regular fa-pen-to-square"></i></a>
                <a href="\"><i className="fa-regular fa-trash-can"></i></a>
            </td>
        </tr>
    );
}

export default LibItem;