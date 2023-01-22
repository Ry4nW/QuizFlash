import "./App.css"
import "./Room.css"
import "./index.css"
import "../../style.css"
import mascot from './flashtheduck.png';
import owl from './owl.png'
import frog from './frog.png'

function Lobby(props) {
    return (
      <header>
        <div class="player_grid">
            <div class="player">
                <img src={mascot} class="mascot_img rotate_image" className="mascot" alt="mascot" />
                <h1 class="player_text">Gordon</h1>
            </div>
            <div class="player">
                <img src={owl} class="mascot_img rotate_image" className="owl" alt="owl" />
                <h1 class="player_text">Ryan</h1>
            </div>
            <div class="player">
                <img src={frog} class="mascot_img rotate_image" className="frog" alt="frog" /> 
                <h1 class="player_text">Ryan</h1>
            </div>
            <div class="player">
            </div>
        </div>
        <button class="start_button"><Link to="Room.js">Start Game!</Link></button>
      </header>
    );
  }

  export default Lobby;