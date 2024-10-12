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
                        <td>Challenge</td>
                        <td> Solution</td>
                    </tr>
                    <tr>
                        <td>Paper B</td>
                        <td>Challenge</td>
                        <td> Solution</td>
                    </tr>
                    <tr>
                        <td>Paper C</td>
                        <td>Challenge</td>
                        <td> Solution</td>
                    </tr>
                </tbody>
            </table>
        </section>
    );
}

export default Taxonomy;
