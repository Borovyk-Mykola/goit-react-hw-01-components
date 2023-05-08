import PropTypes from 'prop-types';
import { GrStatusGoodSmall } from 'react-icons/gr';
import { Status,Item,TextName } from './friendListItem.styled';

const FriendListItem = ({
    avatar,
    name,
    isOnline,
}) => { 
    return (
    <Item>
        <Status isOnline = {isOnline}><GrStatusGoodSmall/></Status>
        <img className="avatar" src={avatar} alt="User avatar" width="128"/>
        <TextName>{name}</TextName>
    </Item>
);
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}

export default FriendListItem;