import Head from 'next/head'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function MainLayout({ children, title, name, content }) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta
                    name={name}
                    content={content}
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            {children}
            <Footer />
        </>
    )
}