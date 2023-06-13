import './app-header.css'

const AppHeader = ({title, icon}) => {
    return(
        <div className='app-header app-brd'>
            <h1><i className={icon}></i>{title}</h1>
        </div>
    );
}

export default AppHeader;