import Canvas from "../components/canvas";
import Details from "../components/details";
import Tools from "../components/Tools";
import Navbar from "../layouts/Navbar";
import './Home.scss'

const Home = () => {
  return (
    <>
    <Navbar />
    <div className="home-container">
      <Tools/>
      <Canvas/>
      <Details/>
    </div>
    </>
  );
};

export default Home;
