import PropTypes from 'prop-types';
import {Item, LabelText} from './statisticItem.styled'

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const StatisticItem = ({
    label,
    percentage,
}) => { 
    return (
    <Item style={{background: `${getRandomHexColor()}`}}>
        <LabelText>{label} </LabelText>
        <LabelText percentage = 'true'>{percentage}%</LabelText>
    </Item>
)}

StatisticItem.propTypes = {
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
}

export default StatisticItem;