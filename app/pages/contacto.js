// React imports
import { useState, useEffect } from "react";

// NextJs imports
import { useRouter } from "next/router";

// Styles
import styles from "../styles/pages/Contacto.module.css";

// Local functions
import { getLang, defaultLang } from "../config/lang";

// Components
import Stimb from "../components/stimbLogo";
import Layout from "../components/layout";

// Main component to export
export default function Contact() {
  // Lang (defaultLang by default)
  const [lang, setLang] = useState(defaultLang);

  // Constants to hanlde email
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [msg, setMsg] = useState("");

  // Router
  const router = useRouter();

  // Functions
  const handleEmailClick = () => {
    console.log("Email click");
  };

  const handleFacebookClick = () => {
    console.log("Facebook click");
  };

  const handleInstagramClick = () => {
    console.log("Instagram click");
  };

  const handlePhoneClick = () => {
    console.log("Phone click");
  };

  const resetInputs = () => {
    setName("");
    setCompany("");
    setEmail("");
    setCity("");
    setMsg("");
  };

  const sendEmail = () => {
    alert(strings.sendMail.alert[lang]);
    resetInputs();
  };

  // Strings to render
  const strings = {
    title: {
      es: "STIMB | ¡Contáctanos!",
      en: "STIMB | Contact us!",
    },
    description: {
      es: "STIMB es una empresa Tijuanense con la misión de mejorar la eficiencia de plantas y máquinas bloqueras a través de reparaciones, optimización de recursos y otras estrategias aprendidas a través de más de 30 años de experiencia.",
      en: "STIMB is a company from Tijuana with the mission of improving the efficiency of block making plants and machines through repairs, resource optimization and other strategies learned through more than 30 years of experience.",
    },
    tabName: "contact",
    infoSection: {
      title: {
        es: "¡Estaremos encantados de poder ayudarte!",
        en: "We will be happy to help you!",
      },
      parragraphs: [
        {
          es: [
            "Ya sea solucionando cualquier duda, enviando una cotización según tus necesidades, con informes de compra-venta de máquinas o con cualquier otro asunto relacionado a ",
            <Stimb key={1} />,
            ".",
          ],
          en: [
            "Whether it is solving any doubt, sending a quote according to your needs, with reports of buying and selling machines or with any other matter related to ",
            <Stimb key={1} />,
            ".",
          ],
        },
        {
          es: [
            "Contáctanos y el equipo de ",
            <Stimb key={1} />,
            " estará entusiasmado por atender tu caso tan pronto como nos sea posible.",
          ],
          en: [
            "Contact us and the team at ",
            <Stimb key={1} />,
            " will be excited to address your case as soon as possible.",
          ],
        },
        {
          es: [
            "Además, puedes contactarnos vía telefónica de lunes a viernes de 9am a 5pm.",
          ],
          en: [
            "In addition, you can contact us by phone from Monday to Friday from 9am to 5pm.",
          ],
        },
      ],
      aditionalItems: [
        { txt: "+ 52 (123) 456 78 90", onPress: handlePhoneClick },
        { txt: "correo@stimb.com", onPress: handleEmailClick },
        { txt: "Facebook", onPress: handleFacebookClick },
        { txt: "Instagram", onPress: handleInstagramClick },
      ],
    },
    sendMail: {
      title: {
        es: "¡Envíanos un correo!",
        en: "Send us an email!",
      },
      name: {
        es: "Tu nombre",
        en: "Your name",
      },
      company: {
        es: "Empresa",
        en: "Company",
      },
      email: {
        es: "Correo electrónico",
        en: "E-mail",
      },
      city: {
        es: "Ciudad, País",
        en: "City, Country",
      },
      message: {
        es: "Mensaje",
        en: "Message",
      },
      send: {
        es: "Enviar",
        en: "Send",
      },
      alert: {
        es: "Correo enviado con éxito.",
        en: "Email sent successfully.",
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
          <div className={styles.contentContainer}>
            {/* Info section */}
            <div className={styles.infoSectionContainer}>
              {/* Title */}
              <brandFont className={styles.infoSectionTitle}>
                {strings.infoSection.title[lang]}
              </brandFont>

              {/* Paragraphs */}
              {strings.infoSection.parragraphs.map((paragraph) => (
                <div
                  key={paragraph[lang][0]}
                  className={styles.paragraphContainer}
                >
                  {paragraph[lang].map((item) => item)}
                </div>
              ))}

              {/* Extra items */}
              <div className={styles.extraItemsContainer}>
                {strings.infoSection.aditionalItems.map((item) => (
                  <button
                    key={item.txt}
                    onClick={item.onPress}
                    className={styles.extraItem}
                  >
                    {item.txt}
                  </button>
                ))}
              </div>
            </div>

            {/* Send email */}
            <div className={styles.emailSectionContainer}>
              {/* Title */}
              <brandFont className={styles.infoSectionTitle}>
                {strings.sendMail.title[lang]}
              </brandFont>

              {/* Form */}
              <form onSubmit={sendEmail} className={styles.form}>
                {/* Name */}
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={strings.sendMail.name[lang]}
                  className={styles.input}
                />

                {/* Company */}
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder={strings.sendMail.company[lang]}
                  className={styles.input}
                />

                {/* Email */}
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={strings.sendMail.email[lang]}
                  className={styles.input}
                />

                {/* City */}
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder={strings.sendMail.city[lang]}
                  className={styles.input}
                />

                {/* Message */}
                <textarea
                  type="text"
                  value={msg}
                  onChange={(e) => setMsg(e.target.value)}
                  placeholder={strings.sendMail.message[lang]}
                  className={`${styles.input} ${styles.textArea}`}
                />

                {/* Submit btn */}
                <input
                  type="submit"
                  className={styles.subtmitBtn}
                  value={strings.sendMail.send[lang]}
                />
              </form>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
