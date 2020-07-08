import React, { Component } from 'react'

class Projects extends Component {
    render() {
        const { projects } = this.props;
        return (
            <div className="py-8">
                <div className="container mx-auto px-4 lg:px-8" id="projects">
                    <h2 className="mb-6 text-gray-800 font-bold  text-2xl lg:text-4xl">Projects</h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            projects.map((project, pIndex) => {
                                return (
                                    <div key={`project_${pIndex}`} className="px-8 py-4 shadow-aron text-center hover:shadow-xl transition-shadow duration-300 ease-in-out">
                                        <img className="mx-auto h-48" src={`${process.env.BASE_URL}${project.project_image.url}`} alt="project_img" />
                                        <h4 className="my-4 font-bold text-gray-900 text-2xl">{project.title}</h4>
                                        <p className="mt-3 text-gray-dim text-base">{project.detail}</p>
                                        <a
                                            href={project.href}
                                            target="_blank"
                                            className="inline-block mt-4 border border-navy-blue text-navy-blue hover:bg-navy-blue hover:text-white px-5 py-2 rounded hover:shadow-lg text-sm focus:outline-none transition-colors duration-300 ease-in-out">
                                            View More
                                        </a>
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
export default Projects
