import PropTypes from 'prop-types';

const FriendList = ({
    avatar,
    name,
    isonline,
}) => { 
    return (
    <ul class="friend-list">
        <li class="item">
            <span class="status">{isonline}</span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    </ul>
);
}

Profile.propTypes = {
    user: PropTypes.shape({
        username: PropTypes.string.isRequired,
        tag: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        stats: PropTypes.shape({
            followers: PropTypes.number.isRequired,
            views: PropTypes.number.isRequired,
            likes: PropTypes.number.isRequired,
        }),
    }),
}

export default FriendList;