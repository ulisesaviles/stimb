// React imports
import { useState, useEffect } from "react";

// NextJs imports
import { useRouter } from "next/router";
import Image from "next/image";

// Styles
import styles from "../styles/pages/Galeria.module.css";

// Local functions
import { getLang, defaultLang } from "../config/lang";

// Components
import Stimb from "../components/stimbLogo";
import Layout from "../components/layout";
import CardsDisplayer from "../components/cardsDisplayer";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import ImgCard from "../components/imgCard";

// Actual galery
import galeryImgs from "../config/galeryImgs";

// Main component to export
export default function Galery() {
  // Lang (defaultLang by default)
  const [lang, setLang] = useState(defaultLang);

  // Router
  const router = useRouter();

  // Constants
  const [displayedImgIndex, setDisplayedImgIndex] = useState(null);
  const [displayedGaleryIndex, setDisplayedGaleryIndex] = useState(null);

  // Functions
  const closeDisplayedImg = () => {
    setDisplayedImgIndex(null);
    setDisplayedGaleryIndex(null);
  };

  const formatDate = (date = new Date()) => {
    if (lang === "es")
      return `${date.getDate()} de ${strings.months[
        date.getMonth()
      ].es.toLowerCase()} del ${date.getFullYear()}`;
    return `${
      strings.months[date.getMonth()][lang]
    } ${date.getDate()} from ${date.getFullYear()}`;
  };

  const handleArrowClick = (sum) => {
    if (sum) {
      setDisplayedImgIndex(
        displayedImgIndex < galeryImgs[displayedGaleryIndex].imgs.length - 1
          ? displayedImgIndex + 1
          : displayedImgIndex
      );
      return;
    }

    setDisplayedImgIndex(
      displayedImgIndex > 0 ? displayedImgIndex - 1 : displayedImgIndex
    );
  };

  const hanldeGaleryImgPress = (imgIndex, galeryIndex) => {
    setDisplayedGaleryIndex(galeryIndex);
    setDisplayedImgIndex(imgIndex);
  };

  // Strings to render
  const strings = {
    title: {
      es: "STIMB | Galería",
      en: "STIMB | Galery",
    },
    description: {
      es: "STIMB es una empresa Tijuanense con la misión de mejorar la eficiencia de plantas y máquinas bloqueras a través de reparaciones, optimización de recursos y otras estrategias aprendidas a través de más de 30 años de experiencia.",
      en: "STIMB is a company from Tijuana with the mission of improving the efficiency of block making plants and machines through repairs, resource optimization and other strategies learned through more than 30 years of experience.",
    },
    tabName: "galery",
    pageTitle: {
      es: "Galería",
      en: "Galery",
    },
    text: {
      es: [
        <Stimb key={0} />,
        " comparte algunos de sus casos de éxito. No todos nuestros clientes se sienten cómodos con que compartamos fotografías de sus máquinas, pero a continuación presentamos algunas de las que recibimos autorización de publicación.",
      ],
      en: [
        <Stimb key={0} />,
        " shares some of its success stories. Not all of our clients are comfortable with sharing photos of their machines, but here are some of the ones we receive publication authorization.",
      ],
    },
    back: {
      es: "Regresar",
      en: "Back",
    },
    months: [
      {
        es: "Enero",
        en: "January",
      },
      {
        es: "Febrero",
        en: "February",
      },
      {
        es: "Marzo",
        en: "March",
      },
      {
        es: "Abril",
        en: "April",
      },
      {
        es: "Mayo",
        en: "May",
      },
      {
        es: "Junio",
        en: "June",
      },
      {
        es: "Julio",
        en: "July",
      },
      {
        es: "Agosto",
        en: "August",
      },
      {
        es: "Septiembre",
        en: "September",
      },
      {
        es: "Octubre",
        en: "October",
      },
      {
        es: "Noviembre",
        en: "November",
      },
      {
        es: "Diciembre",
        en: "December",
      },
    ],
  };

  // Set lang on refresh
  useEffect(() => {
    setLang(getLang(router));
  }, [router]);

  console.log(displayedImgIndex);

  // JSX to return
  return (
    <Layout
      selectedTab={strings.tabName}
      title={strings.title}
      description={strings.description}
    >
      <div className={styles.container}>
        <main className={styles.main}>
          {/* Opened img */}
          {displayedImgIndex === null ? null : (
            <div className={styles.displayedImgSectionBackground}>
              <button
                className={`${styles.displayedImgArrowBtn} ${
                  displayedImgIndex === 0
                    ? styles.displayedImgArrowBtnDisabled
                    : ""
                }`}
                onClick={() => handleArrowClick(false)}
              >
                <IoChevronBack />
              </button>
              <div className={styles.displayedImgSectionContainer}>
                <button
                  className={styles.displayedImgBack}
                  onClick={closeDisplayedImg}
                >
                  <IoChevronBack className={styles.displayedImgBackArrow} />
                  {strings.back[lang]}
                </button>
                <div className={styles.displayedImgContentContainer}>
                  <div className={styles.displayedImgContainer}>
                    <Image
                      src={
                        galeryImgs[displayedGaleryIndex].imgs[displayedImgIndex]
                          .img
                      }
                      alt="Img"
                      className={styles.displayedImg}
                    />
                  </div>
                  <div className={styles.displayedImgTxtContainer}>
                    <brandFont className={styles.displayedImgTitle}>
                      {
                        galeryImgs[displayedGaleryIndex].imgs[displayedImgIndex]
                          .title[lang]
                      }
                    </brandFont>
                    <p className={styles.displayedImgDate}>
                      {formatDate(
                        galeryImgs[displayedGaleryIndex].imgs[displayedImgIndex]
                          .date
                      )}
                    </p>
                    <p className={styles.displayedImgTxt}>
                      {
                        galeryImgs[displayedGaleryIndex].imgs[displayedImgIndex]
                          .message[lang]
                      }
                    </p>
                  </div>
                </div>
              </div>
              <button
                className={`${styles.displayedImgArrowBtn} ${
                  displayedImgIndex ===
                  galeryImgs[displayedGaleryIndex].imgs.length - 1
                    ? styles.displayedImgArrowBtnDisabled
                    : ""
                }`}
                onClick={() => handleArrowClick(true)}
              >
                <IoChevronForward />
              </button>
            </div>
          )}

          {/* Title */}
          <brandFont className={styles.title}>
            {strings.pageTitle[lang]}
          </brandFont>

          {/* Description */}
          <p className={styles.description}>{strings.text[lang]}</p>

          {/* Galeries */}
          <div className={styles.galeriesContainer}>
            {galeryImgs.map((galery) => (
              <div className={styles.galeryContainer} key={galery.title[lang]}>
                <div className={styles.galeryTitleContainer}>
                  <brandFont className={styles.galeryTitle}>
                    {galery.title[lang]}
                  </brandFont>
                </div>
                <div className={styles.galerySeparator} />
                <CardsDisplayer
                  items={galery.imgs.map((img) => (
                    <ImgCard
                      key={img.title[lang]}
                      imgData={img}
                      onClick={() =>
                        hanldeGaleryImgPress(
                          galery.imgs.indexOf(img),
                          galeryImgs.indexOf(galery)
                        )
                      }
                    >
                      {img.title[lang]}
                    </ImgCard>
                  ))}
                />
              </div>
            ))}
          </div>
        </main>
      </div>
    </Layout>
  );
}
