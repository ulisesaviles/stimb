// ReactJS imports
import { useState, useEffect } from "react";

// NextJS imports
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

// Local imports
import { getLang, defaultLang } from "../config/lang";

// Styles
import styles from "../styles/components/ProductCard.module.css";

/**
 * Home's product Card
 */
const ProductCard = ({ product, big }) => {
  // Router
  const router = useRouter();

  // Lang (defaultLang by default)
  const [lang, setLang] = useState(
    router.query.lang ? router.query.lang : defaultLang
  );

  // Strings to render
  const strings = {
    viewDetails: {
      es: "Ver detalles",
      en: "View details",
    },
  };

  // Set lang on refresh
  useEffect(() => {
    setLang(getLang(router));
  }, [router]);

  // Main JSX to return
  return (
    <div className={`${styles.container} ${big ? styles.bigContainer : ""}`}>
      <div className={styles.imgContainer}>
        <Image alt="Machine img" src={product.principalImg} />
      </div>
      <div className={styles.infoContainer}>
        <brandFont className={styles.name}>{product.name[lang]}</brandFont>
        <p className={styles.type}>{product.type[lang]}</p>
        <p className={styles.description}>
          {product.cardDescription.line1[lang]}
        </p>
        <p className={styles.description}>
          {product.cardDescription.line2[lang]}
        </p>
      </div>
      <div className={styles.btnContainer}>
        <Link href={`/productos/${product.id}`}>
          <a className={styles.btn}>{strings.viewDetails[lang]}</a>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
