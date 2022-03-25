// React imports
import { useState, useEffect } from "react";

// NextJS imports
import { useRouter } from "next/router";

// Local imports
import { getLang, defaultLang, setLang } from "../config/lang";

// Styles
import globalStyles from "../styles/Global.module.css";
import styles from "../styles/components/ToggleLang.module.css";

// Main component
/**
 * A component that detects and changes the lang in all the site via JS
 */
export default function LangToggle() {
  // All available langs
  const availableLangs = [
    { name: "Español", key: "es" },
    { name: "English", key: "en" },
  ];

  // Router
  const router = useRouter();

  // Lang (defaultLang by default)
  const [lang_, setLang_] = useState(
    router.query.lang ? router.query.lang : defaultLang
  );

  // Set lang on refresh
  useEffect(() => {
    setLang_(getLang(router));
  }, [router]);

  // JSX to return
  return (
    <div className={`${globalStyles.backgroundBlur} ${styles.container}`}>
      {availableLangs.map((lang) => (
        <button
          key={lang.key}
          className={`${styles.btn} ${styles.lang} ${
            lang_ === lang.key ? styles.selectedLang : null
          }`}
          onClick={() => {
            setLang(router, lang.key);
            setLang_(lang.key);
          }}
        >
          {lang.name}
        </button>
      ))}
    </div>
  );
}
