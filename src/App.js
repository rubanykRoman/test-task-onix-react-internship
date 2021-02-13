import './App.scss';
import logo from './logo.png';
import main from './main.png';
import PropTypes from 'prop-types';

//данные массива names и объекта countriesMembers должны получаться динамически

const names = ["Stefani Germanotta", "Peter Parker", "Elon Musk", "James Howlett", "Bruce wayne"];
const name1 = names[0];
const name2 = names[1];
const name3 = names[2];
const name4 = names[3];
const name5 = names[4];

const countriesMembers = { "USA": 27002, "France": 9830,"Sweden":5219,"Ukraine":4450 }
const country1 = "USA";
const country2 = "France";
const country3 = "Sweden";
const country4 = "Ukraine";
const members1 = countriesMembers.USA;
const members2 = countriesMembers.France; 
const members3 = countriesMembers.Sweden;
const members4 = countriesMembers.Ukraine;


function App() {
  return (
    <div className="App">
      <header className="header">
       <div className="header__logo">
          <a href="#"> <img src={logo} alt="logo" /></a>
        </div>
        <nav className="header__nav">
                <div className="nav-item"><a href="#">About</a></div>
                <div className="nav-item"><a href="#">Archive</a></div>
                <div className="nav-item"><a href="#">Donation</a></div>
                <div className="nav-item"><a href="#">Contact</a></div>
        </nav>
        <div className="header__autorization"><span>Log in</span></div>
      </header>
      <main>
        <div className="main">
          <h1 className="main__project-name"><strong><span>Support the animals!</span></strong></h1>
          <p className="main__project-description">Register and participate in the volunteer support program for stray animals <br></br> at our shelter this weekend with your family or team</p>
           <div className="main__buttom-wrap">
                <button className="join-button"><span className="join">Join Us</span></button>
          </div>
          <div className="main__dinamic-parts">
            <div className="new-members">
              <h4>Last New members:</h4>
                <ul>
                  <li>{name1}</li>
                  <li>{name2}</li>
                  <li>{name3}</li>
                  <li>{name4}</li>
                  <li>{name5}</li>
                 </ul>
            </div>
            <div className="most-popular-countries">
              <table className="countries" cellPadding="3">
                <tr>
                  <th>Country</th>
                  <th>Members</th>
                </tr>
                <tr>
                  <td>{country1}</td>
                  <td>{members1}</td>
                </tr>
                <tr>
                  <td>{country2}</td>
                  <td>{members2}</td>
                </tr>
                <tr>
                  <td>{country3}</td>
                  <td>{members3}</td>
                </tr>
                <tr>
                  <td>{country4}</td>
                  <td>{members4}</td>
                </tr>
              </table>
            </div>
          </div>
          <div className="main__bg-img">
                <img src={main} alt="main-img "/>
            </div>
        </div>
      </main>
      <footer className="footer">
        <div>
            <span>Original project of landing page <a target="_blank" href="https://cdn.dribbble.com/users/702789/screenshots/14930889/media/9d51f2614afe5ef17b972992a445bdc0.png">here</a></span>
        </div>
        <div>
            <span>prepared by <span id="author">Roman Rubanyk</span>, <a target="_blank" href="https://github.com/rubanykRoman/test-task-onix-react-internship.git">git link</a></span>
        </div>
        </footer>
      </div>
  );
}

App.propTypes = {

  names: PropTypes.array,
  name1: PropTypes.string,
  name2: PropTypes.string,
  name3: PropTypes.string,
  name4: PropTypes.string,
  name5: PropTypes.string,
  
  countriesMembers: PropTypes.object,
  country1: PropTypes.string,
  country2: PropTypes.string,
  country3: PropTypes.string,
  country4: PropTypes.string,

  members1: PropTypes.number,
  members2: PropTypes.number,
  members3: PropTypes.number,
  members4: PropTypes.number

}

export default App;