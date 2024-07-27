import { apiclient } from "./apiClient";

// Fetch all projects
const fetchProjects = async () => {
  try {
    const response = await apiclient.get("/projects");
    return response.data;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};

// Fetch all skills
const fetchSkills = async () => {
  try {
    const response = await apiclient.get("/skills");
    return response.data;
  } catch (error) {
    console.error("Error fetching skills:", error);
    throw error;
  }
};

// Fetch all recommendations
const fetchRecommendations = async () => {
  try {
    const response = await apiclient.get("/recommendations");
    return response.data;
  } catch (error) {
    console.error("Error fetching recommendations:", error);
    throw error;
  }
};

// Post a new skill
const postSkill = async (skill) => {
  try {
    const response = await apiclient.post("/skills", skill);
    return response.data;
  } catch (error) {
    console.error("Error posting skill:", error);
    throw error;
  }
};

// Post a new User
const postUser = async (user) => {
  try {
    const response = await apiclient.post("/user", user);
    return response.data;
  } catch (error) {
    console.error("Error posting skill:", error);
    throw error;
  }
};

export {
  fetchProjects,
  fetchSkills,
  fetchRecommendations,
  postSkill,
  postUser,
};
