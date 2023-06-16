import './App.css';
import AppHeader from './components/app-header/app-header'
import LibControlPanel from './components/lib-control-panel/lib-control-panel';
import LibListItems from './components/lib-list-items/lib-list-items';
import Counter from './components/counter/counter';


const App = () => {
  return (
    <div className='App'>
      <AppHeader title="Devices library" icon="fa-solid fa-book" />       
      <LibControlPanel />
      <LibListItems />
      <Counter start={0} />
    </div>
  );
}

export default App;
