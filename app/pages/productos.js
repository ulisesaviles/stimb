// React imports
import { useState, useEffect } from "react";

// NextJs imports
import { useRouter } from "next/router";
import Link from "next/link";

// Styles
import styles from "../styles/pages/Productos.module.css";

// Local functions
import { getLang, defaultLang } from "../config/lang";

// Components
import Stimb from "../components/stimbLogo";
import Layout from "../components/layout";
import { Slide } from "react-awesome-reveal";
import ProductCard from "../components/productCard";

// Actual products
import products from "../config/products";

// Main component to export
export default function Products() {
  // Lang (defaultLang by default)
  const [lang, setLang] = useState(defaultLang);

  // Router
  const router = useRouter();

  // Strings to render
  const strings = {
    title: {
      es: "STIMB | Productos",
      en: "STIMB | Products",
    },
    description: {
      es: "STIMB es una empresa Tijuanense con la misión de mejorar la eficiencia de plantas y máquinas bloqueras a través de reparaciones, optimización de recursos y otras estrategias aprendidas a través de más de 30 años de experiencia.",
      en: "STIMB is a company from Tijuana with the mission of improving the efficiency of block making plants and machines through repairs, resource optimization and other strategies learned through more than 30 years of experience.",
    },
    tabName: "products",
    pageTitle: {
      es: "Productos",
      en: "Products",
    },
    pageDescription: {
      es: [
        "El equipo de ",
        <Stimb key={1} />,
        " se esfuerza por proporcionar a sus clientes las mejores oportunidades para comprar máquinas bloqueras de segunda mano. Nuestro inventario cambia constantemente, estos son algunos de los productos que tenemos actualmente:",
      ],
      en: [
        "The ",
        <Stimb key={1} />,
        " team strives to provide its customers with the best opportunities to buy second hand block making machines Our inventory is constantly changing, these are some of the products currently available:",
      ],
    },
    products,
    otherProducts: {
      title: {
        es: "¿No encontraste el producto que buscabas?",
        en: "Didn't find the product you were looking for?",
      },
      message: {
        es: [
          "En ",
          <Stimb key={1} />,
          " constantemente tenemos productos nuevos y en ocasiones demoramos un par de días en actualizar nuestra página. ",
          <Link href="/contacto" key={2}>
            <a key={3} className={styles.section3Link}>
              ¡Ponte en contacto con nosotros!
            </a>
          </Link>,
          " Muy probablemente tengamos la máquina o refacción que buscas en inventario aunque no la veas en nuestras páginas y redes.",
        ],
        en: [
          "At ",
          <Stimb key={1} />,
          " we constantly have new products and sometimes it takes a couple of days to update our page. ",
          <Link href="/contacto" key={2}>
            <a key={3} className={styles.section3Link}>
              Get in contact with us!
            </a>
          </Link>,
          " Most likely we have the machine or part you are looking for in stock even if you don't see it on our pages and social media.",
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
            {/* Title */}
            <brandFont className={styles.section1Title}>
              {strings.pageTitle[lang]}
            </brandFont>
            {/* Content */}
            <p className={styles.section1Content}>
              {strings.pageDescription[lang].map((item) => item)}
            </p>
          </section>
          {/* Section 2 (Products) */}
          <section className={styles.section2Container}>
            {products.categories.map((category) => (
              <div
                key={category.name[lang]}
                className={styles.categoryContainer}
              >
                <brandFont className={styles.categoryTitle}>
                  {category.name[lang]}
                </brandFont>
                <div className={styles.separator} />
                <div className={styles.productsContainer}>
                  {category.products.map((product) => (
                    <div
                      className={styles.itemContainer}
                      key={category.products.indexOf(product)}
                    >
                      <ProductCard product={product} big />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </section>

          {/* Section 3 (No service) */}
          <section className={styles.section3Container}>
            <brandFont className={styles.section3Title}>
              {strings.otherProducts.title[lang]}
            </brandFont>
            <p className={styles.section3Text}>
              {strings.otherProducts.message[lang].map((item) => item)}
            </p>
          </section>
        </main>
      </div>
    </Layout>
  );
}
