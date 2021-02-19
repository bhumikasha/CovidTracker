import React, { Component } from 'react';
import './covidTracker.styles.css';

class CovidTracker extends Component {
    constructor(){
        super();
        this.state = {
            users: [],
            search: ""
        }
    }

    componentDidMount() {
        fetch('https://corona.lmao.ninja/v2/countries')
        .then(response => response.json())
        .then(data => this.setState({ users: data }))
    }

    handleInput = (event) => {
        let x = event.target.value;
        this.setState({search:x})
    }

    handleClick = (e) => {
        e.preventDefault();
        let filteredValues = this.state.users.filter(a=>{ return this.state.search === a.country});
        console.log(filteredValues);
        filteredValues.map(a=>{return this.setState({search: console.log(a.country)})});
    }

    render() {
        return(
            <div><br/>
            <input className="LeftAlign" onChange={this.handleInput}></input>
            <button onClick={this.handleClick}>Search</button><br/><br/>
            <table>
                <tr>
                    <th>Country</th>
                    <th>Total Cases</th>
                    <th>Active Cases</th>
                    <th>Deaths</th>
                </tr>
                {this.state.users.map(a=>{return <tbody id="customers">
                <tr>
                    <td>{a.country}</td>
                    <td>{a.cases}</td>
                    <td>{a.activePerOneMillion}</td>
                    <td>{a.deaths}</td>
                </tr>
                </tbody>
            })};
            </table>
            </div>
        )
    }
}

export default CovidTracker;