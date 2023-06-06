import './lib-control-panel.css'

const LibControlPanel = () => {
    return (
        <div className="lib-control-panel app-brd">            
            <i className="fa-sharp fa-solid fa-circle-plus"></i>
            <i className="fa-solid fa-filter"></i>
            <input type="text" placeholder='Пошук...' />
        </div>
    );
}

export default LibControlPanel;