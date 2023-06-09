// import { Component } from 'react';



import LibItem from '../lib-item/lib-item';
import './lib-list-items.css';

const LibListItems = ({data, onDelete}) => {

  const tableRows = data.map((item, idx) => {
    //=====> LONG VERSION
    // return <LibItem item={
    //     {
    //         i: ++idx,
    //         name: item.name,
    //         type: item.type,
    //         location: item.location,
    //         user: item.user
    //     }
    //         }/>

    //=====> SHORT VERSION
    const { id, ...itemProps } = item;
    return (
      <LibItem
        key={id}
        i={++idx}
        item={{ ...itemProps }}
        onDelete={() => onDelete(id)}
      />
    );
  });
  
    return (
      <div className='lib-list-items app-brd'>
        <table>
          <thead>
            <tr>
              <td>#</td>
              <td>name</td>
              <td>type</td>
              <td>location</td>
              <td>user</td>
              <td>&nbsp;</td>
            </tr>
          </thead>
          <tbody>{tableRows}</tbody>
        </table>
      </div>
    );
  
}

export default LibListItems;
