const axios = require('axios');
axios.defaults.crossDomain = true;
export const userService = {
    login,
    logout
};

function login(username, password) {
    var url = "https://swapi.co/api/people/";
        return axios.get(url)
       // .then(handleResponse)
        .then(response => {
            debugger;
            var user=response.data.results.find(x => x.name === username 
                &&  x.birth_year === password)
           
            if (user!=null) {
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}





function handleResponse(response) {
    return response.then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
               // location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}