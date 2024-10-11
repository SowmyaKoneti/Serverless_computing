import React from 'react';

function Taxonomy() {
    return (
        <section id="taxonomy" className="tax-section">
            <h2 className='taxh2'>Taxonomy</h2>
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

export default Taxonomy;
