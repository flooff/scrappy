import Document, {Html,Head,Main,NextScript} from "next/document";
export default class MyDocument extends Document {
    render(){
        return (
            <Html>
                <Head>
                    <meta name="description" content="a web scrapping website"/>
                    <meta charSet="utf-8"/>
                    <meta name='robots' content="noindex, nofollow" />
                    <meta name="viewport" content="width=device-width" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}