import React from 'react';

export default React.createContext({
    posts: [],
    addPost: (postTitle, postBody, author) => { },
    deletePost: (postId) => { },
    editPost: (postId, postTitle, postBody) => { },
    upvote: (postId) => { },
    downvote: (postId) => { }
});