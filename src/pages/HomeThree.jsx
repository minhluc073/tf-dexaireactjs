import Testimonial3 from "components/Testimonial/Testimonial3";
import About2 from "components/about/About2";
import Banner3 from "components/banner/Banner3";
import Brand2 from "components/brand/Brand2";
import Cta from "components/cta/Cta";
import Layout from "components/layout/Layout";
import Pricing3 from "components/pricing/Pricing3";
import Services2 from "components/services/Services2";
import Speech from "components/speech/Speech";
import Voices from "components/voice/Voices";

const HomeThree = () => {
    return (
        <Layout mainCls="main-content-two fix" headerStyle={3} footerStyle={3}>
        <Banner3 />
        <Speech />
        <Brand2 />
        <Services2 />
        <About2 />
        <Voices />
        <Pricing3 />
        <Testimonial3 />
        <Cta />
    </Layout>
    );
}

export default HomeThree;