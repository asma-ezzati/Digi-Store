import banner1 from "../assets/banner.jpeg";

const Home = () => {
  return (
    <>
      <div
        className="h-screen  bg-cover bg-center bg-no-repeat bg-fixed opacity-90 "
        style={{ backgroundImage: `url(${banner1})` }}
      >
        {/* <img className="col-span-2" src={banner1}></img> */}
        <div></div>
      </div>
    </>
  );
};
export default Home;
