import PropTypes from 'prop-types';
import FriendListItem from './friendListItem';

const FriendList = ({items}) => { 
    return (
    <ul className="friend-list">
        {items.map(item => (
            <FriendListItem
            key = {item.id}
            avatar = {item.avatar}
            name = {item.name}
            isOnline = {item.isOnline}
            />
        ))}
    </ul>
);
}

FriendList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        }),
    ),
}

export default FriendList;