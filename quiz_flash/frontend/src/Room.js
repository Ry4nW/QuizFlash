import "./App.css"
import "./Room.css"
import "./index.css"
import {Link} from 'react-router-dom';
import mascot from './flashtheduck.png';

function Room(props) {
    return (
      <header>
        <button className="leave_button"><Link to="App.js">Leave</Link></button>
        <div className="grid">
            <div class="container">
                <div className="qanda_title">
                </div>
                <div className="qanda_title">
                  <img src={mascot} className="mascot" alt="mascot" />
                </div>
            </div>
            <div className="container">
                <div className="qanda_title">
                </div>
                <div className="qanda">
                    <h1 className="text" >What is Django used for?</h1>
                </div>
            </div>
        </div>
      </header>
    );
  }

  export default Room;