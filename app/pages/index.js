// React imports
import { useState, useEffect } from "react";

// NextJs imports
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

// Styles
import styles from "../styles/pages/Home.module.css";

// Local functions
import { getLang, defaultLang } from "../config/lang";

// Imgs
import fullLogo from "../public/fullLogo.png";
import block from "../public/block.png";

// Components
import Stimb from "../components/stimbLogo";
import Layout from "../components/layout";
import CardsDisplayer from "../components/cardsDisplayer";
import ProductCard from "../components/productCard";

// Animations
import { Zoom, Slide } from "react-awesome-reveal";

// Icons
import { IoChevronForward, IoCheckmarkSharp, IoArrowUp } from "react-icons/io5";
import { BsTools } from "react-icons/bs";

// Products to display
import products from "../config/products";

// Main component to export
export default function Home() {
  // Lang (defaultLang by default)
  const [lang, setLang] = useState(defaultLang);

  // Hovered card
  const [hoveredCard, setHoveredCard] = useState(null);

  // Router
  const router = useRouter();

  const [width, setWidth] = useState(null);

  // Strings to render
  const strings = {
    title: {
      es: "STIMB - Servicio Internacional de Máquinas Bloqueras",
      en: "STIMB | Home",
    },
    description: {
      es: "STIMB es una empresa Tijuanense con la misión de mejorar la eficiencia de plantas y máquinas bloqueras a través de reparaciones, optimización de recursos y otras estrategias aprendidas a través de más de 30 años de experiencia.",
      en: "STIMB is a company from Tijuana with the mission of improving the efficiency of block making plants and machines through repairs, resource optimization and other strategies learned through more than 30 years of experience.",
    },
    tabName: "home",
    cover: {
      title: {
        es: "+30 años de experiencia mejorando la eficiencia de máquinas bloqueras",
        en: "+30 years of experience improving the efficiency of block machines",
      },
      text: {
        es: "Restauración, instalación, venta de refacciones, compra-venta de máquinas y cualquier servicio relacionado.",
        en: "Restoration, installation, sale of spare parts, purchase and sale of machines and any related service.",
      },
      interested: {
        es: "¿Te interesa nuestro servicio?",
        en: "Are you interested in our service?",
      },
      contact: {
        es: "¡Contáctanos!",
        en: "Contact us!",
      },
    },
    aboutServices: {
      btn: {
        es: "Ver servicios",
        en: "View services",
      },
      title: {
        es: "Acerca de nuestros servicios",
        en: "About our services",
      },
      description: {
        es: [
          "Todos nuestros servicios tienen como objetivo final mejorar la eficiencia de una o varias máquinas bloqueras. El equipo de ",
          <Stimb key={1} />,
          " cuenta con basto conocimiento y experiencia usará para:",
        ],
        en: [
          "All our services have the ultimate goal of improving the efficiency of one or more block making machines. The team of ",
          <Stimb key={1} />,
          " has extensive knowledge and experience will use to:",
        ],
      },
      imInterested: {
        es: "¡Me interesa!",
        en: "I'm interested!",
      },
      cards: [
        {
          icon: <IoArrowUp />,
          title: {
            es: "Aumentar el ritmo de producción",
            en: "Increase production rate",
          },
          description: {
            es: "Con nuestros servicios te será posible mantener el ritmo de producción óptimo.",
            en: "With our services it will be possible for you to maintain the optimum production rate.",
          },
          color: "green",
        },
        {
          icon: <IoCheckmarkSharp />,
          title: {
            es: "Hacer uso óptimo de recursos",
            en: "Make optimal use of resources",
          },
          description: {
            es: "En ocasiones se tiene lo necesario para alcanzar una meta, solamente es cuestión de utilizarlo eficientemente.",
            en: "Sometimes you have what it takes to achieve a goal, it's just a matter of using it efficiently.",
          },
          color: "blue",
        },
        {
          icon: <BsTools />,
          title: {
            es: "Hacer las reparaciones y/o mantenimiento necesarios",
            en: "Make necessary repairs and/or maintenance",
          },
          description: {
            es: "Además de tener el equipo adecuado, es vital que sus condiciones sean ideales.",
            en: "In addition to having the right equipment, it is vital that your conditions are ideal.",
          },
          color: "red",
        },
      ],
    },
    aboutProducts: {
      btn: {
        es: "Ver productos",
        en: "View products",
      },
      title: {
        es: "Acerca de nuestros productos",
        en: "About our products",
      },
      description: {
        es: [
          "El equipo de ",
          <Stimb key={1} />,
          " se esfuerza por proporcionar a sus clientes las mejores oportunidades para comprar máquinas bloqueras de segunda mano. Nuestro inventario cambia constantemente, estos son algunos de los productos que tenemos actualmente:",
        ],
        en: [
          "The ",
          <Stimb key={1} />,
          " team strives to provide its customers with the best opportunities to buy second hand block making machines Our inventory is constantly changing, these are some of the Products we currently have:",
        ],
      },
      products: [
        ...products.categories[0].products,
        ...products.categories[0].products,
      ],
    },
    why: {
      title: {
        es: "¿Por qué elegir STIMB?",
        en: "Why choose STIMB?",
      },
      description: {
        es: [
          "El equipo de ",
          <Stimb key={1} />,
          " se esfuerza por mejorar continuamente para ofrecer los mejores productos y servicios a sus clientes, este enfoque nos ha llevado a ser la empresa de máquinas bloqueras líder en el noroeste de México. Estas son las principales razones por las que nuestros clientes prefieren nuestros servicios:",
        ],
        en: [
          "The ",
          <Stimb key={1} />,
          " team strives for continuous improvement to offer the best products and services to its customers. customers, this approach has led us to be the leading block making machine company in northwestern Mexico. These are the main reasons why our clients prefer our services:",
        ],
      },
      items: [
        {
          es: [
            "Más de 30 años de experiencia mejorando la eficiencia de máquinas bloqueras.",
          ],
          en: [
            "More than 30 years of experience improving the efficiency of block machines.",
          ],
        },
        {
          es: [
            <Stimb key={0} />,
            " es la única empresa que ofrece una solución completa (venta, instalación, mantenimiento, etc.).",
          ],
          en: [
            <Stimb key={0} />,
            " is the only company that offers a complete solution (sale, installation, maintenance, etc.).",
          ],
        },
        {
          es: [
            "Tenemos sólo un objetivo: mejorar la eficiencia de sus máquinas bloqueras (y somos buenos en eso).",
          ],
          en: [
            "We have only one goal: to improve the efficiency of your block making machines (and we are good at it).",
          ],
        },
        {
          es: [
            "El control de calidad y atención al detalle de nuestro equipo es el factor que nos volvió líderes.",
          ],
          en: [
            "The quality control and attention to detail of our team is the factor that made us leaders.",
          ],
        },
        {
          es: [
            "Trabajamos con ética y moral ante cualquier cosa, ",
            <Stimb key={1} />,
            " es la única inversión segura.",
          ],
          en: [
            "We work with ethics and morals before anything, ",
            <Stimb key={1} />,
            " is the only safe investment.",
          ],
        },
      ],
      interested: {
        es: "¿Te interesa nuestro servicio?",
        en: "Are you interested in our service?",
      },
      contact: {
        es: "¡Contáctanos!",
        en: "Contact us!",
      },
    },
  };

  // Set lang on refresh
  useEffect(() => {
    setLang(getLang(router));
    try {
      setWidth(window.innerWidth);
    } catch (e) {}
  }, [router]);

  // JSX to return
  return (
    <Layout
      selectedTab={strings.tabName}
      title={strings.title}
      description={strings.description}
    >
      <main className={styles.main}>
        {/* Cover */}
        <Zoom>
          <section className={styles.coverContainer}>
            {/* Small logo */}
            <div className={styles.fullLogoContainer}>
              <Image src={fullLogo} alt="STIMB's logo" />
            </div>

            {/* Separator */}
            <div className={styles.separator} />

            {/* Content */}
            <div className={styles.coverContentContainer}>
              {/* Block img */}
              <div className={styles.coverContentLeftContainer}>
                <div className={styles.coverBlockContainer}>
                  <Image src={block} alt="Block" />
                </div>
              </div>

              {/* Content */}
              <div className={styles.coverContentRightContainer}>
                {/* Title */}
                <brandFont className={styles.coverTitle}>
                  {strings.cover.title[lang]}
                </brandFont>

                {/* Txt */}
                <p className={styles.coverText}>{strings.cover.text[lang]}</p>

                {/* Interested */}
                <p className={styles.coverInterested}>
                  {strings.cover.interested[lang]}
                </p>

                {/* Btn */}
                <div>
                  <Link href="contacto">
                    <a className={styles.coverContactBtn}>
                      {strings.cover.contact[lang]}
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </Zoom>

        {/* About our services */}
        <section className={styles.sectionWithoutContainer}>
          {/* Btn */}
          <div className={styles.textBtnContainer}>
            <Link href="servicios">
              <a className={styles.textBtn}>
                {strings.aboutServices.btn[lang]} <IoChevronForward />
              </a>
            </Link>
          </div>

          {/* Title */}
          <brandFont className={styles.sectionTitle}>
            {strings.aboutServices.title[lang]}
          </brandFont>

          {/* Description */}
          <p className={styles.sectionContent}>
            {strings.aboutServices.description[lang].map(
              (sentence) => sentence
            )}
          </p>

          {/* Cards */}
          <div className={styles.aboutServicesCardsContainer}>
            {strings.aboutServices.cards.map((card) => {
              const index = strings.aboutServices.cards.indexOf(card);
              return (
                // Card
                <Slide key={index}>
                  <div>
                    <div
                      className={`${styles.aboutServicesCard} ${
                        (width && width < 700) || hoveredCard === index
                          ? styles[`${card.color}Card`]
                          : null
                      }`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <div
                        className={`${styles.iconContainer} ${
                          (width && width < 700) || hoveredCard === index
                            ? styles.iconContainerSelected
                            : styles[`${card.color}IconContainer`]
                        }`}
                      >
                        {card.icon}
                      </div>
                      <brandFont className={styles.aboutServicesCardTitle}>
                        {card.title[lang]}
                      </brandFont>
                      <p className={styles.aboutServicesCardText}>
                        {card.description[lang]}
                      </p>
                      <button
                        className={`${styles.aboutServicesCardBtn} ${
                          (width && width < 700) || hoveredCard === index
                            ? styles.aboutServicesCardBtnDisplayed
                            : null
                        }`}
                        onClick={() => router.replace("/contacto")}
                      >
                        {strings.aboutServices.imInterested[lang]}
                      </button>
                    </div>
                  </div>
                </Slide>
              );
            })}
          </div>
        </section>

        {/* About our products */}
        <section
          className={`${styles.sectionWithoutContainer} ${styles.sectionAboutOurProducts}`}
        >
          {/* Btn */}
          <div className={styles.textBtnContainer}>
            <Link href="productos">
              <a className={styles.textBtn}>
                {strings.aboutProducts.btn[lang]} <IoChevronForward />
              </a>
            </Link>
          </div>

          {/* Title */}
          <brandFont className={styles.sectionTitle}>
            {strings.aboutProducts.title[lang]}
          </brandFont>

          {/* Description */}
          <p className={styles.sectionContent}>
            {strings.aboutProducts.description[lang].map(
              (sentence) => sentence
            )}
          </p>

          {/* Cards */}
          <CardsDisplayer
            items={strings.aboutProducts.products.map((product) => (
              <ProductCard
                key={strings.aboutProducts.products.indexOf(product)}
                product={product}
              />
            ))}
          />
        </section>

        {/* Why to coose STIMB */}
        <Slide>
          <section className={styles.whySectionContaner}>
            <div className={styles.whySection}>
              {/* Title */}
              <brandFont className={styles.whyTitle}>
                {strings.why.title[lang]}
              </brandFont>

              {/* Description */}
              <p className={styles.whyDescription}>
                {strings.why.description[lang].map((item) => item)}
              </p>

              {/* Items */}
              <div className={styles.whyItemsContainer}>
                {strings.why.items.map((item) => (
                  <div
                    className={styles.whyItemContainer}
                    key={strings.why.items.indexOf(item)}
                  >
                    <div className={styles.whyCheckContainer}>
                      <IoCheckmarkSharp />
                    </div>
                    <p className={styles.whyItem}>
                      {item[lang].map((subItem) => subItem)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Interested */}
              <p
                className={`${styles.coverInterested} ${styles.whyInterested}`}
              >
                {strings.why.interested[lang]}
              </p>

              {/* Btn */}
              <div className={styles.whyContactBtn}>
                <Link href="contacto">
                  <a
                    className={`${styles.coverContactBtn} ${styles.whyContactBtn}`}
                  >
                    {strings.why.contact[lang]}
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </Slide>
      </main>
    </Layout>
  );
}
