import styled from '@emotion/styled'

export const Description = styled.div`
text-align: center;
`;

export const DescriptionText = styled.p`
color: gray;

${props => {
    if(props.styleName)
    return 'color: black; font-size: 56px; font-weight: 700';
}}
`;

export const Stats = styled.ul`
text-align: center;
padding-left: 0px;
background: gray;
margin-bottom: 0px;
`;

export const StatsList = styled.li`
list-style: none;
display: inline-block;
margin-right: 24px;

${props => {
    if(props.marginZero)
    return 'margin-right: 0;';
}}
`;

export const StatsQuantity = styled.span`
display: block;

${props => {
    if(props.label)
    return 'margin-bottom: 24px;';
}}
`;