import { RepoitoryItem } from "./ReposiroryItem";

import '../styles/repositories.scss';
import { useState, useEffect } from "react";

interface Repository {
    name: string;
    id?: number;
    description?: string;
    html_url : string;
}


export function RepositoryList(){
    
    
    const [repositories,setRepositories] = useState<Repository[]>([]);
    
    //https://api.github.com/users/Claudinier576/repos
    useEffect(()=> {
        fetch('https://api.github.com/users/Claudinier576/repos').then(
            response => response.json()).then(data =>  setRepositories(data))
       


    },[]);

    //cuidado para n deixar sem o segundo parametro


    return (
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map(repository => {
                    return <RepoitoryItem key={repository.id} repository= {repository}/>
                })}

          
    
         
                
            </ul>

        </section>
    )
}