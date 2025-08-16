import { useState } from "react";

function CaseStudies() {

const cardsData = [
  { img: "/src/assets/c1.webp", colors: ["#fcc40c", "#31a0c8"], title: "Apex Legends Season 24" },
  { img: "/src/assets/c2.webp", colors: ["#31a0c8"], title: "Civilization VII" },
  { img: "/src/assets/c3.webp", colors: ["#fcc40c", "#31a0c8"], title: "Kingdom Come: Deliverance II" },
  { img: "/src/assets/c4.webp", colors: ["#ff72a2"], title: "Ubisoft UK on Social" },
  { img: "/src/assets/c5.webp", colors: ["#31a0c8"], title: "Lords of the Fallen" },
  { img: "/src/assets/c6.webp", colors: ["#31a0c8"], title: "Phasmophobia Console Launch" },
  { img: "/src/assets/c7.webp", colors: ["#31a0c8"], title: "F1® Manager 2023/24" },
  { img: "/src/assets/c8.webp", colors: ["#31a0c8"], title: "Park Beyond" },
  { img: "/src/assets/c9.webp", colors: ["#fcc40c", "#31a0c8"], title: "ASUS Back to School" },
];

const [selectedColor, setSelectedColor] = useState(null);

let filteredCards;

if (selectedColor === null) {
  filteredCards = cardsData;
} else {
  filteredCards = cardsData.filter((card) =>
    card.colors.includes(selectedColor)
  );
}


  return (
<>
  <div className="flex items-center justify-center px-4 py-8 sm:py-10 md:py-12 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-semibold text-[#343030] text-center  bg-[#f6f3eb]">
    Case Studies
  </div>

  <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-6 px-4  bg-[#f6f3eb]">
    <button onClick={() => setSelectedColor("#fcc40c")} className="btn-case py-2 px-4 sm:py-3 sm:px-5 md:px-6 border flex justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base">
      <div className="w-4 h-4 sm:w-5 sm:h-5 border rounded-full" style={{ backgroundColor: "#fcc40c" }}></div>
      CREATIVE
    </button>

    <button onClick={() => setSelectedColor("#31a0c8")} className="btn-case py-2 px-4 sm:py-3 sm:px-5 md:px-6 border flex justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base">
      <div className="w-4 h-4 sm:w-5 sm:h-5 border rounded-full" style={{ backgroundColor: "#31a0c8" }}></div>
      CREATOR
    </button>

    <button onClick={() => setSelectedColor("#ff72a2")} className="btn-case py-2 px-4 sm:py-3 sm:px-5 md:px-6 border flex justify-center items-center gap-2 sm:gap-3 text-sm sm:text-base">
      <div className="w-4 h-4 sm:w-5 sm:h-5 border rounded-full" style={{ backgroundColor: "#ff72a2" }}></div>
      SOCIALS
    </button>
  </div>


  <div className="flex flex-wrap justify-center py-8 sm:py-10 md:py-12 px-4 gap-8 md:gap-12  bg-[#f6f3eb]">
    {filteredCards.map((card, index) => (
      <div key={index} className="w-full sm:w-[48%] md:w-[45%] lg:w-[31%] xl:w-[28%] flex flex-col">
        <div className="w-full aspect-square border overflow-hidden">
          <img src={card.img} alt="" className="w-full h-full object-cover"/>
        </div>

        <div className="flex justify-between items-center py-4">
          <div className="flex gap-1">
            {card.colors.map((color, i) => (
              <div key={i} className="w-4 h-4 sm:w-5 sm:h-5 border rounded-full" style={{ backgroundColor: color }}></div>
            ))}
          </div>
          <div className="text-base sm:text-lg md:text-xl">{card.title}</div>
        </div>
      </div>
    ))}
  </div>
</>

  )
}

export default CaseStudies
