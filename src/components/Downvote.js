import React from 'react';
import styled from 'styled-components';
import { FaThumbsDown } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const StyledButton = styled(Button)`
    border: none;
`;

const ButtonText = styled.span`
    text-align: center;
`;

const DownvoteButton = ({ number, onDownvote }) => {
    return (
        <StyledButton className="bg-danger" onClick={onDownvote}>
            <span className="mx-1">
                <FaThumbsDown className="align-middle"/>
            </span>
            <ButtonText className="align-top">
                {number}
            </ButtonText>
        </StyledButton>
    );
}

export default DownvoteButton;