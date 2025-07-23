import styles from "./Card.module.css";

export default function Card({ title, children }) {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  );
}
