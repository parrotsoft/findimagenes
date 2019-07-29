import React, { Component } from 'react';
import Images from '../components/Images';

class ListImages extends Component {

    getImages = () => {
        const imagenes = this.props.images;
        if(imagenes.length === 0) return null;
        
        return (
            <React.Fragment>
                <div className="col-12 p-5 row">
                    { imagenes.map( imagen => (
                        <Images
                            key={imagen.id}
                            imagen={imagen}
                        />
                     ) ) }
                </div>
            </React.Fragment>
        )
        
    }

    render() { 
        return (
            <React.Fragment>
                { this.getImages() }
            </React.Fragment>
          );
    }
}
 
export default ListImages;