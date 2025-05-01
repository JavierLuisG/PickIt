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
  ModalHeader,
  ModalBody,
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
          <ModalHeader className={styles.title_modal}>{product.title}</ModalHeader>
          <ModalBody>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
              risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
              quam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pulvinar risus non
              risus hendrerit venenatis. Pellentesque sit amet hendrerit risus, sed porttitor
              quam.
            </p>
            <p>
              Magna exercitation reprehenderit magna aute tempor cupidatat consequat elit dolor
              adipisicing. Mollit dolor eiusmod sunt ex incididunt cillum quis. Velit duis sit
              officia eiusmod Lorem aliqua enim laboris do dolor eiusmod. Et mollit incididunt
              nisi consectetur esse laborum eiusmod pariatur proident Lorem eiusmod et. Culpa
              deserunt nostrud ad veniam.
            </p>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CardComponent;