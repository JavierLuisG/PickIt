"use client";

import styles from "./page.module.css";
import ModalCart from "../../components/modalCart/page";
import {
  Image,
  Link,
  useDisclosure,
  Modal,
  ModalContent,
  Button,
} from "@heroui/react";

type Producto = {
  id: number;
  title: string;
  price: number;
  image: string;
};

type CardComponentProps = {
  product: Producto;
};

const CardComponent = ({ product }: CardComponentProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOpen = () => {
    onOpen();
  };

  return (
    <>
      <section className={styles.card_section}>
        <Image
          isZoomed
          alt="HeroUI Fruit Image with Zoom"
          radius="none"
          src={product.image}
        />
        <div className={styles.card_content}>
          <div className={styles.info_content}>
            <h2 className={styles.title}>
              {product.title}
            </h2>
            <hr aria-orientation="horizontal" className={styles.hr_line} />
            <p className={styles.price}>
              $ {product.price}
            </p>
          </div>
          <div className={styles.card_btn}>
            <Button
              className={styles.btn}
              radius="none"
              as={Link}
              onPress={() => handleOpen()}
            >
              Agregar al carrito
            </Button>
          </div>
        </div>
      </section >
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onClose={onClose}
        size="4xl"
        radius="none"
      >
        <ModalContent>
          {(onClose) => (<ModalCart product={product} onClose={onClose} />)}
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardComponent;