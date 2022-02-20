import Link from "next/link"
import Head from "next/head"
import Router from 'next/router'
import Nprogress from 'nprogress'
// import '../styles/global.css'
import styles from '../styles/Header.module.css'

Router.onRouteChangeStart = url  => {
    console.log(url)
    Nprogress.start();
}
Router.onRouteChangeComplete = () => Nprogress.done();
Router.onRouteChangeError = () => Nprogress.done();


export default ({children, title}) => (
    <div className={styles.root}>
        <head>
            <title>Scrappy</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
        </head>
        <header className={styles.header} >
        <Link href='/'><a>Home</a></Link>
        <Link href='/amazon'><a>Amazon</a></Link>
        <Link href='/alie'><a>Alie</a></Link>
        <Link href='/tiktok'><a>TikTok</a></Link>
        <Link href='/signup'><a>Sign Up</a></Link>
        <Link href='/signin'><a>Sign IN</a></Link>
        </header>
        <h1>{title}</h1>
            {children}
        <footer className={styles.footer}>Footer</footer>
    </div>
)

