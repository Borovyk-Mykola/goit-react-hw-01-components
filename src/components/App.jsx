import Profile from 'components/profile/profile';
import user from 'components/profile/user';
import FriendList from 'components/friendList/friendList';
import friends from 'components/friendList/friends';

export const App = () => {
  return (
    <div key = {user.username}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      stats = {user.stats}
      />

      <FriendList items = {friends}/>
    </div>
  );
};
