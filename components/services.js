import React, { Component } from 'react'

class Services extends Component {
    render() {
        const { services } = this.props;
        return (
            <div className="py-8">
                <div className="container mx-auto px-4 lg:px-8 z-10" id="services">
                    <h2 className="mb-6 text-gray-800 font-bold text-2xl lg:text-4xl">Services</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {
                            services.map((service, sIndex) => {
                                return (
                                    <div key={`service_${sIndex}`} className="lg:flex bg-white rounded-lg px-8 py-8 shadow-aron text-center hover:shadow-xl items-start transition-shadow duration-300 ease-in-out">
                                        <img className="h-16 w-16 lg:h-16 lg:w-16 mx-auto lg:mr-6 mb-4 lg:mb-0"
                                            src={`${process.env.BASE_URL}${service.service_image.url}`} alt="service_img" />
                                        <div className="text-center lg:text-left">
                                            <h2 className="text-gray-900 text-2xl mb-1">{service.title}</h2>
                                            <div className="text-gray-dim">
                                                {service.detail}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Services
