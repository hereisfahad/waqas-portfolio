import React, { Component } from 'react'

class Testimonials extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slider: ["first", "second", "third", "fourth", "fifth"],
            activeIndex: 0,
        };
    }

    prevSlide = () => {
        const { activeIndex } = this.state;
        const { testimonials } = this.props;
        this.setState({
            activeIndex: activeIndex - 1,
        })
        if (activeIndex === 0) {
            this.setState({
                activeIndex: activeIndex + testimonials.length - 1,
            })
        }
    }

    nextSlide = () => {
        const { activeIndex } = this.state;
        const { testimonials } = this.props;
        this.setState({
            activeIndex: activeIndex + 1,
        })
        if (activeIndex === testimonials.length - 1) {
            this.setState({
                activeIndex: 0,
            })
        }
    }

    componentDidMount() {
        setInterval(this.nextSlide, 5000)
    }
    render() {
        const { activeIndex } = this.state;
        const { testimonials, background, prev, next } = this.props;
        return (

            <div className="bg-contain bg-right-top bg-no-repeat"
                style={{ backgroundImage: `url(${process.env.BASE_URL}${background.url})` }} id="clients">
                <div className="container mx-auto px-4 lg:px-8 py-16" id="clients">
                    <h2 className="mb-6 text-gray-800 font-bold  text-2xl lg:text-4xl">Testimonials</h2>
                    <div className="slider flex justify-between">
                        <button className="goToPrev focus:outline-none hidden sm:block" onClick={this.prevSlide}>
                            <img className="w-12" src={`${process.env.BASE_URL}${prev.url}`} />
                        </button>
                        <div className="flex-1 sm:max-w-lg slides relative my-0 mx-auto overflow-hidden w-6/12 h-64">
                            {
                                testimonials.map((testimonial, tIndex) => {
                                    return (
                                        <div
                                            key={`testimonial_${tIndex}`}
                                            className={`${tIndex === activeIndex ? 'current' : 'hidden'} lg:flex rounded-lg px-8 pyS-4 text-center items-center slide absolute h-full w-full grid content-center justify-center text-white transition-opacity duration-500 ease-in-out delay-100`}>
                                            <img className="h-16 w-16 lg:h-24 lg:w-24 rounded-full mx-auto lg:mr-4 mb-4 lg:mb-0"
                                                src={`${process.env.BASE_URL}${testimonial.testimonial_image.url}`} />
                                            <div className="text-center lg:text-left">
                                                <h2 className="text-gray-900 text-2xl mb-1">{testimonial.title}</h2>
                                                <div className="text-gray-dim">{testimonial.detail}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button className="goToNext focus:outline-none hidden sm:block" onClick={this.nextSlide}>
                            <img className="w-12" src={`${process.env.BASE_URL}${next.url}`} />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default Testimonials
