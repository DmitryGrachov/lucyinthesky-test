import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import { IMainContainer } from '../../interfaces/container.interface';
import styles from '../../styles/nav.module.scss';

const MainContainer = ({ title, children }: IMainContainer): JSX.Element => (
    <>
        <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <nav className={styles.mainNav}>
            <Link href="/">
                <a>Catalog</a>
            </Link>
            <Link href="/cart">
                <a>Cart</a>
            </Link>
        </nav>
        {children}
    </>
);

export default MainContainer;
