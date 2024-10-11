import React from 'react';
import '../App.css';

function Home() {
    const challenges = [
        {
            title: 'Function Isolation',
            description: 'Ensuring that serverless functions operate in isolated environments to prevent unintended interactions.'
        },
        {
            title: 'Data Privacy',
            description: 'Protecting sensitive data throughout the serverless computing lifecycle to comply with regulations.'
        },
        {
            title: 'Secure Function Chaining',
            description: 'Implementing secure communication and data transfer between chained serverless functions.'
        },
        {
            title: 'Data Privacy',
            description: 'Protecting sensitive data throughout the serverless computing lifecycle to comply with regulations.'
        },

    ];

    return (
        <section id="home" className="section">
            <div className="hero">
                <h1 className="main-title">Security for Serverless Computing</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
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
            <p className="recent-trends">Recent advancements include new frameworks designed to protect serverless applications from threats like code injection and privilege escalation.</p>
        </section>
    );
}

export default Home;
