import React from 'react';
import '../App.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

// Update the image paths to point to your local images
const teamMembers = [
    { name: 'Vivek', bio: 'Masters degree in Computer Science from Saint Louis University', role: 'Role: website developer', contribution: 'worked on both website and survey paper', img: require('../images/vivek.png'), linkedin: 'https://www.linkedin.com/in/sai-vivek-kancharla/' },
    { name: 'Sowjanya', bio: 'Masters degree in Computer Science from Saint Louis University', role: 'Role: content validator', contribution: 'worked on both website and survey paper', img: require('../images/Sowjanya.png'), linkedin: 'https://www.linkedin.com/in/kavuri-sowjanya-chowdary/' },
    { name: 'Pravarsha', bio: 'Masters degree in Computer Science from Saint Louis University', role: 'Role: reporting and delivery lead', contribution: 'worked on both website and survey paper', img: require('../images/Pravarsha.png'), linkedin: 'https://www.linkedin.com/in/pravarsha-erodula-a86657167/' },
    { name: 'Sowmya', bio: 'Masters degree in Computer Science from Saint Louis University', role: 'Role: website developer', contribution: 'worked on both website and survey paper', img: require('../images/Sowmya.png'), linkedin: 'https://www.linkedin.com/in/sowmya-koneti-138113152/' },
    { name: 'Sai Kumar', bio: 'Masters degree in Computer Science from Saint Louis University', role: 'Role: content validator', contribution: 'worked on both website and survey paper', img: require('../images/SaiKumar.png'), linkedin: 'https://www.linkedin.com/in/saikumarkaluvakolu/' }
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
                        <p className="team-description">{member.role}</p>
                        <p className="team-description">{member.contribution}</p>
                        <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkedin-link"
                        >
                            <LinkedInIcon style={{ fontSize: 30, color: '#0077b5' }} />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Team;
