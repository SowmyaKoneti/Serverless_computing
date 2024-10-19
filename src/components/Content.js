import React from 'react';
import '../App.css';
function Content() {

    return (
        <section id="content" className="content-section">
            <h2 className='taxh2'>Findings</h2>
            <ul>
                <li>Scalability and cost benefits, but introduces latency and security challenges.</li>
                <li>Identifies insufficient security controls within serverless environments; recommends implementing encryption, IAM, and secure execution environments to mitigate risks.</li>
                <li>Highlights the necessity for real-time threat detection mechanisms to effectively mitigate risks like DoS attacks and data leakage between tenants.</li>
                <li>Demonstrates that serverless computing provides significant cost savings and operational management ease, but also reveals challenges such as cold start latency and potential vendor lock-in.</li>
                <li>Shows that the proposed architecture can provide substantial scalability and performance enhancements, but it also adds complexity to resource management and deployment processes.</li>
                <li>Serverless computing enhances resource allocation efficiency, reducing over-provisioning costs in traditional cloud models.</li>
                <li>Serverless computing can offer high scalability and cost-efficiency, but key challenges such as cold start issues, resource constraints, and security vulnerabilities need further research and optimization.</li>
                <li>There is a growing need for better monitoring tools to track security incidents in serverless environments.</li>
                <li>The use of Attack-Defense Tree methodologies enhances security planning by providing a structured approach to identify vulnerabilities.</li>
            </ul>
        </section>

    );
}

export default Content;
