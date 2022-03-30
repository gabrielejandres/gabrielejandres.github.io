import "./App.css";
import { Suspense } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Resume from "./components/Resume";
import Tech from "./components/Tech";
import Portfolio from "./components/Portfolio";

import data from './assets/data/data.json';

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
