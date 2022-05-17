import React from 'react';
import './style.css';

export default function Right(props) {
  return (
    <div class="col-md-6">
      <div className="container">
        {props.image.length > 1 ? (
          <>
            <img class="img img-fluid" src={props.image} />
            <p>{props.title}</p>
          </>
        ) : (
          <p>No image loaded</p>
        )}
      </div>
    </div>
  );
}
