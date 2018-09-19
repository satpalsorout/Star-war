import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export default class Planet  extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            resident:[]
        }
        this.residents=[]
    }
    showResident(e)
    {
        const axios = require('axios');
        var self=this
        var tempres=[]
        this.props.planet.residents.forEach(function(item){
            axios.get(item).then(response=>
                {
                tempres.push(response.data.name) 
                self.setState({
                    resident:tempres
                })
                }
            )
          });
    }
    render() {
        if(this.state.resident.length>0)
        {
            return(<div class="card text-center">
            <div class="card-body">
                <h5 class="card-title">{this.props.planet.name}</h5>
                <p class="card-text">{this.props.planet.population}</p>
                <ul>
                {
                    
                    this.state.resident.map((item) => {
                        return(<li>{item}</li>)
                    })
                
                }
                </ul>
            </div>
            <div class="card-footer text-muted">
            {this.props.planet.terrain}
             </div>
        </div>)
        }
        else
        {
        return (
          
                    <div class="card text-center">
                        <div class="card-body">
                            <h5 class="card-title">{this.props.planet.name}</h5>
                            <p class="card-text">{this.props.planet.population}</p>
                            <button class="btn btn-success" onClick={this.showResident.bind(this)}>Show residents</button>
                        </div>
                        <div class="card-footer text-muted">
                        {this.props.planet.terrain}
                         </div>
                    </div>

          
        )
        }
    }
}
