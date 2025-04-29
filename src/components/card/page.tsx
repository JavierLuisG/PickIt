import styles from "./page.module.css";

type Producto = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type CardComponentProps = {
  product: Producto;
};

const CardComponent = ({ product } : CardComponentProps) => {
  return (
    <section className={styles.card_section}>
      <div className={styles.card}>
        <div className={styles.card_img}>
          <img className={styles.img} src={product.image} alt="" />
        </div>
        <div className={styles.card_content}>
          <div className={styles.info_content}>
            <h2 className={styles.title}>
              {product.title}
            </h2>
            <p className={styles.price}>
              $ {product.price}
            </p>
          </div>
          <div className={styles.card_btn}>
            <button className={styles.btn}>
              Agregar a favoritos
            </button>
          </div>
        </div>
      </div>
    </section >
  );
};

export default CardComponent;