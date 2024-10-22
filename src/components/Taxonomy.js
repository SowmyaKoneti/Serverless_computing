import React from 'react';

function Taxonomy() {
    return (
        <section id="taxonomy" className="tax-section">
            <h2 className='taxh2'>Taxonomy</h2>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Topic</th>
                            <th>Papers</th>
                            <th>Key Papers</th>
                            <th>Problem Domain</th>
                            <th>Solution Approach</th>
                            <th>Methodology</th>
                            <th>Impact</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Serverless Computing Surveys & Overviews</strong></td>
                            <td>1, 13, 19, 5</td>
                            <td>Survey on Serverless Computing, The Serverless Computing Survey: A Technical Primer for Design</td>
                            <td>General overview of serverless computing, architecture trends, and challenges</td>
                            <td>Provide a survey of existing architectures, challenges, and trends</td>
                            <td>Systematic review of literature, case study analysis</td>
                            <td>Comprehensive understanding of the current landscape of serverless computing; establishes baseline knowledge for further research</td>
                        </tr>
                        <tr>
                            <td><strong>Security in Serverless Computing</strong></td>
                            <td>2, 3, 14, 15, 22, 12</td>
                            <td>Serverless Computing: A Security Perspective, Securing Serverless Computing: Challenges, Solutions, and Opportunities, Secure Serverless Computing Using Dynamic Information Flow Control</td>
                            <td>Security challenges in serverless environments (e.g., network, privacy)</td>
                            <td>Propose frameworks and solutions to secure serverless architectures</td>
                            <td>Propose and analyze security frameworks, evaluate privacy mechanisms</td>
                            <td>Contributes to securing serverless platforms, improves privacy, and establishes security frameworks for practical implementation</td>
                        </tr>
                        <tr>
                            <td><strong>Serverless Computing Use Cases</strong></td>
                            <td>4, 11, 18</td>
                            <td>Serverless Computing: Advantages, Limitations, and Use Cases, A Review of Serverless Use Cases and their Characteristics</td>
                            <td>Practical use cases in serverless computing, including security</td>
                            <td>Highlight and analyze real-world implementations</td>
                            <td>Case study analysis of existing use cases</td>
                            <td>Helps enterprises and developers adopt serverless computing with a focus on practical, secure use cases</td>
                        </tr>
                        <tr>
                            <td><strong>Serverless Computing for IoT and Specific Applications</strong></td>
                            <td>9, 21, 10</td>
                            <td>Serverless Computing for Internet of Things: A Systematic Literature Review, A Transparent Auto-Scaling Cache for Serverless Applications</td>
                            <td>Serverless computing applications in IoT, auto-scaling</td>
                            <td>Propose architectures for auto-scaling and securing IoT applications</td>
                            <td>Use of simulation environments, benchmarking tools</td>
                            <td>Enhances scalability and security in IoT environments, making serverless more practical for specific applications</td>
                        </tr>
                        <tr>
                            <td><strong>Serverless Architecture & Performance Optimization</strong></td>
                            <td>16, 20, 17</td>
                            <td>Faster and Cheaper Serverless Computing on Harvested Resources</td>
                            <td>Optimizing serverless architectures for performance and cost</td>
                            <td>Propose performance enhancements (e.g., caching, resource management)</td>
                            <td>Experimental evaluations, performance benchmarking</td>
                            <td>Advances in performance and cost-efficiency in serverless computing, offering pathways for more sustainable, efficient architectures</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Taxonomy;
