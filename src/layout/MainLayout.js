import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import PostContext from '../context/post-context';

const MainContainer = styled(Container)`
    padding: 0;
`;

const MainContent = styled.div`
    width: 100%;
    margin-top: 4rem;
    display: flex;
    justify-content: center;
`;

const MainLayout = ({ children }) => {
    const [posts, setPosts] = useState([{
        postId: "123342",
        postTitle: "One post",
        postBody: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        author: "Jason",
        upvotes: 0,
        downvotes: 0,
        dateAdded: "today"
    },
    {
        postId: "12334556",
        postTitle: "Three post",
        postBody: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        author: "Jason",
        upvotes: 0,
        downvotes: 0,
        dateAdded: "today"
    },
    {
        postId: "123342676",
        postTitle: "Two post",
        postBody: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        author: "Jason",
        upvotes: 0,
        downvotes: 0,
        dateAdded: "today"
    }
    ]);

    const makeId = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;

        for (var i = 0; i < charactersLength; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }


    const addPost = (postTitle, postBody, author) => {
        const upvotes = 0;
        const downvotes = 0;
        const postId = makeId(5);
        const dateAdded = Date();

        const post = {
            postId: postId,
            postTitle: postTitle,
            postBody: postBody,
            author: author,
            dateAdded: dateAdded,
            upvotes: upvotes,
            downvotes: downvotes
        }

        setPosts(previousPosts => [post, ...previousPosts]);
    }

    const deletePost = postId => {
        const newArray = posts.filter(post => {
            return post.postId !== postId
        });

        setPosts(newArray);
        window.location.href = '/home'
    }

    const handleUpvote = postId => {
        let postIndex;
        let newArray = [...posts];
        const postToUpdate = posts
            .filter((post, index) => {
                postIndex = index;
                return post.postId === postId;
            })

        postToUpdate[0].upvotes++;
        newArray[postIndex] = postToUpdate[0];
        setPosts(newArray);
    }

    const handleDownvote = postId => {
        let postIndex;
        let newArray = [...posts];
        const postToUpdate = posts
            .filter((post, index) => {
                postIndex = index;
                return post.postId === postId;
            });

        postToUpdate[0].downvotes++;
        newArray[postIndex] = postToUpdate[0];
        setPosts(newArray);
    }

    return (
        <PostContext.Provider value={{
            posts: posts,
            addPost: addPost,
            upvote: handleUpvote,
            downvote: handleDownvote,
            deletePost: deletePost
        }}>
            <MainContainer fluid>
                <NavBar />
                <MainContent>
                    {children}
                </MainContent>
            </MainContainer>
        </PostContext.Provider>
    );
}

export default MainLayout;