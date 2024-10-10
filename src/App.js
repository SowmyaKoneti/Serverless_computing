import React from 'react';
import './App.css';

// Simple navigation
function NavBar() {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#content">Findings</a></li>
        <li><a href="#taxonomy">Taxonomy</a></li>
        <li><a href="#team">Team</a></li>
      </ul>
    </nav>
  );
}

// Home Section
function Home() {
  return (
    <section id="home" className="section">
      <h1>Security for Serverless Computing</h1>
      <p>This survey focuses on unique security challenges in serverless computing architectures, such as function isolation, data privacy, and secure function chaining.</p>
      <h2>Key Challenges</h2>
      <ul>
        <li>Function Isolation</li>
        <li>Data Privacy</li>
        <li>Secure Function Chaining</li>
      </ul>
      <h2>Recent Trends</h2>
      <p>Recent advancements include new frameworks designed to protect serverless applications from threats like code injection and privilege escalation.</p>
      <h2>Future Research Directions</h2>
      <p>Future work focuses on improving the granularity of access control and auditing in serverless environments.</p>
    </section>
  );
}

// Content Section
function Content() {
  return (
    <section id="content" className="section">
      <h2>Survey Findings</h2>
      <p>The survey discusses several security challenges and solutions in serverless computing, including:</p>
      <ul>
        <li>Problem Domains: Secure function chaining, data integrity, and API gateways.</li>
        <li>Solutions: Use of encryption techniques, role-based access control, and monitoring tools.</li>
        <li>Methodologies: Case studies of popular serverless providers like AWS Lambda, Azure Functions, and Google Cloud Functions.</li>
      </ul>
    </section>
  );
}

// Taxonomy Section
function Taxonomy() {
  return (
    <section id="taxonomy" className="section">
      <h2>Taxonomy of Reviewed Papers</h2>
      <table>
        <thead>
          <tr>
            <th>Paper Title</th>
            <th>Security Challenge</th>
            <th>Proposed Solution</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Paper A</td>
            <td>Function Isolation</td>
            <td>Container Sandboxing</td>
          </tr>
          <tr>
            <td>Paper B</td>
            <td>Data Privacy</td>
            <td>Encryption & Auditing</td>
          </tr>
          <tr>
            <td>Paper C</td>
            <td>Privilege Escalation</td>
            <td>RBAC Policies</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

// Team Section
function Team() {
  const teamMembers = [
    { name: 'Vivek', bio: 'Security researcher focused on serverless computing.', img: 'https://via.placeholder.com/150' },
    { name: 'Sowjanya', bio: 'Developer experienced in cloud security and serverless functions.', img: 'https://via.placeholder.com/150' },
    { name: 'Sanjeeva', bio: 'Specializes in data privacy and encryption.', img: 'https://via.placeholder.com/150' },
    { name: 'Sowmya', bio: 'Expert in serverless function optimization and performance.', img: 'https://via.placeholder.com/150' },
    { name: 'Sai Kumar', bio: 'Researcher focusing on secure serverless deployments.', img: 'https://via.placeholder.com/150' }
  
  ];

  return (
    <section id="team" className="section">
      <h2>Our Team</h2>
      <div className="team-grid">
        {teamMembers.map(member => (
          <div key={member.name} className="team-member">
            <img src={member.img} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// Main App
function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Content />
      <Taxonomy />
      <Team />
    </div>
  );
}

export default App;
