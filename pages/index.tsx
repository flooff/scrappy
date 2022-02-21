
import Layout from "../components/Layout";
import Hero from '../components/hero';
import Pricing from "../components/pricing";
import Feature from '../components/feature';
import CTA from "../components/cta";
const Index = () =>(
    <Layout title="home">
        <div>
            <Hero />
            <CTA />
            <Pricing />
            <Feature />
        </div>
    </Layout>
)

export default Index;