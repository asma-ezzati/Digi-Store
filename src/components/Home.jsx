import banner1 from "../assets/banner.jpeg";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div
        className="h-screen  bg-cover bg-center bg-no-repeat bg-fixed opacity-90 relative"
        style={{ backgroundImage: `url(${banner1})` }}
      >
        <Navbar />
      </div>
    </>
  );
};
export default Home;
