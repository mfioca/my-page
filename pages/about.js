import React, { Component } from 'react'
import Layout from '../components/layout'
import Link from 'next/link'


class About extends Component {
    render() {
        return (
            <Layout>
                <h1>This is my About Page Idiot!</h1>
                <table>
                    <tr>
                        <th>Company</th>
                        <th>Contact</th>
                        <th>Country</th>
                    </tr>
                    <tr>
                        <td>Alfreds Futterkiste</td>
                        <td>Maria Anders</td>
                        <td>Germany</td>
                    </tr>
                    <tr>
                        <td>Centro commercial Moctezuma</td>
                     <td>Francisco Change</td>
                        <td>Mexico</td>
                    </tr>
                </table>
                <style jsx>{`
                    table {
                        font-family: ariel, sansserif;
                        border-collapse: collaps;
                        width: 100%;
                    }

                    td, th {
                        border: 1px solid #dddddd;
                        text-align: left;
                        padding: 8px;
                    }

                    tr:nth-child(even) {
                        background-color: #dddddd;
                    }
                `}
                </style>
            </Layout>
        )
    }
}

export default About;