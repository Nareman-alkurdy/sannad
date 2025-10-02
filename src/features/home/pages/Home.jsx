// import PromoBanner from "../components/PromoBanner";
import SidebarCategories from "../components/SidebarCategories";
import HeroBanner from "../components/HeroBanner";

const Home = () => {
  return (
    <>
      {/* <PromoBanner /> */}
      {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-6"> */}
         <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-20">
          


        <SidebarCategories />
        <div className="lg:col-span-3">
          <HeroBanner />
          {/* لاحقاً: featured products */}
        </div>
      </div>
      
    </>
  );
};

export default Home;
