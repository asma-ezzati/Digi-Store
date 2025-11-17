import Laptop from "../assets/products/Laptop.webp";
import Mouse from "../assets/products/Mouse.webp";
import Keyboard from "../assets/products/Keyboard.webp";
import Headphone from "../assets/products/Headphone.webp";

const Store = () => {
  return (
    <>
      <div className="pt-24 pb-16 bg-whiteSmoke">
        <h1 className="font-Vazir text-2xl m-5 mb-10 text-red1 text-center ">
          فروشگاه ما
        </h1>
        <div className="grid lg:grid-cols-4  w-[95%] mx-auto ">
          <div className=" bg-white m-3 rounded-xl shadow-xl ">
            <img
              src={Laptop}
              alt="Laptop"
              className="p-2 w-[70%] mx-auto"
            ></img>
            <h1 className="font-Vazir text-xl text-center ">لپ تاپ</h1>
            <button className=" p-2 m-2 mt-4 rounded-xl w-[94%] font-Vazir bg-strawberry text-white  hover:bg-darkRed ">
              همه ی محصولات
            </button>
          </div>
          <div className=" bg-white m-3 rounded-xl shadow-xl  ">
            <img src={Mouse} alt="Mouse" className="p-2 w-[70%] mx-auto"></img>
            <h1 className="font-Vazir text-xl text-center ">موس</h1>
            <button className=" p-2 m-2 mt-4 rounded-xl w-[94%] font-Vazir bg-strawberry text-white  hover:bg-darkRed  ">
              همه ی محصولات
            </button>
          </div>
          <div className=" bg-white m-3 rounded-xl shadow-xl">
            <img
              src={Keyboard}
              alt="Keyboard"
              className="p-2 w-[70%] mx-auto"
            ></img>
            <h1 className="font-Vazir text-xl text-center "> کیبورد</h1>
            <button className=" p-2 m-2 mt-4 rounded-xl w-[94%] font-Vazir bg-strawberry text-white  hover:bg-darkRed ">
              همه ی محصولات
            </button>
          </div>
          <div className=" bg-white m-3 rounded-xl shadow-xl">
            <img
              src={Headphone}
              alt="Headphone"
              className="p-2 w-[70%] mx-auto"
            ></img>
            <h1 className="font-Vazir text-xl text-center ">هدفون </h1>
            <button className=" p-2 m-2 mt-4 rounded-xl w-[94%] font-Vazir bg-strawberry text-white  hover:bg-darkRed ">
              همه ی محصولات
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Store;
