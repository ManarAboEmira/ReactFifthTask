import React,{useState ,useEffect} from "react";
import axios from "axios";
function GetUsingHooks(){
    const [posts , setPosts] = useState([]);

    useEffect(() =>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            setPosts(response.data);
            console.log(response.data);
        })
        .catch(err => console.log(err));
    },[])

    return(
        <div>
            <ul>
            {posts.map((post) =>(
                <li key = {post.id}>{post.title}</li> 
            ))}
                </ul>
            
       

        </div>
            )
        }
        export default GetUsingHooks;
