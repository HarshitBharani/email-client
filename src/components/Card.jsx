import { useData } from "../context/DataContext";
import styles from "./card.module.css";
import { DateComponent } from "./Date";
export const Card = ({ data }) => {
  return (
    <section className={`${styles.card}`}>
      <figure className={styles.figure}>
        <span className={styles.avatarWord}>{data.from.name[0]}</span>
      </figure>
      <div>
        <p className={styles.m0}>
          From:{" "}
          <span
            className={styles.bold}
          >{`${data.from.name} <${data.from.email}>`}</span>
        </p>
        <p className={styles.m0}>
          Subject: <span className={styles.bold}>{data.subject}</span>
        </p>
        <p className={styles.mb0}>{data.short_description}</p>
        <p className={styles.mb0}>
          {" "}
          <DateComponent data={data} />
          <span className={styles.favorite}>Favorite</span>
        </p>
      </div>
    </section>
  );
};
