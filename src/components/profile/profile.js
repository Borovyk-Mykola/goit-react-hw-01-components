import PropTypes from 'prop-types';
import { Description, DescriptionText, Stats, StatsList, StatsQuantity } from './profile.styled';

const Profile = ({
    username,
    tag,
    location,
    avatar,
    stats,
}) => { 
    return (
    <div className="profile" key={username}> 
        <Description>
            <img
            src={avatar}
            alt="User avatar"
            className="avatar"
            />
            <DescriptionText styleName>{username}</DescriptionText>
            <DescriptionText>{tag}</DescriptionText>
            <DescriptionText>{location}</DescriptionText>
        </Description>

        <Stats>
            <StatsList>
            <StatsQuantity label = 'true'>Followers </StatsQuantity>
            <StatsQuantity>{stats.followers}</StatsQuantity>
            </StatsList>
            <StatsList>
            <StatsQuantity label = 'true'>Views </StatsQuantity>
            <StatsQuantity>{stats.views}</StatsQuantity>
            </StatsList>
            <StatsList marginZero = 'true'>
            <StatsQuantity label = 'true'>Likes </StatsQuantity>
            <StatsQuantity>{stats.likes}</StatsQuantity>
            </StatsList>
        </Stats>
    </div>
);
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired,
    }),
}

export default Profile;