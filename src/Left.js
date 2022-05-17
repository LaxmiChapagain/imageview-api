import React from 'react';
import './style.css';

export default function Left(props) {
  return (
    <div class="col-md-6">
      <div class="row">
        {props.images.map(function (value, index) {
          return (
            <div class="col-4" key={index}>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  props.onClick(value.url, value.title);
                }}
              >
                <img class="thumbnail img img-fluid" src={value.thumbnailUrl} />
                <p class="title">{value.title}</p>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
