import React from 'react';

const Project = (props) => {
    console.log(props)
return (
    <div className="card">
          <div className="image">
                  <a href={props.url}>
                    <img src={props.img} alt={props.title}></img>
                  </a>
                </div>
                <div className="title">{props.title}</div>
    </div>
)
}

export default Project;