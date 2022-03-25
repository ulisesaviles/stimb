// ReactJS imports
import { useState } from "react";

// Styles
import styles from "../styles/components/CardsDisplayer.module.css";

// Icons
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

/**
 * Cards displayer
 */
const CardsDisplayer = ({ items }) => {
  // Selected card
  const [selectedCardIndex, setSelectedCardIndex] = useState(
    items.length >= 3 ? 3 : 0
  );

  // Main JSX to return
  return (
    <div className={styles.container}>
      <button
        aria-label="Back"
        className={styles.arrowContainer}
        onClick={() =>
          setSelectedCardIndex(
            selectedCardIndex > 0 ? selectedCardIndex - 1 : 0
          )
        }
      >
        <div className={styles.arrowSubContainer}>
          <IoChevronBack />
        </div>
      </button>
      <div className={styles.cardsContainer}>
        <div style={{ opacity: 0 }}>{items[0]}</div>
        {items.map((item) => {
          const index = items.indexOf(item);
          return (
            <>
              {selectedCardIndex - 2 > index ||
              selectedCardIndex + 2 < index ? null : (
                <div
                  key={index}
                  className={`${styles.itemContainer} ${
                    styles[`item${index - (selectedCardIndex - 2)}`]
                  }`}
                >
                  {item}
                </div>
              )}
            </>
          );
        })}
      </div>
      <button
        aria-label="Forward"
        className={styles.arrowContainer}
        onClick={() =>
          setSelectedCardIndex(
            selectedCardIndex + 1 < items.length
              ? selectedCardIndex + 1
              : items.length - 1
          )
        }
      >
        <div className={styles.arrowSubContainer}>
          <IoChevronForward />
        </div>
      </button>
    </div>
  );
};

export default CardsDisplayer;
