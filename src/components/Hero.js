import React, { Component } from 'react';

class Hero extends Component {
    state = { 
        filtro: ''
     }

     handleOnChange = (event) => {
         this.setState({ filtro: event.target.value });
     }

     handleOnSubmit = (e) => {
         e.preventDefault();
         this.props.onFilterChange(this.state.filtro);
     }

    render() { 
        return ( 
            <div className="jumbotron">
                <h1 className="display-4">Buscador de Imagenes!</h1>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="row">
                        <div className="col-10">
                                <input type="text" className="form-control"
                                placeholder="Escriba el nombre a buscar... Ejemplo: Cafe"
                                value={this.state.filtro} onChange={this.handleOnChange} />
                            </div>
                        <div className="col-2">
                            <button type="submit" className="btn btn-warning btn-block">Buscar...</button>
                        </div>
                    </div>
                </form>
                <div className="row totalHits">
                    <div className="col">
                        <h5>Resultados : <span className="badge badge-primary">{this.props.totalHits}</span></h5>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default Hero;