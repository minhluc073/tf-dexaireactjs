
import Banner1 from "components/banner/Banner1"
import Counter1 from "components/counter/Counter1"
import Layout from "components/layout/Layout"
import Video from "components/video/Video"
import Writing from "components/writing/Writing"

 const HomeOne = () => {

    return (
        <Layout mainCls="main-content fix" headerStyle={1} footerStyle={1}>
            <Banner1 />
            <Video/>
            <Counter1/>
            <Writing/>
        </Layout>
    )
}

export default HomeOne