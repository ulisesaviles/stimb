// React imports
import { useState, useEffect } from "react";

// NextJs imports
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

// Styles
import styles from "../../styles/pages/Producto.module.css";

// Local functions
import { getLang, defaultLang } from "../../config/lang";

// Components
import Layout from "../../components/layout";

// Icons
import { IoChevronBack } from "react-icons/io5";

// Helper functions
import {
  getAllProductsIds,
  getProductData,
} from "../../config/helperFunctions";

// Product data given an ID
export async function getStaticProps({ params }) {
  const productData = getProductData(params.id);
  return {
    props: {
      productData,
    },
  };
}

// Get all possible values for the route [id]
export async function getStaticPaths() {
  const paths = getAllProductsIds();
  return {
    paths,
    fallback: false,
  };
}

// Main component to export
export default function Product({ productData }) {
  // Lang (defaultLang by default)
  const [lang, setLang] = useState(defaultLang);

  // Constants
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  // Router
  const router = useRouter();

  // Strings to render
  const strings = {
    title: {
      es: `STIMB | ${productData.name[lang]}`,
      en: `STIMB | ${productData.name[lang]}`,
    },
    description: {
      es: "STIMB es una empresa Tijuanense con la misión de mejorar la eficiencia de plantas y máquinas bloqueras a través de reparaciones, optimización de recursos y otras estrategias aprendidas a través de más de 30 años de experiencia.",
      en: "STIMB is a company from Tijuana with the mission of improving the efficiency of block making plants and machines through repairs, resource optimization and other strategies learned through more than 30 years of experience.",
    },
    tabName: "product",
    back: {
      es: "Regresar",
      en: "Back",
    },
    contactQuestion: {
      es: "¿Te interesa adquirir este producto?",
      en: "Are you interested in purchasing this product?",
    },
    contact: {
      es: "¡Contáctanos!",
      en: "Contact us!",
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
          {/* Content container */}
          <div className={styles.contentContainer}>
            {/* Back */}
            <div className={styles.backContainer}>
              <Link href="/productos">
                <a className={styles.back}>
                  <IoChevronBack className={styles.backArrow} />
                  {strings.back[lang]}
                </a>
              </Link>
            </div>
            <div className={styles.contentSubContainer}>
              {/* Img section */}
              <div className={styles.imgSectionContainer}>
                <div className={styles.imgContainer}>
                  <Image
                    src={productData.imgs[selectedImgIndex]}
                    className={styles.img}
                  />
                </div>
                {/* Galery */}
                <div className={styles.imgSectionGalery}>
                  {productData.imgs.map((img) => {
                    const index = productData.imgs.indexOf(img);
                    return (
                      <div
                        key={index}
                        className={`${styles.galeryImgContainer} ${
                          styles[
                            selectedImgIndex === index
                              ? "galeryImgSelected"
                              : ""
                          ]
                        }`}
                        onClick={() => setSelectedImgIndex(index)}
                      >
                        <Image src={img} className={styles.galeryImg} />
                      </div>
                    );
                  })}
                </div>
              </div>
              {/* Info */}
              <div className={styles.infoContainer}>
                {/* Title */}
                <brandFont className={styles.name}>
                  {productData.name[lang]}
                </brandFont>
                {/* Type */}
                <p className={styles.type}>{productData.type[lang]}</p>
                {/* Items */}
                <div className={styles.infoItemsContainer}>
                  {productData.items.map((item) => (
                    <div
                      className={styles.infoItemContainer}
                      key={item.name[lang]}
                    >
                      <h6 className={styles.infoItemName}>
                        {item.name[lang]}:{" "}
                      </h6>
                      <p className={styles.infoItem}>{item.value[lang]}</p>
                    </div>
                  ))}
                </div>
                {/* Contact */}
                <p className={styles.contactQuestion}>
                  {strings.contactQuestion[lang]}
                </p>
                <div className={styles.contactContainer}>
                  <Link href="/contacto">
                    <a className={styles.contact}>{strings.contact[lang]}</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
