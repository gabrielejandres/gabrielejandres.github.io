import { Suspense } from "react";

import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import About from "./components/About/index";
import Resume from "./components/Resume/index";
import Tech from "./components/Tech/index";
import Portfolio from "./components/Portfolio/index";

import data from './assets/data/data.json';

import "./App.css";

export default function App() {
  return (
    <Suspense fallback="Loading...">
      <div className="App">
        <Header data={data.main} />
        <About data={data.main} />
        <Resume />
        <Tech data={data.skills} />
        <Portfolio data={data.portfolio} />
        <Footer />
      </div>
    </Suspense>
  );
}
