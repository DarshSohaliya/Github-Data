import React, { useCallback, useEffect, useMemo } from "react";
import { useRecoilState } from "recoil";
import { githubUserData } from "../store/atoms";


function GithubCard({username}) {
    const [userData , setUserData] = useRecoilState(githubUserData)

    useEffect(() => {
     const fetchGithubData = async () => {
       try {
        const response  =await fetch(`https://api.github.com/users/${username}`);
        if (response.ok) {
            const data= await response.json()
            setUserData(data)
        }
        else{
            console.error(`Failed to fetch Github data for user ${username}`);
        }
       } catch (error) {
          console.error(`Error fetching Problem`);
       }
     }

     fetchGithubData()
    },[username,setUserData])

    if(!userData){
        return <div>Loading...</div>
    }
   
    return(
    <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md p-4">
        <img src={userData.avatar_url} alt="" className="w-full h-40 object-cover mb-4 rounded-md" />
        <div className="text-center"> 
            <h2 className="text-xl font-bold mb-2">{userData.login}</h2>
            <p className="text-gray-600">Follower: {userData.followers}</p>
            <p className="text-gray-600">Following: {userData.following}</p>
            <p className="text-gray-600">Public Repos: {userData.public_repos}</p>
        </div>
    </div>
    )
}

export default GithubCard