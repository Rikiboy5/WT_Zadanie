import "slick-carousel/slick/slick.css";
import ResizeContent from "./ResizeContent";
import ResizableComponent from "./ResizableComponent";

import "slick-carousel/slick/slick-theme.css";
import React, { useEffect } from "react";
import ProgresPng from "../assets/images/progress.png";
const timelineData = [
  {
    title: "Vytvorenie návrhu",
    time: "21. Októbra",
    description: "Začiatok našej tímovej spolupráce a vytvorenie základného návrhu webu, výber farebnej palety a začiatok samotného procesu tvorby."
  },
  {
    title: "Vytvorenie podstránky O nás",
    time: "25. Október",
    description: "Táto podstránka obsahuje informácie o každom členovi tímu. Kto to je, odkiaľ je a podobne, no taktiež aj informácie ohľadom jeho zručností a technológií s ktorými pracoval v IT sektore. Ďalej obsahuje pracovné skúsenosti alebo najnovšie projekty. V poslednej časti su voľno časové aktivity. Táto podstránka bola vytvorená ako prvá a udáva dizajn, farby a námet pre ostatné podstránky."
  },
  {
    title: "Vytvorenie podstránky Zmeny",
    time: "1. Novembra",
    description: "Vytvorenie podstránky zmeny, do ktorej náš tím bude pridávať všetky vykonané zmeny na stránke. Všetky zmeny sú pridávané pomocou JavaScriptu."
  },
  {
    title: "Vytvorenie úvodnej stránky.",
    time: "2. Novembra",
    description: "Vytvorenie úvodnej stránky, ktorá obsahuje základné informácie o škole, galériu a krátke predstavenie našej skupiny"
  },
  {
    title: "Vytvorenie skriptu na zmenu veľkosti",
    time: "3. Novembra",
    description: "Bol pridaný skript na úpravu veľkosti a príslušné tlačidlo na podstránku zmeny."
  },
  {
    title: "Úprava elemntu a načítanie rôznych CSS štýlov",
    time: "3. Novembra",
    description: "Pridanie funkcionality a ukážka načítania rôznych CSS štýlov elementu podľa veľkosti zariadenia."
  },
  {
    title: "Pridanie header a footer na každú podstránku",
    time: "5. Novembra",
    description: "Pridanie header a footer na každú podstránku."
  }
];

function ZmenyRoad() {
  
  useEffect(() => {
    displayAllTimelineEvents();
  }, []);


  function displayAllTimelineEvents() {
    const timelineContainer = document.getElementById("timeline");
    timelineContainer.innerHTML = "";
  
    const timelineLine = document.createElement("div");
    timelineLine.className = "absolute bg-gray-300 h-full w-[3px] left-1/2 transform -translate-x-1/2 hidden md:block";
    timelineContainer.appendChild(timelineLine);
  
    let isLeft = true;
  
    timelineData.forEach((event) => {
      const positionClass = isLeft ? "md:mr-auto md:ml-10 text-left" : "md:ml-auto md:mr-10 text-left";
      const cardClass = isLeft
        ? "bg-gradient-to-r from-purple-700 to-blue-500"
        : "bg-gradient-to-r from-pink-500 to-red-500";

        const eventHTML = `
      <div class="relative flex justify-between items-center w-full mb-6"> 
        <div class="absolute w-6 h-6 bg-white rounded-full left-1/2 transform -translate-x-1/2 -top-0 z-10 hidden md:block"></div>

       
        <div class="w-full sm:w-11/12 md:w-5/12 ${positionClass}"> 
          <div class="p-4 rounded-lg shadow-lg ${cardClass}">
            <h4 class="transition-all duration-300 ease-in-out text-white font-bold">${event.title}</h4>
            <p class="transition-all duration-300 ease-in-out text-white text-sm mb-4">${event.time}</p>
            <p class="transition-all duration-300 ease-in-out text-white">${event.description}</p>
          </div>
        </div>
      </div>
    `;
  
      timelineContainer.innerHTML += eventHTML;
      isLeft = !isLeft; 
    });
  }

  return (
    <div className="bg-black text-white font-sans">
      <section className="intro-section flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto min-h-screen p-7">
        <div className="intro-text flex-1 lg:pr-12 text-center lg:text-left animate-fadeInLeft flex flex-col justify-center" id="text-block">
  <p className="transition-all duration-300 ease-in-out text-secondary text-xl uppercase mb-4 ">
    SEKCIA ZMENY
  </p>
  <h1 className="transition-all duration-300 ease-in-out text-5xl lg:text-7xl font-bold text-white leading-tight ">
    Na tejto <span className="text-secondary" style={{ color: '#71b9bf' }}>podstránke</span> je vyobrazený náš{" "}
    <span className="text-secondary" style={{ color: '#71b9bf' }}>progress</span> pri tvorbe zadania
  </h1>
</div>


<div className="intro-image flex-1 mt-8 lg:mt-3 animate-fadeInRight flex items-center">
  <img
    src={ProgresPng}
    alt="Náš tím"
    className="w-3/4 transition-all duration-500 ease-in-out rounded-3xl mt-2 mb-2 animate-fadeInRight hover:scale-105 hover:shadow-2xl"
    id="image"
  />
</div>

   
      </section>
   
     
      <div className="button-container flex justify-center mb-8">
        <ResizeContent />
      </div>


      {/* <div className="container my-4"> */}
      <p className="transition-all duration-300 ease-in-out text-center text-white" style={{ color: 'rgba(255, 255, 255, 0.905)', fontSize: '1.2rem' }}>
          Ak chcete zmeniť veľkosť, použite nasledujúce možnosti
        </p>
        <p className="transition-all duration-300 ease-in-out text-center text-gray-400 mb-4" style={{ color: 'rgb(97, 97, 97)', fontSize: '1.2rem' }}>
        Na tejto stránke môžete zmeniť veľkosť pomocou klávesy „R“, dvojitého kliknutia ľavým tlačidlom myši alebo tlačidla.
        </p>
  

      <div className="bg-gray-900 text-white py-8">
        <div className="relative" id="timeline"></div>
      </div>


      

      <section className="text-center my-8">
        <h2 className="transition-all duration-300 ease-in-out main-text text-white text-center text-2xl sm:text-3xl md:text-4xl font-semibold mb-6">
          Ukážka <span className="transition-all duration-300 ease-in-out text-secondary font-medium" style={{ color: '#71b9bf' }}> načítania </span>
          rôznych štylov <span className="transition-all duration-300 ease-in-out text-secondary font-medium" style={{ color: '#71b9bf' }}>CSS</span>
        </h2>

        <div className="bg-gray-800 p-8 max-w-full overflow-hidden">
        <div className="flex flex-col items-center">
          <div className="mb-3"></div>
            <p className="transition-all duration-300 ease-in-out mb-4 text-gray-400">
              Pre ukážku treba natiahnúť element alebo použiť tlačidla vyššie alebo šípky na klávesnici
            </p>
            <ResizableComponent />
          </div>
        </div>
      </section>
      <footer className="bg-gray-900 text-white py-8">
      <div className="flex flex-col md:flex-row justify-center items-start md:justify-between w-full">
  {/* Лівий блок */}
  <div className="flex-1 flex flex-col items-center text-center mb-4 md:mb-0">
    <p className="transition-all duration-300 ease-in-out text-gray-400">&copy; 2024 Webové Technológie</p>
    <p>
      <span className="transition-all duration-300 ease-in-out text-secondary font-bold" style={{ color: '#71b9bf' }}>Vytvoril: </span>
      <a className="transition-all duration-300 ease-in-out hover:text-secondary" href="mailto:jan.dudasko@student.tuke.sk">
        Ján Dudaško, Richard Gaál, Simon Kentoš, Valerii Kutsenко
      </a>
    </p>
  
  </div>

  {/* Правий блок */}
  <div className="flex-1 flex flex-col items-center text-center">
    <p className="transition-all duration-300 ease-in-out text-secondary font-bold mb-2" style={{ color: '#71b9bf' }}>Napíšte nám</p>
    <div className="flex flex-col space-y-1">
      <a className="transition-all duration-300 ease-in-out hover:text-secondary" href="mailto:jan.dudasko@student.tuke.sk">
        jan.dudasko@student.tuke.sk
      </a>
      <a className="transition-all duration-300 ease-in-out hover:text-secondary" href="mailto:richard.gaal@student.tuke.sk">
        richard.gaal@student.tuke.sk
      </a>
      <a className="transition-all duration-300 ease-in-out hover:text-secondary" href="mailto:simon.kentos@student.tuke.sk">
        simon.kentos@student.tuke.sk
      </a>
      <a className="transition-all duration-300 ease-in-out hover:text-secondary" href="mailto:valerii.kutsenko@student.tuke.sk">
        valerii.kutsenko@student.tuke.sk
      </a>
    </div>
  </div>
</div>

  
</footer>

    </div>
  );
}

export default ZmenyRoad;
