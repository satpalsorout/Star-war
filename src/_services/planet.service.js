const axios = require('axios');
axios.defaults.crossDomain = true;
export const planetService = {
    getAllPlanets
};
function getAllPlanets(){
    var url = "https://swapi.co/api/planets/";
    return axios.get(url)
}