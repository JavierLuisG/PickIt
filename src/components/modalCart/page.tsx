"use client";

import React from "react";
import styles from "./page.module.css";
import {
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
  onClose: () => void;
};

const ModalCartComponent = ({ product }: CardComponentProps) => {

  return (
    <>
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
    </>
  );
};

export default ModalCartComponent;