import { useEffect, useState } from "react"


const useFetchProject = () => {
    const [project, setProject] = useState([])

    const fetchProjects = async () => {
        try {
            const res = await fetch('http://localhost:3000/api/v1/proyecto');
            const data = await res.json();
            const arrayData = Array.isArray(data) ? data : [data];
            setProject(arrayData);

        } catch (err) {
            console.error('Error fetching users: ', err); 
        }
    };

    useEffect(() => {
        fetchProjects();

    }, []);

    return {project, fetchProjects};

};

export default useFetchProject;