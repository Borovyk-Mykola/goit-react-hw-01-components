import PropTypes from 'prop-types';
import StatisticItem from './statisticItem';
import {StatList, Title} from './statistics.styled'

const Statistics = ({items}) => { 
    return (
    <section className="statistics">
        <Title>Upload stats</Title>

        <StatList>
            {items.map(item => (
            <StatisticItem
                key = {item.id}
                label = {item.label}
                percentage = {item.percentage}
            />
            ))}
        </StatList>
    </section>
);
}

Statistics.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
}

export default Statistics;