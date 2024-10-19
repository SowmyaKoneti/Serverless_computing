import React from 'react';
import './Taxonomy.css';  // Assuming you create a CSS file for styling

function Taxonomy() {
    return (
        <section id="taxonomy" className="tax-section">
            <h2 className='taxh2'>Taxonomy</h2>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Paper Name</th>
                            <th>Problem </th>
                            <th>Solution </th>
                            <th>Protocol Used</th>
                            <th> Methodology</th>
                            <th>Applications</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><strong>Survey on Serverless Computing</strong></td>
                            <td>Explores the current state of serverless computing technologies, identifying benefits, limitations, and adoption trends.</td>
                            <td>Conducts a comprehensive survey of serverless models, benefits, and challenges.</td>
                            <td>Function-as-a-Service (FaaS) and Backend-as-a-Service (BaaS).</td>
                            <td>Performs a comparative analysis of performance, scalability, and cost-effectiveness.</td>
                            <td>Applicable to cloud-based services in e-commerce, finance, and various industries.</td>
                            {/* <td>Scalability and cost benefits, but introduces latency and security challenges.</td> */}
                        </tr>
                        <tr>
                            <td><strong>Serverless Computing: A Security Perspective</strong></td>
                            <td>Investigates the critical security challenges faced in serverless platforms and their inherent risks.</td>
                            <td>Proposes a robust multi-layered security framework designed specifically for addressing serverless platform vulnerabilities.</td>
                            <td>Primarily focuses on securing Function-as-a-Service (FaaS) environments.</td>
                            <td>Conducts a thorough vulnerability analysis and a detailed comparison of existing security controls.</td>
                            <td>Targets cloud services that require heightened security measures, particularly in sectors like finance and healthcare.</td>
                            {/* <td>Identifies insufficient security controls within serverless environments; recommends implementing encryption, IAM, and secure execution environments to mitigate risks.</td> */}
                        </tr>
                        <tr>
                            <td><strong>Securing Serverless Computing: Challenges, Solutions, and Opportunities</strong></td>
                            <td>Examines the unique security risks associated with serverless computing in dynamic, scalable environments.</td>
                            <td>Proposes advanced techniques for privacy preservation and effective attack detection to address security concerns.</td>
                            <td>Focuses on both Function-as-a-Service (FaaS) and Backend-as-a-Service (BaaS) security mechanisms.</td>
                            <td>Conducts a comprehensive risk assessment and evaluates the effectiveness of various performance-security trade-offs.</td>
                            <td>Specifically applicable to high-security sectors such as finance, healthcare, and government services that are adopting serverless architectures.</td>
                            {/* <td>Highlights the necessity for real-time threat detection mechanisms to effectively mitigate risks like DoS attacks and data leakage between tenants.</td> */}
                        </tr>
                        <tr>
                            <td><strong>Serverless Computing: Advantages, Limitations, and Use Cases</strong></td>
                            <td>Analyzes the trade-offs between the advantages and limitations of adopting serverless computing models.</td>
                            <td>Provides detailed case studies that analyze the performance and outcomes of various serverless applications.</td>
                            <td>Primarily focuses on Function-as-a-Service (FaaS) and its operational impacts.</td>
                            <td>Conducts performance and cost analysis based on real-world examples to highlight practical implications.</td>
                            <td>Applies to a wide range of cloud applications, including web applications, Internet of Things (IoT) services, and event-driven workflows.</td>
                            {/* <td>Demonstrates that serverless computing provides significant cost savings and operational management ease, but also reveals challenges such as cold start latency and potential vendor lock-in.</td> */}
                        </tr>
                        <tr>
                            <td><strong>Innovative Approaches to Serverless Computing: A Novel Architecture Perspective</strong></td>
                            <td>Addresses significant scalability and performance issues prevalent in traditional serverless architectures.</td>
                            <td>Proposes an innovative new architecture specifically designed to enhance scalability and reduce latency for serverless applications.</td>
                            <td>Primarily focuses on Function-as-a-Service (FaaS) while proposing improvements to current serverless designs.</td>
                            <td>Utilizes performance benchmarks and simulation models to effectively demonstrate improvements offered by the new architecture.</td>
                            <td>Specifically targeted at high-performance cloud applications requiring low-latency and high-throughput capabilities.</td>
                            {/* <td>Shows that the proposed architecture can provide substantial scalability and performance enhancements, but it also adds complexity to resource management and deployment processes.</td> */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Taxonomy;
