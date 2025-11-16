import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="    ">
        {/* {Desktop} */}
        <div className="hidden md:flex py-4 rounded-full  bg-[rgba(255,255,255,0.08)] bg-blur-[10px] absolute top-5">
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
        </div>

        {/* {mobile} */}

        <div className="md:hidden flex items-center ">
          <button
            onClick={() => setOpen(!open)}
            className="inline-flex  items-center justify-center p-2 rounded-md absolute top-5 "
          >
            {open ? <IoCloseSharp size={30} /> : <RxHamburgerMenu size={30} />}
          </button>
        </div>

        <div
          id="mobile-menu"
          className={`md:hidden   bg-grey bg-blur-[10px] w-[40%] h-screen overflow-hidden transition-[max-width] duration-500 ease-in-linear ${
            open ? "max-w-96" : "max-w-0"
          }`}
        >
          <div className="grid px-2 pt-10 pb-4 space-y-8 sm:px-3">
            <a
              onClick={() => setOpen(false)}
              className=" text-center  mx-5 font-Vazir text-lg font-bold text-carbon hover:text-red1 "
            >
              خانه
            </a>
            <a
              onClick={() => setOpen(false)}
              className=" text-center  mx-5 font-Vazir text-lg font-bold text-carbon hover:text-red1 "
            >
              درباره ما
            </a>
            <a
              onClick={() => setOpen(false)}
              className=" text-center  mx-5 font-Vazir text-lg font-bold text-carbon hover:text-red1 "
            >
              فروشگاه
            </a>
            <a
              onClick={() => setOpen(false)}
              className=" text-center  mx-5 font-Vazir text-lg font-bold text-carbon  hover:text-red1"
            >
              تماس با ما
            </a>
            <a
              onClick={() => setOpen(false)}
              className=" text-center  mx-5 font-Vazir text-lg font-bold text-carbon  hover:text-red1"
            >
              ثبت نام
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
