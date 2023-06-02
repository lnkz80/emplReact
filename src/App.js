import './App.css';

const AppHeader = ({ uname }) => <h2 className='appHeader'>Hello, {uname}!</h2>;

function App() {
  return (
    <div className='App'>
      <AppHeader uname='Hike' />
      <button className='btn btn-primary'>Click</button>
    </div>
  );
}

export default App;
