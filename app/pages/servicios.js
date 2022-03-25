// React imports
import { useState, useEffect } from "react";

// NextJs imports
import { useRouter } from "next/router";
import Link from "next/link";

// Styles
import styles from "../styles/pages/Servicios.module.css";

// Local functions
import { getLang, defaultLang } from "../config/lang";

// Components
import Stimb from "../components/stimbLogo";
import Layout from "../components/layout";
import { Slide } from "react-awesome-reveal";

// Main component to export
export default function Services() {
  // Lang (defaultLang by default)
  const [lang, setLang] = useState(defaultLang);

  // Router
  const router = useRouter();

  // Strings to render
  const strings = {
    title: {
      es: "STIMB | Servicios",
      en: "STIMB | Services",
    },
    description: {
      es: "STIMB es una empresa Tijuanense con la misión de mejorar la eficiencia de plantas y máquinas bloqueras a través de reparaciones, optimización de recursos y otras estrategias aprendidas a través de más de 30 años de experiencia.",
      en: "STIMB is a company from Tijuana with the mission of improving the efficiency of block making plants and machines through repairs, resource optimization and other strategies learned through more than 30 years of experience.",
    },
    tabName: "services",
    restauration: {
      discount: {
        es: "¡Este servicio tiene descuento actualmente!",
        en: "This service is on sale!",
      },
      title: {
        es: "Restauración de máquinas",
        en: "Restoration of machines",
      },
      message: {
        es: [
          <Stimb key={0} />,
          " restaura máquinas bloqueras para que funcionen en condiciones óptimas lo antes posible.",
        ],
        en: [
          <Stimb key={0} />,
          " restores block machines to work inoptimal conditions as soon as possible.",
        ],
      },
      items: [
        {
          title: {
            es: "Haz contacto:",
            en: "Contact us:",
          },
          content: {
            type: "list",
            es: [
              "El equipo de ",
              <Stimb key={1} />,
              " identificará las condiciones de tu máquina por medio de fotografías y propondrá un precio y plazo estimado de reparación.",
            ],
            en: [
              "The team at ",
              <Stimb key={1} />,
              " will identify the conditions of your machine through photographs and propose a price and estimated repair time.",
            ],
          },
        },
        {
          title: {
            es: "Negociación:",
            en: "Negotiation:",
          },
          content: {
            type: "str",
            es: "Para nosotros es importante ofrecer un precio justo por nuestros servicios y terminar en el menor tiempo posible. La etapa de negociación suele ser breve, es aquella en que se estipulan los detalles del servicio.",
            en: "For us it is important to offer a fair price for our services and finish in the shortest possible time. The negotiation stage is usually brief, it is the one in which the details of the service are stipulated.",
          },
        },
        {
          title: {
            es: "Plazo de restauración:",
            en: "Restoration period:",
          },
          content: {
            type: "list",
            es: [
              "Según las condiciones de su máquina, el equipo de ",
              <Stimb key={1} />,
              " trabajará el tiempo necesario en ella para lograr que esta alcance un ritmo de producción óptimo.",
            ],
            en: [
              "Depending on the conditions of your machine, the team at ",
              <Stimb key={1} />,
              " will work the necessary time on your machine to bring it up to optimum production rate.",
            ],
          },
        },
        {
          title: {
            es: "Instalación:",
            en: "Installation:",
          },
          content: {
            type: "str",
            es: "La instalación es un servicio opcional que garantiza al cliente que la máquina alcanzará el ritmo de producción óptimo (una mala instalación podría producir daños en el equipo y requerir una segunda reparación).",
            en: "Installation is an optional service that guarantees the customer that the machine will reach the optimal production rate (a bad installation could cause damage to the equipment and require a second repair).",
          },
        },
        {
          title: {
            es: "¡La máquina está lista!",
            en: "The machine is ready!",
          },
          content: {
            type: "str",
            es: "Una vez restaurada e instalada, la máquina está lista para iniciar producción (sugerimos mantenimiento periódico para garantizar que se mantendrá en buen estado).",
            en: "Once restored and installed, the machine is ready to start production (we suggest regular maintenance to ensure it stays in good condition).",
          },
        },
      ],
      question: {
        es: "¿Tienes una máquina que necesita reparación?",
        en: "Do you have a machine that needs repair?",
      },
      btn: {
        es: "¡Contáctanos!",
        en: "Contact us!",
      },
    },
    buyAndSell: {
      title: {
        es: "Compra-venta de máquinas y refacciones",
        en: "Purchase and sale of machines and spare parts",
      },
      message: {
        es: "En nuestros 30 años de experiencia hemos aprendido que siempre hay mercado para máquinas en buenas condiciones, o incluso no tan buenas para aquellos que buscan las mejores oportunidades.",
        en: "In our 30 years of experience we have learned that there is always buyers for machines in good condition, or even not so good for those looking for the best opportunities.",
      },
      buy: {
        title: {
          es: "Si quieres comprar:",
          en: "If you want to buy:",
        },
        message: {
          es: "¡Echa un vistazo a nuestros productos!",
          en: "Take a look at our products!",
        },
        btn: {
          es: "Ver productos",
          en: "View products",
        },
      },
      sell: {
        title: {
          es: "Si quieres vender:",
          en: "If you want to sell:",
        },
        message: {
          es: "¡Para nosotros, tus máquinas y refacciones son oro puro! Ponte en contacto con nuestro equipo y estaremos contentos de hacerte una oferta competitiva cualquier día.",
          en: "For us, your machines and spare parts are pure gold! Get in touch with our team and we'll be happy to make you a competitive offer any day.",
        },
        btn: {
          es: "Contactar",
          en: "Contact",
        },
      },
    },
    otherServices: {
      title: {
        es: "¿Ninguno de nuestros servicios satisface tu necesidad?",
        en: "None of our services meet your need?",
      },
      message: {
        es: [
          "En ",
          <Stimb key={1} />,
          " siempre estamos abiertos a la posibilidad de ampliar nuestros servicios, ",
          <Link href="/contacto" key={2}>
            <a key={3} className={styles.section3Link}>
              ¡ponte en contacto con nosotros!
            </a>
          </Link>,
          " Muy probablemente podamos ayudarte aunque no veas el servicio que buscas en nuestras páginas y redes.",
        ],
        en: [
          "At ",
          <Stimb key={1} />,
          " we are always open to the possibility of expanding our services, ",
          <Link href="/contacto" key={2}>
            <a key={3} className={styles.section3Link}>
              get in touch with us!
            </a>
          </Link>,
          " We can probably help you even if you don't see the service you are looking for on our media.",
        ],
      },
    },
  };

  // Set lang on refresh
  useEffect(() => {
    setLang(getLang(router));
  }, [router]);

  // JSX to return
  return (
    <Layout
      selectedTab={strings.tabName}
      title={strings.title}
      description={strings.description}
    >
      <div className={styles.container}>
        <main className={styles.main}>
          {/* Section 1 (Machine restoration) */}
          <section className={styles.section1Container}>
            {/* Sale */}
            <p className={styles.section1Sale}>
              {strings.restauration.discount[lang]}
            </p>
            {/* Title */}
            <brandFont className={styles.section1Title}>
              {strings.restauration.title[lang]}
            </brandFont>
            {/* Content */}
            <p className={styles.section1Content}>
              {strings.restauration.message[lang].map((item) => item)}
            </p>
            {/* Items */}
            <div className={styles.section1ItemsContainer}>
              {strings.restauration.items.map((item) => {
                const index = strings.restauration.items.indexOf(item);
                return (
                  <div className={styles.section1ItemContainer} key={index}>
                    {/* Index */}
                    <brandFont className={styles.section1ItemIndex}>
                      {index + 1}
                    </brandFont>
                    {/* Text */}
                    <div className={styles.section1ItemTextContainer}>
                      {/* Title */}
                      <brandFont className={styles.section1ItemTitle}>
                        {item.title[lang]}
                      </brandFont>
                      {/* Content */}
                      <p className={styles.section1ItemText}>
                        {item.content.type === "list"
                          ? item.content[lang].map((subItem) => subItem)
                          : item.content[lang]}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* question */}
            <p className={styles.section1Question}>
              {strings.restauration.question[lang]}
            </p>
            {/* Btn */}
            <Link href="/contacto">
              <a className={styles.section1Btn}>
                {strings.restauration.btn[lang]}
              </a>
            </Link>
          </section>

          {/* Section 2 (Buy and sell) */}
          <Slide className={styles.section2Container}>
            <div className={styles.section2SubContainer}>
              {/* Title and text */}
              <brandFont className={styles.section2Title}>
                {strings.buyAndSell.title[lang]}
              </brandFont>
              <p className={styles.section2Text}>
                {strings.buyAndSell.message[lang]}
              </p>
              {/* Buy */}
              <brandFont className={styles.section2Subtitle}>
                {strings.buyAndSell.buy.title[lang]}
              </brandFont>
              <p className={styles.section2Subtext}>
                {strings.buyAndSell.buy.message[lang]}
              </p>
              <div className={styles.section2BtnContainer}>
                <Link href="/productos">
                  <a className={styles.section2Btn}>
                    {strings.buyAndSell.buy.btn[lang]}
                  </a>
                </Link>
              </div>
              {/* Sell */}
              <brandFont className={styles.section2Subtitle}>
                {strings.buyAndSell.sell.title[lang]}
              </brandFont>
              <p className={styles.section2Subtext}>
                {strings.buyAndSell.sell.message[lang]}
              </p>
              <div className={styles.section2BtnContainer}>
                <Link href="/contacto">
                  <a className={styles.section2Btn}>
                    {strings.buyAndSell.sell.btn[lang]}
                  </a>
                </Link>
              </div>
            </div>
          </Slide>

          {/* Section 3 (No service) */}
          <section className={styles.section3Container}>
            <brandFont className={styles.section3Title}>
              {strings.otherServices.title[lang]}
            </brandFont>
            <p className={styles.section3Text}>
              {strings.otherServices.message[lang].map((item) => item)}
            </p>
          </section>
        </main>
      </div>
    </Layout>
  );
}
