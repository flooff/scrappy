import Layout from '../components/Layout';

const Error = ({ statusCode}) => {
    return(
        <>
        <Layout title='error'>
            <p>Couldnt get that page, sorry</p>
            <p>
            {statusCode
            ? `An error ${statusCode} occurred on server`
            : 'An error occurred on client'}
            </p>
        </Layout>
        </>
    )
    Error.getInitialProps = ({ res, err }) => {
        const statusCode = res ? res.statusCode : err ? err.statusCode : 404
        return { statusCode }
      }
}

export default Error;