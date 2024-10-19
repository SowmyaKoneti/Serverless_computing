import React from 'react';
import '../App.css';

function Home() {
    const challenges = [
        {
            title: 'Data Privacy',
            description: 'Implement automated threat detection systems to monitor and manage security risks dynamically.'
        },
        {
            title: 'Function Isolation',
            description: 'Employ technologies like MicroVMs and Unikernels for better function isolation in FaaS applications.'
        },
        {
            title: 'Securing Function Chaining',
            description: 'Utilize Attack Tree and Attack-Defense Tree methodologies, combined with a Relative Risk Matrix, to quantify and analyze security risks associated with function chaining.'
        },
        {
            title: 'Cold Starts',
            description: 'Use sandbox pooling and lightweight VM technologies like Firecracker to reduce cold start delays.'
        },

    ];

    return (
        <section id="home" className="section">
            <div className="hero">
                <h1 className="main-title">Security for Serverless Computing</h1>
                <p>
                    Increased usage of serverless computing came up with several security constraints that must be put into consideration. These include function isolation, function data privacy, and secure chaining of functions. Function isolation is important as no one function has direct access to another and thereby pinpoints a compromised system.
                </p>
                <p>
                    Another major issue is data privacy, especially for a facility that extends into a multi-tenant area where users’ information might become vulnerable for sharing.
                    Secure function chaining in which several functions are invoked consecutively have also been identified to pose serious problems such as code injection and privilege escalation. These threats mostly get access to vulnerabilities within the serverless frameworks, which in the end results in unauthorized access or even data breaches.
                </p>
                <p>
                    To overcome these issues, strong cybersecurity should be provided by regular IAM practices, security audits, and the need for monitoring tools. By paying attention to these aspects, organizations will be in a position to improve the security of serverless applications while minimizing the risks posed by this more popular computing model.
                </p>
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

            {/* <h2 className='recent-h2'> Recent Trends</h2>
            <p className="recent-trends">In this section, we will explore the latest advancements in securing serverless applications, highlighting trends such as frameworks for defending against threats like code injection and privilege escalation.</p> */}
        </section>
    );
}

export default Home;
