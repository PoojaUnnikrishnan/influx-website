import './App.css';
import { Benefits } from './components/Benefits';
import { FaqSection } from './components/FaqSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div class="background-image-container">
        <div class="d-flex flex-column col-md-11 opening-container">
          <HeroSection />
        </div>
      </div>
      <div class="d-flex justify-content-center middle-container">
        <div class="d-flex flex-column col-md-11">
          <Benefits />
        </div>
      </div>
      <div class="d-flex justify-content-center">
        <div class="d-flex flex-column col-md-11 last-container">
          <div class="mt-5">
            <FaqSection />
          </div>
        </div>
      </div>
      <div class="fixed-footer">
        <button type="button" className="btn btn-danger px-4" id="danger" style={{ fontFamily: "YourCustomFont-medium" }}>
          Get Started {" "}
          <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
        <div class="footer-note" style={{ fontFamily: "YourCustomFont-light" }}>
          Marcus MVP is only available for use in our Mobile App
        </div>
      </div>
    </>
  );
}

export default App;
