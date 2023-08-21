import React from 'react';
import DetailedHeader from '../components/ProjectDetailedPageComponents/DetailedHeader';
import ProjectPost from '../Data/ProjectPost';
import Testimonial from '../components/Testimonial/Testimonial';
import ImageSlider from '../components/Misc/ImageSlider';
import projectImage from '../assets/images/project_slide_img_1.jpg';

function ProjectDetailed() {
    return (
        <>
            <DetailedHeader
                heading="Sleep therapy’s product landing page design with ecommerce integration."
                client="Comfort"
                service="UI/UX Design"
                date="25 Nov. 2020"
            />
            <ImageSlider
                noArt="true"
                swiperNav="true"
                images={[
                    {
                        image: projectImage,
                        alt: 'Project Image',
                    },
                    {
                        image: projectImage,
                        alt: 'Project Image',
                    },
                    {
                        image: projectImage,
                        alt: 'Project Image',
                    },
                ]}
            />

            {ProjectPost.content}
            <Testimonial noArt={true} />
        </>
    );
}

export default ProjectDetailed;
