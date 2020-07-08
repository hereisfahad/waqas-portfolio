import React, { Component } from 'react'

class Hero extends Component {

    render() {
        const { openSideBar, links } = this.props;
        const { greeting, tagline, hero_image, background_image } = this.props.data;

        return (
            <div style={{ backgroundImage: `url(${process.env.BASE_URL}${background_image.url})` }}
                className="bg-contain bg-right-top bg-no-repeat pb-16 pt-1">
                <div className="container mx-auto px-4 lg:px-8">
                    <div className="mt-5 flex justify-between">
                        <a className="text-gray-900" href="#">Waqas Arshad</a>
                        <div className="lg:hidden" id="menu" onClick={() => openSideBar()}>
                            <div className="bg-gray-900 mb-1 w-8 h-1 transition-transform ease-out duration-500"></div>
                            <div className="bg-gray-900 mb-1 w-8 h-1"></div>
                            <div className="bg-gray-900 mb-1 w-8 h-1"></div>
                        </div>
                        <ul className="hidden lg:flex float-right">
                            {
                                links.map(link => {
                                    return (
                                        <li className="mr-6" key={`link_${link.name}`}>
                                            <a className="text-gray-dim hover:text-gray-900 transition-colors duration-300 ease-in-out" href={link.href}>{link.name}</a>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    <div className="py-16 flex items-center flex-col lg:flex-row justify-between">
                        <div className="flex-1 mb-8 lg:mb-0">
                            <h1 className="text-gray-900 font-semibold text-4xl lg:text-5xl">{greeting}</h1>
                            <h4 className="text-gray-dim text-3xl">{tagline}</h4>
                            <a href="#" className="inline-block mt-5 bg-navy-blue rounded px-10 py-2 text-white">Contact
                            me</a>
                        </div>
                        <div className="flex-1">
                            <img src={`${process.env.BASE_URL}${hero_image.url}`} alt="mobile-dev svg" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Hero
