import bannerDesktop from "../assets/banner.jpeg";
import bannerMobile from "../assets/banner2.webp";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <div className="h-screen bg-cover bg-center bg-no-repeat bg-fixed opacity-90 relative">
        {/* desktop */}
        <div className="hidden lg:block absolute inset-0">
          <img
            src={bannerDesktop}
            alt="Background Desktop"
            className="w-full h-full object-cover"
          />
        </div>

        {/* mobile */}
        <div className="md:hidden absolute inset-0 z-0">
          <img
            src={bannerMobile}
            alt="Background Mobile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* tablet */}
        <div className="hidden md:block lg:hidden absolute inset-0 z-0">
          <img
            src={bannerMobile} /* قبلاً دوباره bannerMobile گذاشته بودی */
            alt="Background Tablet"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Navbar را بالاتر از تصاویر قرار می‌دهیم */}
        <Navbar />
      </div>
    </>
  );
};
export default Home;
