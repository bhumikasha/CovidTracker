import React, { Component } from 'react';
import './covidTracker.styles.css';

class CovidTracker extends Component {
    constructor(){
        super();
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        fetch('https://corona.lmao.ninja/v2/countries')
        .then(response => response.json())
        .then(data => this.setState({ users: data }))
    }

    render() {
        return(
            <div>
            <table>
                <tr>
                    <th>Number of Cases</th>
                    <th>Country</th>
                </tr>
                {this.state.users.map(a=>{return <tbody id="customers">
                <tr>
                    <td>{a.cases}</td>
                    <td>{a.country}</td>
                </tr>
                </tbody>
            })};
            </table>
            </div>
        )
    }
}

export default CovidTracker;