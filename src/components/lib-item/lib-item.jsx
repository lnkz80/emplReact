import './lib-item.css'

const LibItem = ({i, item}) => {
    const {name, type, location, user} = item;
    return(
        <tr className="lib-item">
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
}

export default LibItem;