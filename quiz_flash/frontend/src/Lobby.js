import "./App.css"
import "./Room.css"
import "./index.css"
import {Link} from 'react-router-dom';
import mascot from './flashtheduck.png';
import owl from './owl.png'
import frog from './frog.png'

function Lobby(props) {
    return (
      <header>
        <div className="player_grid">
            <div className="player">
                <img src={mascot} className="mascot" alt="mascot" />
                <h1 className="player_text">Gordon</h1>
            </div>
            <div className="player">
                <img src={owl} className="owl" alt="owl" />
                <h1 className="player_text">Ryan</h1>
            </div>
            <div className="player">
                <img src={frog} className="frog" alt="frog" /> 
                <h1 className="player_text">Ryan</h1>
            </div>
            <div className="player">
            </div>
        </div>
        <button className="start_button"><Link to="Room.js">Start Game!</Link></button>
      </header>
    );
  }

  export default Lobby;