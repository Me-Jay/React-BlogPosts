import React from 'react';
import styled from 'styled-components';
import { FaThumbsUp } from 'react-icons/fa'
import { Button } from 'react-bootstrap';

const StyledButton = styled(Button)`
    border: none;
`;

const ButtonText = styled.span`
    text-align: center;
`;

const UpvoteButton = ({ number, onUpvote}) => {
    return (
        <StyledButton className="bg-success" onClick={onUpvote}>
            <span className="mx-1">
                <FaThumbsUp className="align-top" />
            </span>
            <ButtonText className="align-top">
                {number}
            </ButtonText>
        </StyledButton>
    );
}

export default UpvoteButton;