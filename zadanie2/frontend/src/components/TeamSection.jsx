import React, { useState, useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {
  FaReact,
  FaServer,
  FaNodeJs,
  FaDatabase,
  FaPaintBrush,
  FaPlayCircle,
  FaNetworkWired,
  FaGlobe,
  FaPython,
  FaBrain,
  FaEdit,
  FaCogs,
} from "react-icons/fa";
import { SiTailwindcss, SiPhp } from "react-icons/si";
import BannerImage from "../assets/images/banner.jpg";

// Import images
import SimonPhoto from "../assets/images/Simon.jpg";
import Fintech1 from "../assets/images/Fintech1.png";
import Fintech2 from "../assets/images/Fintech2.png";
import Fintech3 from "../assets/images/Fintech3.png";
import Dashboard1 from "../assets/images/Dashboard1.png";
import Dashboard2 from "../assets/images/Dashboard2.png";
import Dashboard3 from "../assets/images/Dashboard3.png";
import HdPhoto from "../assets/images/hd.jpg";
import T1 from "../assets/images/t1.jpg";
import T2 from "../assets/images/t2.jpg";
import T3 from "../assets/images/t3.jpg";
import F1 from "../assets/images/f1.jpg";
import F2 from "../assets/images/f2.jpg";
import P1 from "../assets/images/p1.jpg";
import P2 from "../assets/images/p2.jpg";
import P3 from "../assets/images/p3.jpg";

import RichardPhoto from "../assets/images/riso.jpg";
import Aqr1 from "../assets/images/aqr.png";
import Aqr2 from "../assets/images/aqr2.png";
import Falconi1 from "../assets/images/falconi.png";
import Falconi2 from "../assets/images/falconi2.png";
import FbPhoto from "../assets/images/fb.png";
import IMG1033 from "../assets/images/IMG_1033.jpeg";
import IMG5971 from "../assets/images/IMG_5971.jpeg";
import IMG1379 from "../assets/images/IMG_1379.jpeg";
import IMG1378 from "../assets/images/IMG_1378.jpeg";

import ValeriiPhoto from "../assets/images/Valerii.jpg";
import Vproj from "../assets/images/vproj.jpg";
import Travel1 from "../assets/images/travel1.jpg";
import Travel2 from "../assets/images/travel2.jpg";
import Cooking from "../assets/images/cooking.jpg";
import Hiking1 from "../assets/images/hiking1.jpg";
import Hiking5 from "../assets/images/hiking5.jpg";
import Hiking6 from "../assets/images/hiking6.jpg";

import JanciPhoto from "../assets/images/Janci.jpeg";
import MyProject1 from "../assets/images/MyProject1.png";
import MyWork from "../assets/images/mywork.jpg";
import Kava1 from "../assets/images/kava.jpeg";
import Kava2 from "../assets/images/kava2.jpg";
import Kava3 from "../assets/images/kava3.jpg";
import Kava4 from "../assets/images/kava4.jpeg";
import Auto1 from "../assets/images/auto.jpg";
import Auto2 from "../assets/images/auto2.jpeg";
import Psik from "../assets/images/psik.jpg";

function TeamMembers() {
  const teamMembers = {
    member1: {
      name: "Simon",
      role: "Junior Full-Stack Developer",
      photo: SimonPhoto,
      details:
        "Ahojte, Volám sa Simon. Mám 22 rokov a pochádzam z mesta Vranov nad Topľou. Aktuálne som v treťom ročníku na FEI TUKE, študíjny program počítačové siete. Pracujem v spoločnosti Syntax Systems na v IPS EU tíme.",
      skillsDescription:
        "Vo svojom voľnom čase sa venujem Full-Stack technológiam, prevažne REACT, Express, Node.js a MongoDB. Na styling používam knižnicu Tailwind.css a Framer-motion na animácie.",
      skills: [
        { icon: <FaReact />, name: "React" },
        { icon: <FaServer />, name: "Express" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaDatabase />, name: "MongoDB" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaPlayCircle />, name: "Framer Motion" },
      ],
      projects: [
        {
          title: "Webová FinTech aplikácia",
          category: "Full-Stack webová aplikácia poháňaná pomocou A.I",
          images: [Fintech1, Fintech2, Fintech3],
        },
        {
          title: "Firemný DashBoard",
          category: "Full-Stack pokročilý DashBoard",
          images: [Dashboard1, Dashboard2, Dashboard3],
        },
      ],
      work: {
        title: "IPS EU Admin",
        company: "Syntax Systems s.r.o.",
        photo: HdPhoto,
        details:
          "Pracujem ako Linux Administrátor pre Spoločnosť Syntax Systems v IPS EU tíme, kde sa špecializujem na správu a údržbu serverov. Syntax Systems je globálna technologická spoločnosť so sídlom v Kanade, ktorá poskytuje komplexné IT riešenia zamerané na cloudové služby, správu ERP systémov a infraštruktúrne služby pre podniky po celom svete.",
      },
      hobbies: [
        {
          title: "Cestovanie",
          description:
            "Veľmi rád objavujem rôzne kúsky sveta, či už s priateľmi alebo rodinou.",
          images: [T1, T2, T3],
        },
        {
          title: "Fitness",
          description:
            "Vo voľnom čase trávim dosť veľké množstvo času vo fitku alebo pri nejakom športe.",
          images: [F1, F2],
        },
        {
          title: "Športová kynológia",
          description:
            "Som veľkým priaznivcom poslušnosti psov, militárnych výcvikov a trénovania obrany.",
          images: [P1, P2, P3],
        },
      ],
    },
    member2: {
      name: "Richard",
      role: "Full-stack developer",
      photo: RichardPhoto,
      details:
        "Ahoj, moje meno je Richard. Pochádzam z Prešova a mám 22 rokov. Som študentom Technickej univerzity v Košiciach a okrem toho pracujem v spoločnosti POCAR s.r.o. ako správca sieťovej a serverovej infraštruktúry.",
      skillsDescription:
        "Vo svojom voľnom čase sa venujem full-stack tvorbe webov, návrhu a tvorbe databáz a ďalším back-endovým a sieťovým technológiam.",
      skills: [
        { icon: <FaDatabase />, name: "Databázy" },
        { icon: <FaServer />, name: "Serverové technológie" },
        { icon: <FaNetworkWired />, name: "Sieťové technológie" },
        { icon: <SiPhp />, name: "PHP" },
        { icon: <FaGlobe />, name: "Web development" },
      ],
      projects: [
        {
          title: "Aquaruthenia Svidník",
          category: "Full-stack vývoj",
          images: [Aqr1, Aqr2],
        },
        {
          title: "FALCONI s.r.o",
          category: "Full-stack vývoj",
          images: [Falconi1, Falconi2],
        },
      ],
      work: {
        title: "Správca infraštruktúry",
        company: "POCAR s.r.o.",
        photo: FbPhoto,
        details:
          "Pracujem v spoločnosti POCAR s.r.o. a mojou úlohou je zabezpečiť bezproblémový chod sieťovej a serverovej infraštruktúry spoločnosti.",
      },
      hobbies: [
        {
          title: "Cestovanie",
          description: "Veľmi rád objavujem krásy našej Zeme.",
          images: [IMG1033, IMG5971],
        },
        {
          title: "Vzdelávanie sa",
          description: "Rád sa vzdelávam v rôznych IT oblastiach.",
          images: [BannerImage],
        },
        {
          title: "Posilovanie",
          description: "Veľmi rád chodím do posilovne.",
          images: [IMG1379, IMG1378],
        },
      ],
    },
    member3: {
      name: "Valerii",
      role: "Junior Back-End Developer",
      photo: ValeriiPhoto,
      details:
        "Ahojte, volám sa Valerii, mám 19 rokov a pochádzam z malého mesta Varva na Ukrajine. Svoj voľný čas rád trávim v prírode, najmä v horských alebo lesnatých oblastiach. Momentálne študujem tretí rok na FEI TUKE, študijný program počítačové siete. Zatiaľ nikde nepracujem.",
      skillsDescription:
        "Počas štúdia na univerzite TUKE som získal cenné zručnosti a skúsenosti a osvojil som si viaceré programovacie jazyky. Posledný rok som venoval čas výskumu NLP.",
      skills: [
        { icon: <FaDatabase />, name: "Databázy" },
        { icon: <FaPython />, name: "Python" },
        { icon: <FaBrain />, name: "NLP" },
        { icon: <FaNetworkWired />, name: "Sieťové technológie" },
      ],
      projects: [
        {
          title: "Chatbot o Liekoch",
          category: "Full-stack vývoj. Stránka pre môj vlastný projekt.",
          images: [Vproj],
        },
      ],
      work: {
        title: "",
        company: "Valerii ešte nemal pracovné skúsenosti vo firme.",
        photo: BannerImage,
        details: "",
      },
      hobbies: [
        {
          title: "Cestovanie",
          description: "Milujem spoznávať nové miesta a kultúry.",
          images: [Travel1, Travel2],
        },
        {
          title: "Varenie",
          description: "Rád varím nové jedlá pre priateľov alebo rodičov.",
          images: [Cooking],
        },
        {
          title: "Pešia turistika",
          description: "Často chodím s kamarátmi po horských trasách.",
          images: [Hiking1, Hiking5, Hiking6],
        },
      ],
    },
    member4: {
      name: "Janči",
      role: "Projektový Manažér",
      photo: JanciPhoto,
      details:
        "Ahojte, volám sa Janči, mám 22 rokov a pochádzam z malebnej dedinky Lendak pod Tatrami. Študujem na Technickej univerzite v Košiciach a popri štúdiu pracujem v kúpeľoch v údržbe alebo si privyrábam tvorbou videí.",
      skillsDescription:
        "Janči má skúsenosti v UI/UX dizajne, kde využíva moderné nástroje na vytvorenie intuitívnych aplikácií.",
      skills: [
        { icon: <FaEdit />, name: "Úprava Videa, Fotografií a atď." },
        { icon: <FaCogs />, name: "Amatérske programovanie v jazyku C." },
      ],
      projects: [
        {
          title: "Social Media",
          category: "Správa a Management môjho vlastného projektu.",
          images: [MyProject1],
        },
      ],
      work: {
        title: "Údržba a správa siete",
        company: "Kúpele Horný Smokovec s.r.o",
        photo: MyWork,
        details:
          "Pracujem na údržbe a popritom spravujem menšiu sieť vo firme Kúpele Horný Smokovec. Zatiaľ moja najdlhšia pracovná skúsenosť.",
      },
      hobbies: [
        {
          title: "Kavičkovanie",
          description:
            "Milujem objavovať nové miesta a zákutia rôznych kaviarní.",
          images: [Kava1, Kava2, Kava3, Kava4],
        },
        {
          title: "Šoferovanie",
          description: "Rýchlo ale hlavne bezpečne!",
          images: [Auto1, Auto2],
        },
        {
          title: "Venčenie Psíka",
          description:
            "Venčenie patrí k mojim najobľúbenejším aktivitám. Bez toho by som nevytiahol ani nohy z domu.",
          images: [Psik],
        },
      ],
    },
  };

  const [currentMemberKey, setCurrentMemberKey] = useState("member1");
  const [currentMember, setCurrentMember] = useState(teamMembers["member1"]);

  useEffect(() => {
    setCurrentMember(teamMembers[currentMemberKey]);
  }, [currentMemberKey]);

  const showInfo = (memberKey) => {
    setCurrentMemberKey(memberKey);
  };

  // Global Carousel settings
  const globalSliderSettings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true, // Always show arrows
  };

  return (
    <div className="bg-black text-white font-sans">
      {/* Main Section (Intro Section) */}
      <section className="intro-section flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto h-screen p-8">
        <div className="intro-text flex-1 lg:pr-12 animate-fadeInLeft">
          <p className="text-secondary text-xl uppercase mb-4">Naše Záľuby</p>
          <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
            Ahoj! <span className="italic text-secondary">Sme</span> tím
            študentov predmetu
          </h1>
          <h2 className="text-3xl lg:text-5xl font-light italic text-secondary mt-2">
            Webové technológie
          </h2>
          <p className="text-gray-400 mt-6 text-lg max-w-prose leading-relaxed">
            Na tejto stránke sa môžete dozvedieť viac o našich záľubách,
            skúsenostiach, ako aj o projektoch, na ktorých pracujeme. Každý z
            nás má svoje jedinečné zručnosti.
          </p>
        </div>
        <div className="intro-image flex-1 max-w-xl mt-8 lg:mt-0 animate-fadeInRight">
          <img
            src={BannerImage}
            alt="Náš tím"
            className="w-full h-auto rounded-3xl object-contain shadow-2xl transform transition-transform duration-300 hover:scale-105"
          />
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-900 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Členovia tímu</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(teamMembers).map((memberKey) => (
            <button
              key={memberKey}
              onClick={() => showInfo(memberKey)}
              className={`px-6 py-3 text-lg rounded-md transition-colors duration-300 ${
                currentMemberKey === memberKey
                  ? "bg-teal-500"
                  : "bg-teal-700 hover:bg-teal-600"
              }`}
            >
              {teamMembers[memberKey].name}
            </button>
          ))}
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-800 p-8 mt-12 rounded-2xl max-w-7xl mx-auto shadow-2xl">
          <div className="w-full lg:w-1/2">
            <img
              src={currentMember.photo}
              alt={currentMember.name}
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-teal-400">
              {currentMember.name}
            </h2>
            <h3 className="text-xl text-gray-400 mt-2">{currentMember.role}</h3>
            <p className="text-gray-300 mt-4 leading-relaxed">
              {currentMember.details}
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 text-center bg-[#000]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Zručnosti & Skúsenosti</h2>
          <p className="text-gray-300 mb-8">
            {currentMember.skillsDescription}
          </p>
          <h3 className="text-3xl font-semibold mb-8 border-b-2 border-gray-600 inline-block">
            Zručnosti
          </h3>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {currentMember.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 w-40 md:w-48 text-center shadow-xl transform transition-transform duration-300 hover:scale-110 flex flex-col items-center"
              >
                <div className="text-4xl text-indigo-400 mb-4">
                  {skill.icon}
                </div>
                <p className="text-white text-lg">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="bg-gray-900 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Moje Najnovšie Projekty</h2>
        <p className="text-gray-300 mb-12">
          Na tejto stránke môžete nájsť niektoré z mojich najnovších projektov,
          kde som sa zameral na dizajn a používateľskú skúsenosť.
        </p>
        <div className="flex flex-wrap justify-center gap-8">
          {currentMember.projects.map((project, index) => {
            const projectSliderSettings = {
              ...globalSliderSettings,
              infinite: project.images.length > 1,
              arrows: project.images.length > 1,
            };
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 shadow-2xl w-full md:w-96"
              >
                <div className="relative mb-4">
                  <Slider {...projectSliderSettings}>
                    {project.images.map((image, idx) => (
                      <div key={idx}>
                        <img
                          src={image}
                          alt={project.title}
                          className="w-full h-56 object-cover rounded-xl"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300">{project.category}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Work Section */}
      <section className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Pracovné Skúsenosti</h2>
        <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-800 p-8 mt-12 rounded-2xl max-w-7xl mx-auto shadow-2xl">
          <div className="w-full lg:w-1/2 text-left">
            <h2 className="text-3xl font-bold text-teal-400">
              {currentMember.work.title || "Pracovné Skúsenosti"}
            </h2>
            <h3 className="text-xl text-gray-400 mt-2">
              Firma: {currentMember.work.company}
            </h3>
            <p className="text-gray-300 mt-4 leading-relaxed">
              {currentMember.work.details}
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <img
              src={currentMember.work.photo}
              alt="Pracovné miesto"
              className="w-full h-full object-cover rounded-xl"
            />
          </div>
        </div>
      </section>

      {/* Hobbies Section */}
      <section className="bg-gray-900 py-16 text-center">
        <h2 className="text-4xl font-bold mb-8">Voľnočasové Záľuby</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {currentMember.hobbies.map((hobby, index) => {
            const hobbySliderSettings = {
              ...globalSliderSettings,
              infinite: hobby.images.length > 1,
              arrows: hobby.images.length > 1,
            };
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-2xl p-6 shadow-2xl w-full md:w-96"
              >
                <div className="relative mb-4">
                  <Slider {...hobbySliderSettings}>
                    {hobby.images.map((image, idx) => (
                      <div key={idx}>
                        <img
                          src={image}
                          alt={hobby.title}
                          className="w-full h-56 object-cover rounded-xl"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  {hobby.title}
                </h3>
                <p className="text-gray-300">{hobby.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default TeamMembers;
