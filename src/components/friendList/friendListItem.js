import PropTypes from 'prop-types';
import { GrStatusGoodSmall } from 'react-icons/gr';

const FriendListItem = ({
    avatar,
    name,
    isOnline,
}) => { 
    return (
    <li className="item" >
        <GrStatusGoodSmall/>
        <span className="status">{isOnline}</span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
    </li>
);
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;