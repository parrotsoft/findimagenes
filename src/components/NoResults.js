import React, { Component } from 'react';

class NoResults extends Component {
    render() { 
        return ( 
            <div class="alert alert-danger" role="alert">
                Sin resultados para la busqueda..!
            </div>
         );
    }
}
 
export default NoResults;