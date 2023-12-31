import Layout from "components/layout/Layout";
import About1 from "components/layout/about/About1";
import Banner2 from "components/layout/banner/Banner2";
import Brand1 from "components/layout/brand/Brand1";
import Compare from "components/layout/compare/Compare";
import Counter2 from "components/layout/counter/Counter2";
import Features from "components/layout/features/Features";
import Language from "components/layout/language/Language";
import Pricing2 from "components/layout/pricing/Pricing2";
import Services1 from "components/layout/services/Services1";
import Testimonial2 from "components/layout/testimonial/Testimonial2";


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
            <div className="area-bg" data-background="assets/img/bg/area_bg.jpg">
                    <Pricing2/>
                    <Counter2/>
                </div>
        </Layout>
    );
}

export default HoweTwo;