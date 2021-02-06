import './App.scss';
import logo from './logo.png';
import main from './main.png';

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

export default App;