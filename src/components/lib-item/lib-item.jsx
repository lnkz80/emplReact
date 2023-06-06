

function LibItem({item}){
    return(
        <tr>
            <td>{item.i}</td>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.location}</td>
            <td>{item.user}</td>
            <td><a href="\"><i className="fa-regular fa-pen-to-square"></i></a><a href="\"><i className="fa-regular fa-trash-can"></i></a></td>
        </tr>
    );
}

export default LibItem;