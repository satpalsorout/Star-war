import React from 'react';
import { planetService } from '../_services';
import 'bootstrap/dist/css/bootstrap.min.css';
import Planet from './Planet'
 class Home extends React.Component {
    constructor(props) {
        super(props);
       this.state={
           planets:[]
       }
       this.allPlanets=[]
       planetService.getAllPlanets().then(respose=>
        this.allPlanets= respose.data.results
         )
    }
    componentDidMount()
    {
      var self=this;
      planetService.getAllPlanets().then(respose=>
       self.setState({
           planets: respose.data.results
       })
        )
      
    }
    onFilterTextChange(e)
    {
       if( e.target.value!== "")
       {
           this.setState({
               planets:this.getFilteredData(e.target.value,this.allPlanets)
           })
       }
       else{
           this.setState({
               planets:this.allPlanets
           })
       }
    }
     getFilteredData = (searchText, data) => {
        if (searchText !== "") {
          return data.filter(item => {
            return this.filterLogic(item.name, searchText);
          });
        } else {
          return data;
        }
      }
       filterLogic = (obj, textsearch) => {
        let isFound = false;
        Object.keys(obj).forEach((key) => {
          if (obj[key].toString().toLowerCase().indexOf(textsearch.toLowerCase()) !== -1) {
            isFound = true;
          }
        });
        return isFound;
      };
    render() {
        return (
            <div>
                <input 
                  className="form-control my-0 mt-sm py-1 red-border"
                  type="text" 
                  placeholder="Search"
                  aria-label="Search"
                        onChange={this.onFilterTextChange.bind(this)} />
            
            <div class="row mt-5">
                    
                { 
                    this.state.planets.map(function(planet) {
                    return (<div class="col-md-4 mb-3"><Planet planet={planet} /></div>)
                })
                }
            </div>
            </div>
        )
    }
}

export default Home