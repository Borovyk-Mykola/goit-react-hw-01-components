import styled from "@emotion/styled";

export const Status = styled.svg`
width: 64px;
height: 36px;
color: ${props => {
    if (props.isOnline === true)
    { return 'green';
    } else {return 'red'}
}}
`;

export const Item = styled.li`
display: flex;
align-items: center;
list-style: none;
height: 150px;
border: 1px solid gray;
box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.2);
border-radius: 4px;
margin-bottom: 24px;
`;

export const TextName = styled.p`
margin: 0px 24px 0px 24px;
font-weight: 700;
`;