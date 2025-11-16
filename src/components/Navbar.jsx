import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 pointer-events-auto">
        {/* Mobile(button)*/}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex items-center justify-center p-2 rounded-md m-4 bg-[rgba(255,255,255,0.08)] backdrop-blur-sm"
          >
            {open ? <IoCloseSharp size={26} /> : <RxHamburgerMenu size={26} />}
          </button>
        </div>

        {/* Desktop*/}
        <div className=" w-[100%] hidden md:flex mx-auto py-4 mt-4 rounded-full bg-[rgba(255,255,255,0.08)] backdrop-blur-sm absolute left-1/2 transform -translate-x-1/2">
          <a className="mx-5 font-Vazir text-lg font-bold text-carbon hover:text-red1">
            خانه
          </a>
          <a className="mx-5 font-Vazir text-lg font-bold text-carbon hover:text-red1">
            درباره ما
          </a>
          <a className="mx-5 font-Vazir text-lg font-bold text-carbon hover:text-red1">
            فروشگاه
          </a>
          <a className="mx-5 font-Vazir text-lg font-bold text-carbon hover:text-red1">
            تماس با ما
          </a>
          <a className="mx-5 font-Vazir text-lg font-bold text-carbon hover:text-red1">
            ثبت نام
          </a>
        </div>
        {/* mobile */}
        <div
          id="mobile-menu"
          className={`md:hidden fixed top-0 left-0 h-full w-3/5 max-w-xs bg-[rgba(255,255,255,0.06)] backdrop-blur-sm shadow-lg transform transition-transform duration-300 ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="px-4 pt-20 space-y-6">
            <a
              onClick={() => setOpen(false)}
              className="block font-Vazir text-lg font-bold text-strawberry hover:text-darkRed"
            >
              خانه
            </a>
            <a
              onClick={() => setOpen(false)}
              className="block font-Vazir text-lg font-bold text-strawberry hover:text-darkRed"
            >
              درباره ما
            </a>
            <a
              onClick={() => setOpen(false)}
              className="block font-Vazir text-lg font-bold text-strawberry hover:text-darkRed"
            >
              فروشگاه
            </a>
            <a
              onClick={() => setOpen(false)}
              className="block font-Vazir text-lg font-bold text-strawberry hover:text-darkRed"
            >
              تماس با ما
            </a>
            <a
              onClick={() => setOpen(false)}
              className="block font-Vazir text-lg font-bold text-strawberry hover:text-darkRed"
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
