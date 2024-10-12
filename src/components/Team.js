import React from 'react';
import '../App.css';

// Update the image paths to point to your local images
const teamMembers = [
    { name: 'Vivek', bio: 'Masters degree in Computer Science from Saint Louis University', img: require('../images/vivek.png'), linkedin: '#' },
    { name: 'Sowjanya', bio: 'Masters degree in Computer Science from Saint Louis University', img: require('../images/Sowjanya.png'), linkedin: '#' },
    { name: 'Pravarsha', bio: 'Masters degree in Computer Science from Saint Louis University', img: require('../images/Pravarsha.png'), linkedin: '#' },
    { name: 'Sowmya', bio: 'Masters degree in Computer Science from Saint Louis University', img: require('../images/Sowmya.png'), linkedin: '#' },
    { name: 'Sai Kumar', bio: 'Masters degree in Computer Science from Saint Louis University', img: require('../images/SaiKumar.png'), linkedin: '#' }
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
