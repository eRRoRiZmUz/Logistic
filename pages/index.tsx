import type { NextPage } from 'next'
import AboutUs from '../components/AboutUs'
import ClientReview from '../components/ClientReview'
import FAQ from '../components/FAQ'
import Layout from '../components/Layout'
import OurServices from '../components/OurServices'
import OurTeam from '../components/OurTeam'
import RecentNews from '../components/RecentNews'
import Service from '../components/Service'
import CustomSlider from '../components/Slider'
import SupportTeam from '../components/SupportTeam'
import WhatWeDo from '../components/WhatWeDo'
import OurSkills from '../components/OurSkills'
import OurProject from '../components/OurProject'
import Match from '../components/Match'
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
      <OurServices />
      <div className='container mx-auto px-10 md:px-40 '>
        <ClientReview />
      </div>
      <WhatWeDo/>
      <OurSkills />
      <div className='container mx-auto px-10 md:px-40 '>
        <OurProject />  
        <Match />
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
