import PropTypes from 'prop-types';
import StatisticItem from './statisticItem';

const Statistics = ({items}) => { 
    return (
    <section className="statistics">
        <h2 className="title">Upload stats</h2>

        <ul className="stat-list">
            {items.map(item => (
            <StatisticItem
                key = {item.id}
                label = {item.label}
                percentage = {item.percentage}
            />
            ))}
        </ul>
    </section>
);
}

Statistics.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
}

export default Statistics;