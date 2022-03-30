import "./App.css";
import { Suspense } from "react";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Tech from "./Components/Tech";
import Portfolio from "./Components/Portfolio";

import data from './data.json';

export default function App() {
  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <Header data={data.main} />
        <About data={data.main} />
        <Resume data={data.resume} />
        <Tech data={data.skills} />
        <Portfolio data={data.portfolio} />
        <Footer />
      </div>
    </Suspense>
  );
}
