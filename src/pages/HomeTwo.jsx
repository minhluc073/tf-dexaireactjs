import Layout from "components/layout/Layout";
import Banner2 from "components/banner/Banner2";
import Features from "components/features/Features";
import Brand1 from "components/brand/Brand1";
import Compare from "components/compare/Compare";
import About1 from "components/about/About1";
import Testimonial2 from "components/Testimonial/Testimonial2";
import Services1 from "components/services/Services1";
import Language from "components/language/Language";

const HoweTwo = () => {
    return (
        <Layout mainCls="main-content fix" headerStyle={2} footerStyle={2}>
            <Banner2/>
            <Features/>
            <Brand1/>
            <Compare/>
            <About1/>
            <Testimonial2/>
            <Services1/>
            <Language />

        </Layout>
    );
}

export default HoweTwo;