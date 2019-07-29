import React, { Component } from 'react';

class Paginador extends Component {
    state = {  }

    handleNavigate = (event) => {
        console.log(event);
    }

    render() { 
        return ( 
            <div className="row paginador">
                <div className="col-6">
                    <button type="button"
                    onClick={this.handleNavigate}
                     className="btn btn-primary btn-lg btn-block">Anterior</button>
                </div>
                <div className="col-6">
                    <button type="button" 
                    onClick={this.handleNavigate}
                    className="btn btn-secondary btn-lg btn-block">Siguiente</button>
                </div>
            </div>
         );
    }
}
 
export default Paginador;