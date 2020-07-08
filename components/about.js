import React, { Component } from 'react'

class About extends Component {
    render() {
        const { greeting, tagline, about_image, background_image } = this.props.data;
        return (
            <div className="bg-contain bg-left-top bg-no-repeat" style={{ backgroundImage: `url(${process.env.BASE_URL}${background_image.url})` }}
                id="about">
                <div className="container mx-auto px-4 lg:px-8 flex flex-col md:flex-row items-center justify-between py-16">
                    <div className="flex-1 mb-8 px-2 lg:mb-0 lg:px-0">
                        <img src={`${process.env.BASE_URL}${about_image.url}`} alt="I am waqas" className="w-full" />
                    </div>
                    <div className="md:pl-8 flex-1">
                        <h1 className="mb-8 text-gray-900 text-4xl font-bold">{greeting}</h1>
                        <p className="text-gray-dim mb-10 leading-snug text-2xl">{tagline}</p>
                        <a href="#" className="inline-block mt-5 bg-navy-blue rounded px-10 py-2 text-white">
                            Contact me
                        </a>
                    </div>
                </div>
            </div>
        )
    }

}

export default About
