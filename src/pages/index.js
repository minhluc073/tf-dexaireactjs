import HomeOne from "./HomeOne";
import HoweTwo from "./HomeTwo";
import HomeThree from "./HomeThree";
import About from "./About";
import Blog from "./Blog";
import BlogDetails from "./BlogDetails";
import Contact from "./Contact";
import Faq from "./Faq";
import Help from "./Help";
import Login from "./Login";
import Work from "./Work";
import Error from "./Error";
import Job from "./Job";
import JobDetails from "./JobDetails";



const routes = [
  { path: '/', component: <HomeOne />},
  { path: '/index-2', component: <HoweTwo />},
  { path: '/index-3', component: <HomeThree />},
  { path: '/about', component: <About />},
  { path: '/blog', component: <Blog />},
  { path: '/blog-details', component: <BlogDetails />},
  { path: '/faq', component: <Faq />},
  { path: '/help', component: <Help />},
  { path: '/login', component: <Login />},
  { path: '/work', component: <Work />},
  { path: '/contact', component: <Contact />},
  { path: '/job', component: <Job />},
  { path: '/job-details', component: <JobDetails />},
  { path: '*', component: <Error />},



]

export default routes;