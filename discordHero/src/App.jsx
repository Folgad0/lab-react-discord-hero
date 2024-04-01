import "./App.css";
import discordLogo from "./assets/package-lock.png";
import menuLogo from "./assets/menu-icon.png";
import background from "./assets/discord-background.png";

function App() {
  return (
    <div className="App">
      <div className="backgroundColor">
        <nav className="navbar">
          <div className="icon">
            <img src={discordLogo} className="icon-logo" />
          </div>
          <div className="iconMenu">
            <img src={menuLogo} className="icon-logo" />
          </div>
        </nav>
        <div className="content">
          <h1>IMAGINE A PLACE</h1>
          <h2>
            ...where you can belong to a school club. a gaming group, or a{" "}
            <br></br>
            worldwide art community. Where just you and a handful of <br></br>
            friends can spend time together. A place that makes it easy to{" "}
            <br></br>
            talk every day and hang out more often.
          </h2>
        </div>
        <div className="button1">
          <button>Download for Mac</button>
        </div>
        <div className="button2">
          <button>Open Discord in your browser</button>
        </div>
        <div className="backgroundpix" />
        <img src={background} className="backgroundpix" />
      </div>
    </div>
  );
}

export default App;
