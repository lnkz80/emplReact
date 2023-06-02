import logo from './logo.svg';
import './App.css';

const AppHeader = (usr) => <h2 className="appHeader">Hello!</h2>;

function App() {
  return (
    <div className='App'>
      <AppHeader usr='Hike' />
      <button className='btn btn-primary'>Click</button>      
    </div>
  );
}

export default App;
