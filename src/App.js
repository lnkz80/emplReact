import './App.css';
import AppHeader from './components/app-header/app-header'
import LibControlPanel from './components/lib-control-panel/lib-control-panel';
import LibListItems from './components/lib-list-items/lib-list-items';

const App = () => {
  return (
    <div className='App'>
      <AppHeader title="Devices library" icon="fa-solid fa-book" />       
      <LibControlPanel />
      <LibListItems />
    </div>
  );
}

export default App;
