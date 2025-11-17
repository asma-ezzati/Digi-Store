import logo from "../assets/logo.webp";
import { FaTelegram, FaLinkedin, FaFacebook, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
const ContactUs = () => {
  return (
    <>
      <div className="bg-whiteSmoke  ">
        <h1 className="font-Vazir text-2xl text-red1 text-center ">
          تماس با ما{" "}
        </h1>
        <div className="grid lg:grid-cols-3 m-4 mt-10 pb-10 ">
          <div>
            <img src={logo} alt="DigiStore" className="w-[50%] mx-auto"></img>
            <h5 className="font-Vazir text-xl text-darkRed text-center ">
              خرید سریع، مطمئن و آسان گجت‌های دیجیتال
            </h5>
          </div>
          <div className="space-y-5">
            <h1 className="font-Vazir text-xl m-5 mt-6 text-carbon text-center ">
              اطلاعات تماس
            </h1>
            <hr className="text-red1 w-1/2 mx-auto"></hr>
            <h6 className="font-Vazir text-xl text-carbon">آدرس :</h6>
            <h6 className="font-Vazir text-xl text-carbon">ایمیل :</h6>
            <h6 className="font-Vazir text-xl text-carbon">شماره تماس :</h6>
          </div>
          <div>
            <h1 className="font-Vazir text-xl m-5 mt-6 text-carbon text-center ">
              شبکه های اجتماعی
            </h1>
            <hr className="text-red1 w-1/2 mx-auto"></hr>
            <div className="flex mt-10 ">
              <div className="bg-grey text-white p-2 rounded-full   mx-3 hover:bg-strawberry ">
                <FaTelegram size={30} />
              </div>
              <div className="bg-grey text-white p-2 rounded-full   mx-3 hover:bg-strawberry ">
                <AiFillInstagram size={30} />
              </div>
              <div className="bg-grey text-white p-2 rounded-full   mx-3 hover:bg-strawberry ">
                <FaLinkedin size={30} />
              </div>
              <div className="bg-grey text-white p-2 rounded-full   mx-3 hover:bg-strawberry ">
                <FaFacebook size={30} />
              </div>
              <div className="bg-grey text-white p-2 rounded-full   mx-3 hover:bg-strawberry ">
                <FaTwitter size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ContactUs;
