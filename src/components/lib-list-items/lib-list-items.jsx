import libItemsDB from '../../data/lib-items';

import LibItem from '../lib-item/lib-item';
import './lib-list-items.css';

function LibListItems() {
    return(
        <div className="lib-list-items app-brd">
            <table>
                <thead>
                    <tr>                    
                        <td>#</td>
                        <td>name</td>
                        <td>type</td>
                        <td>location</td>
                        <td>user</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                {
                    libItemsDB.map((libItem, idx) => <LibItem item={{i: ++idx, name: libItem.name, type: libItem.type, location: libItem.location, user: libItem.user}} />)
                }
                </tbody>         
            </table>
        </div>
    )
}

export default LibListItems;