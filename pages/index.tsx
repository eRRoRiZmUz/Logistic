import type { NextPage } from 'next'
import AboutUs from '../components/AboutUs'
import FAQ from '../components/FAQ'
import Layout from '../components/Layout'
import OurTeam from '../components/OurTeam'
import RecentNews from '../components/RecentNews'
import Service from '../components/Service'
import CustomSlider from '../components/Slider'
import SupportTeam from '../components/SupportTeam'
const Image = [{cover:"/img/image 1.jpg"},
{cover:"/img/image 2.jpg"},
{cover:"/img/image 3.jpg"},]
const Home: NextPage = () => {
  return (
    <div>
      <Layout>
      <div >
        <CustomSlider items={Image} />
      </div>
      <Service/>
      <div className='container mx-auto px-10 md:px-40 '>
        <AboutUs />
      </div>
      <SupportTeam />
      <div className='container mx-auto px-10 md:px-40 '>
        <OurTeam />
      </div>
      <RecentNews />
      <div className='container mx-auto px-10 md:px-40 '>
      <FAQ />
      </div>
      </Layout>
  </ div>
  )
}

export default Home
