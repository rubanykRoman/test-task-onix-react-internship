import './App.scss';
import logo from './logo.png';
import main from './main.png';
import PropTypes from 'prop-types';

//данные массива names и объекта countriesMembers должны получаться динамически

const names = ["Stefani Germanotta", "Peter Parker", "Elon Musk", "James Howlett", "Bruce wayne"];

const countriesMembers = { "USA": 27002, "France": 9830,"Sweden":5219,"Ukraine":4450 }
const country1 = "USA";
const country2 = "France";
const country3 = "Sweden";
const country4 = "Ukraine";
const members1 = countriesMembers.USA;
const members2 = countriesMembers.France; 
const members3 = countriesMembers.Sweden;
const members4 = countriesMembers.Ukraine;

const years = ["2017", "2020", "2019", "2018", "2021"];
const quantity = [20456, 25876, 24200, 23263, 51004];

const withSortFoo = () => {
  years.sort((a, b) => a - b);
  console.log(years)
};

const bubbleSort = () => {
  for (let i = 0; i < quantity.length-1; i++) {
        let flagSwap = false;
        for (let j = 0; j < quantity.length - 1 - i; j++) {
            if (quantity[j] > quantity[j + 1]) {
                [quantity[j], quantity[j + 1]] = [quantity[j + 1], quantity[j]];
                flagSwap = true;
            }
        }
        if (!flagSwap) break;
  }
  console.log(quantity);
};

const addItem = () => {
  years.push("new item");
  console.log(years);
};

const removeItem = () => {
  years.pop();
  console.log(years);
};



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
          <hr/>
            <div className="main__task-3">
              <h3>Task-3</h3>
              <table rules="3">
                <thead>
                  <tr>
                      <th onClick={withSortFoo}>Year</th>
                      <th onClick={bubbleSort}>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>{years[0]}</td>
                      <td>{quantity[0]}</td>
                    </tr>
                    <tr>
                      <td>{years[1]}</td>
                      <td>{quantity[1]}</td>
                    </tr>
                    <tr>
                      <td>{years[2]}</td>
                      <td>{quantity[2]}</td>
                    </tr>
                    <tr>
                      <td>{years[3]}</td>
                      <td>{quantity[3]}</td>
                    </tr>
                    <tr>
                      <td>{years[4]}</td>
                      <td>{quantity[4]}</td>
                  </tr>
                </tbody>
              </table>
              <button onClick={addItem}>ADD</button>
              <button onClick={removeItem}>REMOVE</button>
            </div>
          <hr/>
            <h1 className="main__project-name"><strong><span>Support the animals!</span></strong></h1>
            <p className="main__project-description">Register and participate in the volunteer support program for stray animals <br></br> at our shelter this weekend with your family or team</p>
            <div className="main__buttom-wrap">
                  <button className="join-button"><span className="join">Join Us</span></button>
            </div>
            <div className="main__dinamic-parts">
              <div className="new-members">
                <h4>Last New members:</h4>
                  <ul>
                    <li>{names[0]}</li>
                    <li>{names[1]}</li>
                    <li>{names[2]}</li>
                    <li>{names[3]}</li>
                    <li>{names[4]}</li>
                  </ul>
              </div>
              <div className="most-popular-countries">
              <table className="countries" cellPadding="3">
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Members</th>
                  </tr>
                </thead>
                <tbody>
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
                </tbody>                 
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
  
  countriesMembers: PropTypes.object,
  country1: PropTypes.string,
  country2: PropTypes.string,
  country3: PropTypes.string,
  country4: PropTypes.string,

  members1: PropTypes.number,
  members2: PropTypes.number,
  members3: PropTypes.number,
  members4: PropTypes.number,

  years: PropTypes.array, 
  quantity: PropTypes.array,
  
}

export default App;