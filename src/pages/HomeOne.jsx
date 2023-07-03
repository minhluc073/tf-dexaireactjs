
import Testimonial1 from "components/Testimonial/Testimonial1"
import Banner1 from "components/banner/Banner1"
import Counter1 from "components/counter/Counter1"
import Layout from "components/layout/Layout"
import Pricing1 from "components/pricing/Pricing1"
import Roadmap from "components/roadmap/Roadmap"
import Tools from "components/tools/Tools"
import UseCases from "components/usecases/UseCases"
import Video from "components/video/Video"
import Writing from "components/writing/Writing"

 const HomeOne = () => {

    return (
        <Layout mainCls="main-content fix" headerStyle={1} footerStyle={1}>
            <Banner1/>
            <Video/>
            <Counter1/>
            <Writing/>
            <UseCases/>
            <Roadmap/>
            <Pricing1/>
            <Tools/>
            <Testimonial1/>
        </Layout>
    )
}

export default HomeOne