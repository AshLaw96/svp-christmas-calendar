import AdventCalendar from "./components/AdventCalendar";
import Logos from "./components/Logos";
import NightSky from "./components/NightSky";
import { CAMPAIGN_YEAR } from "../src/config";

import "./App.css";

const DONATE_URL = `https://svp.org.uk/bringing-light-lifes-darker-moments?ea.tracking.id=calendar${CAMPAIGN_YEAR}`;

function App() {
  return (
    <div className="App">
      <NightSky />
      <main className="main-content-wrapper">
        <Logos />
        <header className="title-container">
          <p className="campaign-kicker">Advent {CAMPAIGN_YEAR}</p>
          <h1 className="title">Bring Light to Life's Darker Moments</h1>
        </header>
        <AdventCalendar />
        <div className="donate-container">
          <a
            href={DONATE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="donate-button"
          >
            Bring light
            <span className="visually-hidden"> (donate to SVP, opens in new tab)</span>
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
