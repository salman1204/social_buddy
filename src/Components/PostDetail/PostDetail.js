import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const {postId} = useParams();
    const [post, setPost] = useState({});

    useEffect(()=> {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data =>setPost(data))
    }, []);

    return (
        <div>
            <div>
            <h1>Detail of Posts {postId}</h1> 
            <p>{post.body}</p>
         
        </div>
        </div>
    );
};

export default PostDetail;