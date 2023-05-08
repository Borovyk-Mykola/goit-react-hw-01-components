import styled from '@emotion/styled'

export const Item = styled.li`
display: inline-block;
padding: 24px;
`;

export const LabelText = styled.span`
display: block;

${props => {
    if(props.percentage)
    return 'font-size: 56px;';
}}
`;