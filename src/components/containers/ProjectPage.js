import React from 'react';
import projectData from './ModelView/projectsFile';
import Cards from './ModelView/Cards';
function Project() {
    const ProjectCards = projectData.map(data => {
        return <Cards
            key={data.id}
            imageUrls={data.imageUrls}
            title={data.title}
            desc={data.desc}
        />
    });
    return (
        <div className="wrapper">
        <h1>Projects</h1>
            <div className="items">
                {ProjectCards}
            </div>
        </div>
    )
}

export default Project;