import React from 'react';
import Cards from './ModelView/Cards';
function Blogs() {
    const BlogsCards = BlogsData.map(data => {
        return <Cards
            key={data.id}
            imageUrls={data.imageUrls}
            title={data.title}
            desc={data.desc}
        />
    });
    return (
        <div className='blogs-area'>
        <h1>Blogs</h1>
        <div className="wrapper">
            <div className="items">
                {BlogsCards}
            </div>
        </div>
        </div>
    )
}

export default Blogs;
const BlogsData = [
    {
        id: 1,
        imageUrls:'',
        title:'PI for FUN',
        desc:'Rational explanation of irrational number',
        goToLink:'https://amanblog.netlify.app/PI-For-Fun/'
    },
];
