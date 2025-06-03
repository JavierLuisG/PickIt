"use client";

import styles from "./page.module.css";
import { useCart } from "../../context/cartContext";
import { Button } from "@heroui/react";
import Link from "next/link";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0);

  return (
    <div className={styles.cart_container}>
      <section className={styles.section_cart}>
        {cart.length === 0 ? (
          <Link href="/products" className="text-blue-600 underline">Explorar productos</Link>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item) => (
                <li key={item.id} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <h2 className="font-semibold">{item.title}</h2>
                    <p>Cantidad: {item.quantity}</p>
                    <p>Precio: ${item.price}</p>
                  </div>
                  <Button variant="ghost" onPress={() => removeFromCart(item.id)}>
                    Eliminar
                  </Button>
                </li>
              ))}
            </ul>

            <div className="mt-6">
              <p className="text-lg font-semibold">
                Total: ${total.toFixed(2)}
                </p>
              <div className="mt-4 flex gap-4">
                <Button color="danger" onPress={clearCart}>
                  Vaciar carrito
                </Button>
                <Button color="primary">
                  Proceder al pago
                </Button>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default CartPage;