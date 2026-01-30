import styles from './../style/card.module.css'

export default function Card({ image, name, price }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={name} className={styles.thumbnail} />
      <div className={styles.info}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>${price}</span>
      </div>
    </div>
  );
}
