import React, { Component } from 'react'

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };
    }
    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    }
    handleSubmit = (e) => {
        const { name, email, message } = this.state;
        console.log(e)
        e.preventDefault();
        fetch(`${process.env.BASE_URL}/email`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(
                {
                    from: email,
                    to: 'fahadjabbar31@gmail.com',
                    replyTo: email,
                    subject: "Another email from portfolio!",
                    html: `<p>${message}</p>`
                }
            )
        });
        this.setState({ name: '', email: '', message: '', })
    }
    render() {
        const { name, email, message } = this.state;
        const { image } = this.props;
        return (
            <div className="container mx-auto px-4 lg:px-8" id="contact">
                <h2 className="text-gray-800 font-bold text-2xl lg:text-4xl">Contact</h2>
                <p className="text-gray-dim">Have a question or want to work together?</p>
                <div className=" flex flex-col lg:flex-row items-start justify-between py-16">
                    <div className=" flex-1 w-full">
                        <form action="" name="portfolio" onSubmit={this.handleSubmit}>
                            <div className="mb-4">
                                <input className="w-full border-b border-solid border-navy-blue outline-none py-3 px-4" type="text"
                                    value={name} name="name" id="name" aria-label="name" placeholder="Full name*" onChange={this.handleChange} />
                            </div>
                            <div className="mb-4">
                                <input className="w-full border-b border-solid border-navy-blue outline-none py-3 px-4" type="email"
                                    value={email} name="email" id="email" aria-label="email" placeholder="Email*" onChange={this.handleChange} />
                            </div>
                            <div className="mb-4">
                                <textarea className="w-full border-b border-solid border-navy-blue outline-none py-3 px-4"
                                    type="text" value={message} name="message" id="message" aria-label="message" placeholder="Message*"
                                    rows="8" onChange={this.handleChange}></textarea>
                            </div>
                            <div className="mb-4">
                                <button
                                    className="bg-tangaroa text-white px-10 py-2 rounded shadow-lg tracking-wider font-semibold text-sm focus:outline-none">
                                    Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="flex-1 lg:pr-8 order-first mb-8">
                        <img src={`${process.env.BASE_URL}${image.url}`} alt="I am waqas" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
