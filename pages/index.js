import React from 'react'
import Head from '../components/head'
import Hero from '../components/hero'
import Services from '../components/services'
import About from '../components/about'
import Projects from '../components/projects'
import Testimonials from '../components/testimonials'
import Contact from '../components/contact'
import Footer from '../components/footer'
import SideBar from '../components/sideBar'

class Home extends React.Component {
  static async getInitialProps() {
    const resp = await fetch(`${process.env.BASE_URL}/portfolios`)
    const data = await resp.json()
    return { strapiData: data[0] };
  }
  constructor(props) {
    super(props);
    this.state = {
      sideBar: false
    }
  }

  // openSideBar = () => {
  //   console.log('openSideBar')
  //   this.setState({ sideBar: true })
  // }

  // closeSideBar = () => {
  //   this.setState({ sideBar: false })
  // }

  toggleSideBar = () =>{
    this.setState({sideBar: !this.state.sideBar})
  }

  render() {
    console.log('props', this.props);
    const { sideBar } = this.state;
    const { about, hero, projects, services, testimonials, extra, footer_links, nav_links } = this.props.strapiData;
    const { testimonial_background, footer_background, contact_image, return_image, next_image, close_image } = extra
    return (
      <div>
        <Head title="Home" />
        <Hero data={hero} openSideBar={this.toggleSideBar} links={nav_links} />
        {sideBar && <SideBar closeSideBar={this.toggleSideBar} links={nav_links} close={close_image} />}
        <Services services={services} />
        <About data={about} />
        <Projects projects={projects} />
        <Testimonials
          testimonials={testimonials}
          background={testimonial_background}
          prev={return_image} next={next_image}
        />
        <Contact image={contact_image} />
        <Footer background={footer_background} links={footer_links} />
      </div>
    )
  }
}

export default Home
