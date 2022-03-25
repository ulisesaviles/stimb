// ReactJS imports
import { useState, useEffect } from "react";

// NextJS imports
import { useRouter } from "next/router";

// Local imports
import { getLang, defaultLang } from "../config/lang";

// Components
import Stimb from "./stimbLogo";

// Styles
import styles from "../styles/components/Footer.module.css";
import globalStyles from "../styles/Global.module.css";

/**
 * Footer indicating intellectual property
 */
const Footer = () => {
  // Router
  const router = useRouter();

  // Lang (defaultLang by default)
  const [lang, setLang] = useState(
    router.query.lang ? router.query.lang : defaultLang
  );

  // Strings to render
  const strings = {
    allRightsReserved: {
      es: "Todos los derechos reservados.",
      en: "All rights reserved",
    },
  };

  // Set lang on refresh
  useEffect(() => {
    setLang(getLang(router));
  }, [router]);

  // Main JSX to return
  return (
    <footer
      className={`${styles.footerContainer} ${globalStyles.backgroundBlur}`}
    >
      <div>
        Copyright © 2022 <Stimb /> {strings.allRightsReserved[lang]}
      </div>
    </footer>
  );
};

export default Footer;
