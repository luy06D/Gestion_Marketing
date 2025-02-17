import { useEffect, useState } from "react";

const useProjectsDetails = (isIdProject) => {
    const [projectData , setProjectData] = useState({});

    const fetchProjectsDetails = async () =>{

        try {

            const response = await fetch(`http://localhost:3000/api/v1/proyecto/${isIdProject}`)
            const data = await response.json();
            setProjectData(data[0]);


        } catch (error) {
            console.log(error)
            
        }
    };

    useEffect(() => {
        if(!isIdProject){
            return;
        }
        fetchProjectsDetails();
    }, [isIdProject]);

    return projectData;

    
};

export default useProjectsDetails;