import Layout from "../components/Layout";
import HeroCenter from '../components/HeroCenter'
import Split from "../components/split";
import Feature from "../components/feature";
import CTA from "../components/cta";
import Pricing from "../components/pricing";
const Company = () => ( 
   <Layout title='amazon'>
        <div>
        <Pricing />
        <Split />
        <Feature />
        <CTA />
        </div>
   </Layout>
)
export default Company;