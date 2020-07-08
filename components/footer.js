import React, { Component } from 'react'

class Nav extends Component {
    render() {
        const { background, links } = this.props;
        return (
            <div className="px-4 lg:px-8 bg-cover bg-no-repeat" id="footer"
                style={{ backgroundImage: `url(${process.env.BASE_URL}${background.url})` }}>
                <div className="container mx-auto">
                    <div className="flex items-center md:flex-row md:items-center md:justify-between flex-col pt-16 pb-8">
                        <div className="text-center sm:text-left mb-4">
                            <h2 className="mb-4 font-bold text-2xl">Waqas Arshad</h2>
                            <span>
                                &copy; All rights are reserved | 2020
                        </span>
                        </div>
                        <div className="flex">
                            {
                                links.map(link => {
                                    return (
                                        <a key={`link_${link.alt}`} href={link.href} target="_blank" className="m-1">
                                            <img className="w-6" src={`${process.env.BASE_URL}${link.icon.url}`} alt={link.alt} />
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav
