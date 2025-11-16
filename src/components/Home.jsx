import banner1 from "../assets/banner.jpeg";

const Home = () => {
  return (
    <>
      <div
        className="h-screen  bg-cover bg-center bg-no-repeat bg-fixed opacity-90 "
        style={{ backgroundImage: `url(${banner1})` }}
      >
        {/* <img className="col-span-2" src={banner1}></img> */}
        <nav className="flex p-2 mx-auto ">
          <a className="mx-2">خانه</a>
          <a className="mx-2">درباره ما</a>
          <a className="mx-2">فروشگاه</a>
          <a className="mx-2">تماس با ما</a>
          <a className="mx-2">ثبت نام</a>
        </nav>
      </div>
    </>
  );
};
export default Home;
