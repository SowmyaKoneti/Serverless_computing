import React from 'react';
import '../App.css';

const teamMembers = [
    { name: 'Vivek', bio: 'Security researcher focused on serverless computing.', img: 'https://via.placeholder.com/150', linkedin: '#' },
    { name: 'Sowjanya', bio: 'Developer experienced in cloud security and serverless functions.', img: 'https://via.placeholder.com/150', linkedin: '#' },
    { name: 'Pravarsha', bio: 'Specializes in data privacy and encryption.', img: 'https://via.placeholder.com/150', linkedin: '#' },
    { name: 'Sowmya', bio: 'Expert in serverless function optimization and performance.', img: 'https://via.placeholder.com/150', linkedin: '#' },
    { name: 'Sai Kumar', bio: 'Researcher focusing on secure serverless deployments.', img: 'https://via.placeholder.com/150', linkedin: '#' }
];

function Team() {
    return (
        <section id="team" className="team-section">
            <h2 className='teamh2'>Meet the Team</h2>
            <div className="team-grid">
                {teamMembers.map((member) => (
                    <div key={member.name} className="team-member">
                        <img src={member.img} alt={member.name} />
                        <h3>{member.name}</h3>
                        <p className="team-description">{member.bio}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;
