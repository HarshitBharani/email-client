import { useData } from "../context/DataContext";
import styles from "./filter.module.css";

export const Filter = () => {
  const { filter } = useData();

  return (
    <>
      <ul className={styles.filterContainer}>
        <li className="">Filter By :</li>

        <li onClick={() => {}}>Read</li>
        <li>Unread</li>
        <li>Favorites</li>
      </ul>
    </>
  );
};
