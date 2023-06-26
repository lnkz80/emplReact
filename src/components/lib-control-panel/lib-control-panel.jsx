import './lib-control-panel.css'
import LibNewItem from '../lib-new-item/lib-new-item'; 

const LibControlPanel = () => {
    const showPanel = true;
    return (
        <div className="lib-control-panel app-brd">
            <div className='lib-control-panel__afs-line'>
                <i className="fa-sharp fa-solid fa-circle-plus"></i>
                <i className="fa-solid fa-filter"></i>
                <input type="text" placeholder='Пошук...' />                
            </div>
            {
                showPanel&&<LibNewItem />
            }
            {/* <LibNewItem /> */}
        </div>
    );
}

export default LibControlPanel;