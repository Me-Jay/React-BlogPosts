import React, { useContext, useState, useEffect } from 'react';
import PostItem from './PostItem';
import styled from 'styled-components';
import PostContext from '../context/post-context'


const PostsView = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const Post = () => {
    const postContext = useContext(PostContext);
    const [blogPosts, setBlogPosts] = useState([]);
    const posts = postContext.posts;
    console.log(postContext);

    const getPosts = () => {
        return postContext.posts;
    }

    return (
        <PostsView className="">
            {
                posts.map(post => {
                    return <PostItem key={post.postId} post={post} />
                })
            }
        </PostsView>
    );
}

export default Post;