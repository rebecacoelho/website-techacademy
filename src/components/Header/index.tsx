import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import Logo from '../../../public/logo.png'

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src={Logo} alt="Logo" width={90} height={40} />
        </Link>
      </div>
      <div className={styles.linksContainer}>
        <div className={styles.links}>
          <Link className={styles.link} href="/">
            Home
          </Link>
          <Link className={styles.link} href="/login">
            Login
          </Link>
        </div>
      </div>
    </header>
  );
};