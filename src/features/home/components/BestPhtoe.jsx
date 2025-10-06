import React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";

// BlackCardComponent.jsx
export default function BestPhtoe({
  imageSrc,
  title,
  circles = [
    { number: "1", label: "واحد" },
    { number: "2", label: "اثنان" },
    { number: "3", label: "ثلاثة" },
    { number: "4", label: "أربعة" },
  ],
  buttonText = "buy now",
  onButtonClick = () => {},
}) {
  return (
    <div className="max-w-7xl mx-auto p-9  w-[1500px]">
      <div
        className="bg-black text-white shadow-2xl p-12 flex flex-col md:flex-row-reverse items-center gap-12"
        dir="ltr"
      >
        {/* Right: image */}
        <div className="w-[470px] h-[260px] flex-shrink-0 overflow-hidden flex items-center justify-center relative">
          <img
            src={imageSrc || "src/assets/imges/JBL_BOOMBOX_2_HERO_020_x1 (1) 1.png"}
            alt="card"
            className="object-cover w-full h-full z-10"
          />
        </div>

        {/* Left: text + circles + button */}

        <div
          className="flex-1 w-full flex flex-col justify-between m-0 "
          style={{ position: "relative", minHeight: 260 }}
        >
          {/* كلمة صغيرة فوق العنوان */}
          <span className="text-xs text-green-400 mb-1 block text-left">
            Categories
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-left mb-7">
            {title}
          </h2>

          {/* الدوائر وزر الشراء في الأسفل */}
          <div className="relative m-0 left-1 bottom-0 mb-4 ml-4 flex flex-col items-start gap-2">
            <div className="mb-4 text-left">
              <span className="block text-4xl font-extrabold leading-tight text-white">
                Enhance your
              </span>
              <span className="block text-4xl font-extrabold leading-tight text-white">
                Music Experience
              </span>
            </div>

            {/* الدوائر */}
            <div className="flex gap-6 mb-5">
              {[
                { num: 21, label: "Second" },
                { num: 22, label: "Day" },
                { num: 60, label: "Moment" },
                { num: 24, label: "Hour" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="w-16 h-16 min-w-[4rem] min-h-[4rem] max-w-[4rem] max-h-[4rem]
                  rounded-full bg-white flex flex-col items-center justify-center 
                  shadow-9xl border-2 border-green-600 hover:scale-105 transition-transform duration-200"
                  style={{ boxShadow: "0 4px 18px 0 rgba(0,0,0,0.18)" }}
                >
                  <span className="text-black font-extrabold text-sm leading-tight">
                    {item.num}
                  </span>
                  <span className="text-black text-xs mt-1 font-semibold">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* زر الشراء */}
            <Button
              variant="contained"
              onClick={onButtonClick}
              sx={{
                backgroundColor: "#16a34a",
                "&:hover": { backgroundColor: "#15803d" },
                px: 4,
                py: 2,
                textTransform: "none",
                boxShadow: "0 4px 24px 0 rgba(22,163,74,0.18)",
                width: "40%",
                minWidth: "100px",
                fontWeight: "bold",
                fontSize: 15,
                alignSelf: "stretch",
                letterSpacing: 1,
              }}
            >
              {buttonText}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

BestPhtoe.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string,
  circles: PropTypes.arrayOf(
    PropTypes.shape({ number: PropTypes.string, label: PropTypes.string })
  ),
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};
