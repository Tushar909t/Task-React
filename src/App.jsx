import { Fragment } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import TaskBoard from "./components/TaskBoard";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Fragment>
      <Header />
      <div className="flex flex-col justify-center items-center">
        <HeroSection />
        <TaskBoard />
      </div>
      <Footer />
    </Fragment>
  );
};

export default App;
