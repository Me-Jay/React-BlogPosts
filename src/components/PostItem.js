import React, { useState, useContext, useEffect } from 'react';
import styled from 'styled-components';
import { Card, Row, Button } from 'react-bootstrap';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';
import UpvoteButton from './Upvote';
import DownvoteButton from './Downvote';
import { Link } from 'react-router-dom';
import PostContext from '../context/post-context'

const { Body, Title, Subtitle, Text, Footer } = Card;


const PostCard = styled(Card)`
    width: 80%;
`;
const CardBody = styled(Body)``;
const CardTitle = styled(Title)`
    font-weight: bold;
`;
const CardSubtitle = styled(Subtitle)`
    font-weight: light;
    font-style: italic;
`;
const CardFooter = styled(Footer)`
    display: flex;
    flex-direction: row;
`;
const CardText = styled(Text)``;


const PostItem = ({ post: { postId, postTitle, postBody, author, dateAdded, upvotes, downvotes } }) => {
    const postContext = useContext(PostContext);

    const onUpvote = postId => {
        postContext.upvote(postId);
    }

    const onDownvote = postId =>{
        postContext.downvote(postId)
    }

    return (
        <PostCard className="p-3 mb-4 mx-auto">
            <CardBody>
                <CardTitle>
                    {postTitle}
                </CardTitle>
                <CardSubtitle className="text-muted">
                    <span>posted on {dateAdded}</span>
                </CardSubtitle>
                {
                    <>
                        <CardText>
                            {postBody.substr(0, 350) + "..."}
                        </CardText>
                        <Link to={`/post/${postId}`} className="btn btn-primary">
                            Read More
                        </Link>
                    </>
                }
            </CardBody>
            <CardFooter className="bg-light">
                <div className="mx-1">
                    <UpvoteButton number={upvotes} onUpvote={() => onUpvote(postId)} />
                </div>
                <div className="mx-1">
                    <DownvoteButton number={downvotes} onDownvote={() => onDownvote(postId)}/>
                </div>
            </CardFooter>


        </PostCard>
    );
}

export default PostItem;