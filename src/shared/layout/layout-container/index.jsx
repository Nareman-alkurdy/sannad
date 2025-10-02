import Navbar from "../navbar";
import Footer from "../footer";

export default function LayoutContainer({ children }) {
  // ارتفاع النافبار الثابت (شريط الإعلان + النافبار)
  // شريط الإعلان ~48px + النافبار ~64px = 112px تقريباً
  return (
    <>
      <Navbar />
      <div className="flex-1 flex flex-col min-h-screen bg-white">
        <main className="flex-grow pt-[112px]">
          {children}
        </main>
        <Footer />
      </div>
    </>
  );
}