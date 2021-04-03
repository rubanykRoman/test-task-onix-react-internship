import './App.scss';
import logo from './logo.png';
import main from './main.png';
import PropTypes from 'prop-types';
// import {Task2,Task3,Task4,Task5,Task6,Task7} from './components/';
import Task2 from './components/task2/Task2';
import Task3 from './components/task3/Task3';
import Task4 from './components/task4/Task4';
import Task5 from './components/task5/Task5';
import Task6 from './components/task6/Task6';
import Task7 from './components/task7/Task7';

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
          <Task7></Task7>
          {/* <Task6></Task6> */}
          {/* <Task5></Task5> */}
          {/* <Task4></Task4> */}
          {/* <Task3></Task3> */}
          {/* <Task2></Task2> */}
          <h1 className="main__project-name"><strong><span>Support the animals!</span></strong></h1>
          <p className="main__project-description">Register and participate in the volunteer support program for stray animals <br></br> at our shelter this weekend with your family or team</p>
          <div className="main__buttom-wrap">
            <button className="join-button"><span className="join">Join Us</span></button>
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