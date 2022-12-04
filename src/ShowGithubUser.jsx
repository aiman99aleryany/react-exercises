import React from "react";
import {useParams} from "react-router-dom";
import GithubUser from './GithubUser';

const ShowGithubUser = () => {
    const {username}= useParams();
   return (
       <div>
           <GithubUser username={username}></GithubUser>
       </div>
   ) 
};


export default ShowGithubUser;