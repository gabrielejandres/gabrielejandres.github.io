import "./App.css";
import { Suspense } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Tech from "./Components/Tech";
import Portfolio from "./Components/Portfolio";

import resumeData from './resumeData.json';

export default function App() {
  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Tech data={resumeData.skills} />
        <Portfolio data={resumeData.portfolio} />
        <Footer />
      </div>
    </Suspense>
  );
}
