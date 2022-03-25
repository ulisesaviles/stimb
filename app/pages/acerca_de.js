// React imports
import { useState, useEffect } from "react";

// NextJs imports
import { useRouter } from "next/router";
import Link from "next/link";

// Styles
import styles from "../styles/pages/Acerca_de.module.css";

// Local functions
import { getLang, defaultLang } from "../config/lang";

// Animations
import { Slide } from "react-awesome-reveal";

// Components
import Stimb from "../components/stimbLogo";
import Layout from "../components/layout";

// Main component to export
export default function About() {
  // Lang (defaultLang by default)
  const [lang, setLang] = useState(defaultLang);

  // Router
  const router = useRouter();

  // Strings to render
  const strings = {
    title: {
      es: "STIMB | ¿Quiénes somos?",
      en: "STIMB | About us",
    },
    description: {
      es: "STIMB es una empresa Tijuanense con la misión de mejorar la eficiencia de plantas y máquinas bloqueras a través de reparaciones, optimización de recursos y otras estrategias aprendidas a través de más de 30 años de experiencia.",
      en: "STIMB is a company from Tijuana with the mission of improving the efficiency of block making plants and machines through repairs, resource optimization and other strategies learned through more than 30 years of experience.",
    },
    tabName: "about",
    pageTitle: {
      es: "Acerca de STIMB",
      en: "About STIMB",
    },
    description: {
      es: [
        <Stimb key={0} />,
        " es una empresa Tijuanence con la misión de mejorar la eficiencia de plantas y máquinas bloqueras a través de reparaciones, optimización de recursos y otras estrategias aprendidas a través de más de 30 años de experiencia.",
      ],
      en: [
        <Stimb key={0} />,
        " is company from Tijuana with the mission of improving the efficiency of block making plants and machines through repairs, optimization of resources and other strategies learned through more than 30 years of experience.",
      ],
    },
    items: [
      {
        title: {
          es: "STIMB es eficiencia",
          en: "STIMB is efficiency",
        },
        text: {
          es: [
            "La misión de ",
            <Stimb key={1} />,
            " siempre será mejorar la eficiencia de máquinas y plantas bloqueras a través de reparaciones, optimización de recursos y otras estrategias aprendidas a través de más de 30 años de experiencia.",
          ],
          en: [
            "The mission of ",
            <Stimb key={1} />,
            " will always be to improve the efficiency of block machines and plants through repairs, resource optimization and other strategies learned through more than 30 years of experience.",
          ],
        },
        color: "green",
      },
      {
        title: {
          es: "STIMB es calidad",
          en: "STIMB is quality",
        },
        text: {
          es: [
            <Stimb key={0} />,
            " tiene como prioridad absoluta prestar un buen servicio a sus clientes y a todo aquel que confíe en la empresa. Mejorar continuamente la calidad de nuestros servicios es nuestra estrategia de crecimiento.",
          ],
          en: [
            <Stimb key={0} />,
            " has as its absolute priority to provide good service to its customers and to anyone who trusts the company. Continuously improving the quality of our services is our growth strategy.",
          ],
        },
        color: "blue",
      },
      {
        title: {
          es: "STIMB es responsabilidad",
          en: "STIMB is responsibility",
        },
        text: {
          es: [
            "Ser la empresa de máquinas bloqueras líder en el noroeste de México implica en todo momento trabajar con ética y permanecer competitivos antes de velar por intereses propios.",
          ],
          en: [
            "Being the leading block machine company in northwestern Mexico implies at all times working ethically and staying competitive before looking out for our own interests.",
          ],
        },
        color: "purple",
      },
      {
        title: {
          es: "STIMB es crecimiento",
          en: "STIMB is growth",
        },
        text: {
          es: [
            <Stimb key={0} />,
            " tiene ambiciosas y retadoras metas de crecimiento internacional. Muchos de nuestros clientes han sido testigos de esto desde nuestros inicios, y nos encantaría tener el honor de que usted fuese uno de ellos.",
          ],
          en: [
            <Stimb key={0} />,
            " has ambitious and challenging international growth goals. Many of our clients have witnessed this since our inception, and we would love the honor of having you as one of them.",
          ],
        },
        color: "gold",
      },
      {
        title: {
          es: "¡STIMB es México!",
          en: "STIMB is Mexico!",
        },
        text: {
          es: [
            "Uno de los mayores orgullos de ",
            <Stimb key={1} />,
            " es su origen mexicano. Es un honor para nosotros contribuir al desarrollo del país y de todo latinoamerica como una región fuerte con gente inteligente y productiva.",
          ],
          en: [
            "One of the greatest prides of ",
            <Stimb key={1} />,
            " is its Mexican origin. It is an honor for us to contribute to the development of the country and all of Latin America as a strong region with intelligent and productive people.",
          ],
        },
        color: "red",
      },
    ],
    contact: {
      es: "Contactar",
      en: "Contact",
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
        <brandFont className={styles.title}>
          {strings.pageTitle[lang]}
        </brandFont>
        <p className={styles.description}>{strings.description[lang]}</p>
        <div className={styles.cardsContainer}>
          {strings.items.map((item) => {
            const index = strings.items.indexOf(item);
            return (
              <Slide
                key={index}
                className={`${styles.itemContainer} ${
                  styles[item.color + "Gradient"]
                }`}
              >
                <div className={styles.itemSubContainer}>
                  <brandFont className={styles.itemTitle}>
                    {item.title[lang]}
                  </brandFont>
                  <p className={styles.itemText}>{item.text[lang]}</p>
                  <Link href="/contacto">
                    <a className={styles.itemBtn}>{strings.contact[lang]}</a>
                  </Link>
                </div>
              </Slide>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}
