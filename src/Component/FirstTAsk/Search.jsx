import React, { useState, useEffect } from 'react';
import axios from 'axios';

function GetWithSearchAPI() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setPost(response.data); // Update the post state with the fetched data
      })
      .catch(err => console.log(err));
  }, [id]);

  const handleClick = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        setPost(response.data); // Update the post state with the fetched data
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="container">
      <input
        type="text"
        value={id}
        onChange={event => setId(event.target.value)}
        className="input"
      />
      <button onClick={handleClick} className="button">
        Search
      </button>
      <ul className="list">
        <li>{post.title}</li>
      </ul>
    </div>
  );
}

export default GetWithSearchAPI;
