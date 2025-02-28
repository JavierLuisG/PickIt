"use client";

import { useRouter } from "next/navigation";
import styles from "../button/page.module.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  type?: "button" | "submit" | "reset";
  className?: string;
  theme: boolean;
}

const page = ({ children, onClick, type, href, className, theme }: ButtonProps) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href); // Redirigir a otra página
    }
    if (onClick) {
      onClick();
    }
  };

  return (
    <>
      <button
        className={`${styles.btn} ${theme ? styles.light : styles.dark} ${className}`}
        onClick={handleClick}
        type={type}
      >
        {children}
      </button>
    </>
  )
}

export default page