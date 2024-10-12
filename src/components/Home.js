import React from 'react';
import '../App.css';

function Home() {
    const challenges = [
        {
            title: 'Challenge 1',
            description: 'Description'
        },
        {
            title: 'Challenge 2',
            description: 'Description'
        },
        {
            title: 'Challenge 3',
            description: 'Description'
        },
        {
            title: 'Challenge 4',
            description: 'Description'
        },

    ];

    return (
        <section id="home" className="section">
            <div className="hero">
                <h1 className="main-title">Security for Serverless Computing</h1>
                <p>Overview of the topic will be written here. This section will discuss key points related to security challenges and solutions in serverless computing.</p>
            </div>
            <h2 className='h2'>Key Challenges</h2>
            <div className="challenges-container">
                {challenges.map((challenge, index) => (
                    <div key={index} className="challenge-card">
                        <div className="card-inner">
                            <div className="card-front">
                                <h2>{challenge.title}</h2>
                            </div>
                            <div className="card-back">
                                <p>{challenge.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <h2 className='recent-h2'> Recent Trends</h2>
            <p className="recent-trends">In this section, we will explore the latest advancements in securing serverless applications, highlighting trends such as frameworks for defending against threats like code injection and privilege escalation.</p>
        </section>
    );
}

export default Home;
