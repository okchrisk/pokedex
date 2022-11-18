import './css/App.css';
import PokedexContainer from './PokedexContainer';

function App() {
  return (
    <>
      <div className="app__content">
        <div className="app__art--pokeball"></div>
        <div className="app__art--pokemon"></div>
      </div>

      <PokedexContainer />
    </>
  );
}

export default App;
