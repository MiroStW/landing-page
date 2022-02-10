import React from "react";
import styles from "../assets/quote.css";

const Quote = () => {
  return (
    <div className={styles.quote}>
      <div className={styles.container}>
        <figure>
          <blockquote>
            This is an inspiring quote, or a testimonial from a customer. Maybe
            it's just filling up space, or maybe people will actually read it.
            Who knows? All I know is that it looks nice.
          </blockquote>
          <figcaption>-Thor, God of Thunder</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default Quote;
