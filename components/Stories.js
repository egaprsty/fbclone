import React from 'react';
import StoryCard from './StoryCard';

const stories = [
    {
        name: "LOL",
        src: "/mail.jpg",
        profile: "/mail.jpg",
    },
    {
        name: "LOL",
        src: "/arya.jpg",
        profile: "/arya.jpg",
    },
    {
        name: "LOL",
        src: "/ga.jpg",
        profile: "/ga.jpg",
    },
    {
        name: "LOL",
        src: "/kemal.jpg",
        profile: "/kemal.jpg",
    },
]

function Stories() {
    return(
        <div className="flex justify-center space-x-3 mx-auto">
            {stories.map((story) => (
                <StoryCard 
                    key={story.src}
                    name={story.name}
                    src={story.src}
                    profile={story.profile}
                />
        ))}
        </div>
    )
}

export default Stories;