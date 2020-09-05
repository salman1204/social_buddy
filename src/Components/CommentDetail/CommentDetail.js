import React from 'react';

const CommentDetail = (props) => {
    const {name,email,body} = props.comment;

    const postStyle = {
        border: '1px solid purple',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px'
    }

    return (
        <div style={postStyle}>
            <h5>Name:{name}</h5>
            <h6>Email: {email}</h6>
            <p>Comment: {body}</p>
        </div>
    );
};

export default CommentDetail;