import React from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <ul className={styles.header__nav}>
                <li className={styles.header__nav__item__logo}><Link href='/'>NextBlog</Link></li>
                <li className={styles.header__nav__item}><Link href='/blog'>Blog</Link></li>
                <li className={styles.header__nav__item}><Link href='/about'>About</Link></li>
                <li className={styles.header__nav__item}><Link href='/contact'>Contact</Link></li>
            </ul>
            <p className={styles.header__description}>The most reliable new source on the internet.</p>
        </header>
    )
}

export default Header;

