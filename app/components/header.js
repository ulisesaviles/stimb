// ReactJS imports
import { useState, useEffect } from "react";

// NextJS imports
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

// Local imports
import { getLang, defaultLang } from "../config/lang";

// Styles
import styles from "../styles/components/Header.module.css";

// logo
import logo from "../public/logo.png";

// Icons
import { IoMenuOutline } from "react-icons/io5";

/**
 * Header for all pages
 * @param {string} selectedTab Takes the tab's key to illustrate which one is selected.
 */
const Header = ({ selectedTab }) => {
  // Router
  const router = useRouter();

  // Selected tab
  const [hoveredTab, setHoveredTab] = useState(null);

  // Lang (defaultLang by default)
  const [lang, setLang] = useState(
    router.query.lang ? router.query.lang : defaultLang
  );

  // Set lang on refresh
  useEffect(() => {
    setLang(getLang(router));
  }, [router]);

  // Handle popUpMenu
  const [popUpIsDisplayed, setPopUpIsDisplayed] = useState(false);

  // All available tab's info
  const availableTabs = [
    {
      key: "home",
      route: "/",
      name: {
        es: "Inicio",
        en: "Home",
      },
      type: "normalTab",
    },
    {
      key: "services",
      route: "/servicios",
      name: {
        es: "Servicios",
        en: "Services",
      },
      type: "normalTab",
    },
    {
      key: "products",
      route: "/productos",
      name: {
        es: "Productos",
        en: "Products",
      },
      type: "normalTab",
    },
    {
      key: "galery",
      route: "/galeria",
      name: {
        es: "Galería",
        en: "Galery",
      },
      type: "normalTab",
    },
    {
      key: "about",
      route: "/acerca_de",
      name: {
        es: "¿Quiénes somos?",
        en: "About us",
      },
      type: "normalTab",
    },
    {
      key: "contact",
      route: "/contacto",
      name: {
        es: "¡Contáctanos!",
        en: "Contact us!",
      },
      type: "accentBtn",
    },
  ];

  // Main JSX to render
  return (
    <>
      {/* Hamburguer btn */}
      <button
        className={styles.hamburguerMenu}
        onClick={() => setPopUpIsDisplayed(!popUpIsDisplayed)}
        aria-label="Hamburguer menu"
      >
        <IoMenuOutline />
      </button>

      {/* Header */}
      <header className={`${styles.header}`}>
        {/* Logo */}
        <Link href="/">
          <a className={styles.logoContainer}>
            <Image src={logo} alt="STIMB's logo" />
          </a>
        </Link>

        {/* Nav items */}
        <ul className={styles.navItems}>
          {availableTabs.map((tab) => {
            return (
              <li className={styles.navItem} key={tab.key}>
                {/* Actual item */}
                <Link href={tab.route}>
                  <a
                    onMouseEnter={() => setHoveredTab(tab.key)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className={
                      tab.type === "normalTab"
                        ? `${styles.navA} ${
                            selectedTab === tab.key || hoveredTab === tab.key
                              ? styles.navA_Selected
                              : null
                          }`
                        : styles.accentBtn
                    }
                  >
                    {tab.name[lang]}
                  </a>
                </Link>

                {/* Underline */}
                <div
                  className={
                    tab.type === "normalTab"
                      ? `${styles.navItemUnderLine} ${
                          selectedTab === tab.key || hoveredTab === tab.key
                            ? styles.navItemUnderLine_Selected
                            : null
                        }`
                      : null
                  }
                />
              </li>
            );
          })}
        </ul>
      </header>

      {/* Pop up */}
      <div
        className={`${styles.popupMenuContainer} ${
          popUpIsDisplayed ? styles.popUpDisplayed : null
        }`}
        onClick={() => setPopUpIsDisplayed(false)}
      >
        <ul className={`${styles.popupMenu}`}>
          {availableTabs.map((tab) => {
            return (
              <li className={styles.navItem} key={tab.key}>
                {/* Actual item */}
                <Link
                  href={tab.route}
                  onPress={() => setPopUpIsDisplayed(false)}
                >
                  <a
                    onMouseEnter={() => setHoveredTab(tab.key)}
                    onMouseLeave={() => setHoveredTab(null)}
                    className={
                      tab.type === "normalTab"
                        ? `${styles.navA} ${
                            selectedTab === tab.key || hoveredTab === tab.key
                              ? styles.navA_Selected
                              : null
                          }`
                        : styles.accentBtn
                    }
                  >
                    {tab.name[lang]}
                  </a>
                </Link>

                {/* Underline */}
                <div
                  className={
                    tab.type === "normalTab"
                      ? `${styles.navItemUnderLine} ${
                          selectedTab === tab.key || hoveredTab === tab.key
                            ? styles.navItemUnderLine_Selected
                            : null
                        }`
                      : null
                  }
                />
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Header;
