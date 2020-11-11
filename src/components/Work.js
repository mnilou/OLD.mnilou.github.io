import React, {Component} from 'react';
import projects from '../projects.json';
import Project from './Project';

class Work extends Component {
  state = {
    projects,
  };

  //   componentDidMount() {
  //     console.log(projects);
  //   }
  render() {
    return (
      <div className="work_container">
        <h1>Projects.</h1>
        <div className="projects_container">
          {this.state.projects.map((project) => {
            return (
              <Project
                key={project.id}
                id={project.id}
                img={project.img}
                url={project.url}
                title={project.title}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Work;
