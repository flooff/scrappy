import Link from "next/link"
import Head from "next/head"
import Router from 'next/router'
import Nprogress from 'nprogress'
// import '../styles/global.css'
import Navbar from "./Navbar"
import Footer from './footer'




export default function Layout({ children, title }) {
    return (
      <>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </>
    )
}

