import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import Hero from '../components/Hero';
import ListImages from '../components/ListImages';
import Paginador from '../components/Paginador';

import { BrowserRouter as Router } from 'react-router-dom';

class Home extends Component {
    state = { 
        filtro: '',
        images: [],
        totalHits: 0
     }

     onFilterChange = (filter) => {
         this.setState({ filtro: filter } ,() => {
            this.getImagenes(this.state.filtro);
         });
     }

     getImagenes = (filter) => {
         fetch(`https://pixabay.com/api/?key=13143662-2efe357eece6e90293626eeb9&q=${filter}&image_type=photo&orientation=horizontal`).then(response => {
             return response.json();
         }).then(data => {
             this.setState({ images: data.hits, totalHits: data.totalHits });
         });
     }

    render() { 
        return ( 
            <div className="container">
                <NavBar />
                <Hero 
                    onFilterChange={this.onFilterChange}
                    totalHits={this.state.totalHits}
                />
                <ListImages
                    images={this.state.images}
                />
                <Paginador />
            </div>
         );
    }
}
 
export default Home;