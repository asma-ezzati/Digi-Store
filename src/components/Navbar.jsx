const Navbar = () => {
  return (
    <>
      <nav className=" flex py-4 mx-5 rounded-full  bg-[rgba(255,255,255,0.08)] bg-blur-[10px] absolute top-5 ">
        <a className=" text-center  mx-5 font-Vazir text-lg font-bold text-carbon hover:text-red1 ">
          خانه
        </a>
        <a className=" text-center  mx-5 font-Vazir text-lg font-bold text-carbon hover:text-red1 ">
          درباره ما
        </a>
        <a className=" text-center  mx-5 font-Vazir text-lg font-bold text-carbon hover:text-red1 ">
          فروشگاه
        </a>
        <a className=" text-center  mx-5 font-Vazir text-lg font-bold text-carbon  hover:text-red1">
          تماس با ما
        </a>
        <a className=" text-center  mx-5 font-Vazir text-lg font-bold text-carbon  hover:text-red1">
          ثبت نام
        </a>
      </nav>
    </>
  );
};
export default Navbar;
