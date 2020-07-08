import React, { Component } from 'react'

class Menu extends Component {

    render() {
        const { closeSideBar, links, close } = this.props;
        return (
            <div className="lg:hidden z-10 fixed top-0 right-0 cursor-pointer bg-gray-100" id="drawer">
                <div className="w-64 p-4 z-20 float-right" onClick={() => closeSideBar()}>
                    <img className="w-6 float-right" src={`${process.env.BASE_URL}${close.url}`} alt="mobile-dev svg" id="cross" />
                    <ul className="text-center text-gray-900 mt-8">
                        {
                            links.map(link => {
                                return (
                                    <li key={`link_${link.name}`} className="hover:bg-gray-200 hover:text-navy-blue transition duration-300 ease-in-out">
                                        <a href={link.href} className="block p-4 font-bold">{link.name}</a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Menu