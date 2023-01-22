import "./App.css"
import "./Room.css"
import "./index.css"
import "../../style.css"
import mascot from './flashtheduck.png';
import owl from './owl.png'
import frog from './frog.png'

function Room(props) {
    return (
      <header>
        <button class="leave_button"><Link to="App.js">Leave</Link></button>
        <div class="grid">
            <div class="container">
                <div class="qanda_title">
                </div>
                <div class="qanda_title">
                  <img src={mascot} class="img_block rotate_image" className="mascot" alt="mascot" />
                </div>
            </div>
            <div class="container">
                <div class="qanda_title">
                </div>
                <div class="qanda">
                    <h1 class="text" >What is Django used for?</h1>
                </div>
            </div>
        </div>
      </header>
    );
  }

  export default Lobby;