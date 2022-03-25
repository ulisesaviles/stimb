// React imports
import { useState, useEffect } from "react";

// NextJS imports
import Head from "next/head";
import { useRouter } from "next/router";

// Local imports
import { getLang, defaultLang } from "../config/lang";

// Components
import Header from "./header";
import Footer from "./footer";
import LangToggle from "./langToggle";

// Styles
import styles from "../styles/components/Layout.module.css";

// Main component
/**
 *
 * @param {string} selectedTab string indicating which tab is selected
 * @returns A layout wrapping the children component by a header and footer
 */
export default function Layout({ children, selectedTab, description, title }) {
  // Router
  const router = useRouter();

  // Lang (defaultLang by default)
  const [lang, setLang] = useState(
    router.query.lang ? router.query.lang : defaultLang
  );

  // Set lang on refresh
  useEffect(() => {
    setLang(getLang(router));
  }, [router]);

  // JSX to return
  return (
    <>
      <div className={styles.content}>
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <title>{title[lang]}</title>
          <meta name="description" content={description[lang]} />
          <meta name="lang" content={lang} />
          <meta
            property="og:image"
            content="https://raw.githubusercontent.com/ulisesaviles/stimb/main/app/public/og.jpg"
          />
          <meta name="theme-color" content="dark" />
        </Head>
        <Header selectedTab={selectedTab} />
        <div className={styles.invisibleHeader} />
        {children}
        <div className={styles.invisibleFooter}>
          <Footer />
        </div>
        <LangToggle />
      </div>
    </>
  );
}
