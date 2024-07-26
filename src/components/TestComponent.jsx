// ExampleComponent.js
import React from "react";
import useFetch from "../hooks/useFetch";

const ExampleComponent = () => {
  const {
    data: projects,
    loading: loadingProjects,
    error: errorProjects,
  } = useFetch("projects");
  const {
    data: skills,
    loading: loadingSkills,
    error: errorSkills,
  } = useFetch("skills");
  const {
    data: recommendations,
    loading: loadingRecommendations,
    error: errorRecommendations,
  } = useFetch("recommendations");

  if (loadingProjects || loadingSkills || loadingRecommendations) {
    return <div>Loading...</div>;
  }

  if (errorProjects || errorSkills || errorRecommendations) {
    return (
      <div>
        Error:{" "}
        {errorProjects?.message ||
          errorSkills?.message ||
          errorRecommendations?.message}
      </div>
    );
  }
  console.log(projects);
  console.log(skills);
  console.log(recommendations);
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>{project.name}</li>
        ))}
      </ul>

      <h1>Skills</h1>
      <ul>
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>

      <h1>Recommendations</h1>
      <ul>
        {recommendations.map((recommendation) => (
          <li key={recommendation.id}>{recommendation.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExampleComponent;
