const API_URL = "http://localhost:4000/projects";

const fetchAllProjects = async () => {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch projects");
        const data = await response.json();
        return { data, error: false, errorMessage: null };
    } catch (error) {
        return { data: null, error: true, errorMessage: error.message };
    }
};

const fetchProjectById = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error(`Failed to fetch project with ID ${id}`);
        const data = await response.json();
        return { data, error: false, errorMessage: null };
    } catch (error) {
        return { data: null, error: true, errorMessage: error.message };
    }
};

const createProject = async (project) => {
    try {
        const response = await fetch(API_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(project),
        });
        if (!response.ok) throw new Error("Failed to create project");
        const data = await response.json();
        return { data, error: false, errorMessage: null };
    } catch (error) {
        return { data: null, error: true, errorMessage: error.message };
    }
};

const updateProject = async (id, updatedProject) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedProject),
        });
        if (!response.ok) throw new Error(`Failed to update project with ID ${id}`);
        const data = await response.json();
        return { data, error: false, errorMessage: null };
    } catch (error) {
        return { data: null, error: true, errorMessage: error.message };
    }
};


export {
    fetchAllProjects,
    fetchProjectById,
    createProject,
    updateProject
};
