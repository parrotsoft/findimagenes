import React from 'react';

const Images = function(prop) {

    const { previewURL, largeImageURL, tags, views, downloads } = prop.imagen;
    return (
        <div className="card col-3">
            <img src={ previewURL } className="card-img-top" alt={ tags } />
            <div className="card-body">
                <p className="card-text">
                    <i className="fa fa-eye" aria-hidden="true"></i> { views } - { downloads } <i className="fa fa-cloud-download" aria-hidden="true"></i>
                </p>
                <a href={ largeImageURL } target="_blanck" className="btn btn-primary">Ver</a>
            </div>
        </div>
    )
}

export default Images;