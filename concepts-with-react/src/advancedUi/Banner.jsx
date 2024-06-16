import React from "react";
import styles from "./banner.module.css";
// import nebula from "../assets/nebula.mp4";
const Banner = () => {
  return (
    <>
      <main className={styles.banner_container}>
        <section className={styles.banner_bg_wrapper}>
          <div className={styles.bg_child}>
            <h3>Transform Your Ideas into Reality</h3>
            <span className={styles.banner_details}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              praesentium quos voluptates qui explicabo quod a culpa odit
              deserunt hic!
            </span>
          </div>
          <section className={styles.card_section_wrapper}>
            <div className={styles.card_wrapper}>
              <h2>Best Prices Included</h2>
              <span className={styles.card_details_text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                in deserunt fuga ipsum enim quae provident natus sint, ullam
                deleniti!
              </span>
            </div>
            <div className={styles.card_wrapper}>
              <h2>Best Prices Included</h2>
              <span className={styles.card_details_text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                in deserunt fuga ipsum enim quae provident natus sint, ullam
                deleniti!
              </span>
            </div>
            <div className={styles.card_wrapper}>
              <h2>Best Prices Included</h2>
              <span className={styles.card_details_text}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
                in deserunt fuga ipsum enim quae provident natus sint, ullam
                deleniti!
              </span>
            </div>
          </section>
        </section>
        <section className={styles.video_bg_container}>
          <div className={styles.video_text_wrapper}>

        
        <div className={styles.video_text_content}>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              expedita incidunt adipisci dolor tenetur non perspiciatis numquam
              molestiae animi blanditiis, voluptas minima possimus laboriosam
              quaerat tempore quisquam alias ipsam aliquid!
            </span>
          </div>
          </div>
          <video autoPlay muted loop id="myVideo">
            <source src={nebula} type="video/mp4" />
          </video>
         
        </section>
      </main>
    </>
  );
};

export default Banner;
