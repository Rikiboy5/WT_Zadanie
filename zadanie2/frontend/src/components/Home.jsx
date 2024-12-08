import React, { useState, useEffect } from "react";
import './Home.css'

// banner inport
import banner1 from "../assets/images/bannermain.jpg"
import banner2 from "../assets/images/bannermain2.jpg"
import banner3 from "../assets/images/bannermain3.jpg"

// import galerie
import galery1 from "../assets/images/1.jpg"
import galery2 from "../assets/images/2.jpg"
import galery3 from "../assets/images/3.jpg"
import galery4 from "../assets/images/4.jpg"
import galery5 from "../assets/images/5.jpg"
import galery6 from "../assets/images/6.jpg"
import galery7 from "../assets/images/7.jpg"
import galery8 from "../assets/images/8.jpg"
import galery9 from "../assets/images/9.jpg"

function Home() { 
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerImgs = [
    banner1,
    banner2,
    banner3
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerImgs.length);
    }, 5000); 

    return () => clearInterval(intervalId); 
  }, [bannerImgs.length]);

  // Pole obrázkov pre galériu
  const images = [
    galery1,
    galery2,
    galery3,
    galery4,
    galery5,
    galery6,
    galery7,
    galery8,
    galery9,
  ];

  return (
    <>
      <main>
        <section className="banner">
          <div className="text">
            <h2 className="tittle">Vitajte na našej stránke</h2>
            <p className="subtiitle">
              Tu sa dozviete niečo málo o nás, našej spoločnej práci na projekte.
            </p>
          </div>

         
          <div className="Bannerimages" alt="Banner">
            {bannerImgs.map((src, index) => (
              <img
                key={index}
                className={`Bannertrans ${currentIndex === index ? "active" : "fade-out"}`}
                src={src}
                alt={`Banner ${index + 1}`}
              />
            ))}
          </div>
        </section>

        <section className="about">
          <div className="info">
            <div className="textA">
              <h3>Kto sme?</h3>
            </div>
            <div className="textP">
              <p>
                Sme dynamická a kreatívna skupina študentov, zameraná na moderné technológie a digitálny svet.
                Naším cieľom je rozvíjať zručnosti v oblasti tvorby webových stránok, dizajnu a používateľského zážitku.
              </p>
            </div>
            <div className="hobbies-link">
              <p>
                Ak sa chcete dozvedieť viac o našom týme, navštívte našu sekciu{" "}
                <a href="zaluby">o nás</a>.
              </p>
              <p>
                Ak by si chcel vedieť celý progress, tak navštiv{" "}
                <a href="zmeny">zmeny</a>.
              </p>
            </div>
          </div>
        </section>

        <section className="school-info">
          <div className="containerS">
            <h3>O našej škole</h3>
            <p>
              Technická Univerzita v Košiciach, ponúka kvalitné vzdelanie so zameraním na IT a digitálne
              technológie. Podporuje nás v rozvoji praktických zručností a kreatívnom myslení, čo nám
              umožňuje realizovať projekty, ako je tento.
            </p>
            <p>
              Škola nám poskytuje množstvo príležitostí, aby sme mohli spolupracovať na projektoch,
              vytvárať webové riešenia a pripravovať sa na reálne situácie v oblasti IT. Veríme, že táto
              skúsenosť nám pomôže vybudovať pevné základy pre budúcu kariéru.
            </p>
          </div>
        </section>

        <section className="gallery">
          <div className="container">
            <div className="row">
              {images.map((image, i) => (
                <div className="col-4" key={i}> {/* Zobraziť 3 obrázky na riadok */}
                  <img
                    src={image}
                    className="img-fluid gallery-img"  // Pridanie vlastnej triedy pre styling
                    alt={`Obrázok ${i + 1}`}
                  />
                </div>
              ))}
            </div>
            <p>Zdroj Instagram: @fei.tuke</p>
          </div>
        </section>

        <section className="contact">
          <div className="containerC">
            <h3>Kontakt</h3>
            <p>Máte otázky? Neváhajte nás kontaktovať!</p>
            <a href="mailto:info@nasastranka.sk" className="btn btn-primary">
              Napíšte nám
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
