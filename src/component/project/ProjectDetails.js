import React from "react";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title -{id}</span>
          <p>this is just a test befor the real app</p>
        </div>
        <div className="card-action gret lighten-4 grey-text">
          <div>posted by me during covid-19</div>
          <div>22 april 2020</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
