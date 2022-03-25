// ReactJS imports
import { useState, useEffect } from "react";

// NextJS imports
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

// Local imports
import { getLang, defaultLang } from "../config/lang";

// Styles
import styles from "../styles/components/ImgCard.module.css";

/**
 * Galery's image card
 */
const ImgCard = ({ imgData, onClick }) => {
  // Router
  const router = useRouter();

  // Lang (defaultLang by default)
  const [lang, setLang] = useState(
    router.query.lang ? router.query.lang : defaultLang
  );

  // Functions
  const formatDate = (date = new Date()) => {
    if (lang === "es")
      return `${date.getDate()} de ${strings.months[
        date.getMonth()
      ].es.toLowerCase()} del ${date.getFullYear()}`;
    return `${
      strings.months[date.getMonth()][lang]
    } ${date.getDate()} from ${date.getFullYear()}`;
  };

  // Strings to render
  const strings = {
    viewDetails: {
      es: "Ver detalles",
      en: "View details",
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

  // Main JSX to return
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image alt="Machine img" src={imgData.img} />
      </div>
      <p className={styles.title}>{imgData.title[lang]}</p>
      <p className={styles.date}>{formatDate(imgData.date)}</p>
      <button
        className={`${styles.btnContainer} ${styles.btn}`}
        onClick={onClick}
      >
        {strings.viewDetails[lang]}
      </button>
    </div>
  );
};

export default ImgCard;
