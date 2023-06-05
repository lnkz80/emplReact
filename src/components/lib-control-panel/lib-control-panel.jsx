import './lib-control-panel.css'

function LibControlPanel(){
    return (
        <div className="lib-control-panel app-brd">            
            <i class="fa-sharp fa-solid fa-circle-plus"></i>
            <i class="fa-solid fa-filter"></i>
            <input type="text" placeholder='Пошук...' />
        </div>
    );
}

export default LibControlPanel;