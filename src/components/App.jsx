import Profile from 'components/profile/profile';
import user from 'components/profile/user';
import Statistics from 'components/statistics/statistics';
import data from 'components/statistics/data';
import FriendList from 'components/friendList/friendList';
import friends from 'components/friendList/friends';
import TransactionHistory from 'components/transactionHistory/transactionHistory';
import transactions from 'components/transactionHistory/transactions';

export const App = () => {
  return (
    <div key = {user.username}
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
      username = {user.username}
      tag = {user.tag}
      location = {user.location}
      avatar = {user.avatar}
      stats = {user.stats}
      />
      <Statistics items = {data}/>
      <FriendList items = {friends}/>
      <TransactionHistory items = {transactions}/>
    </div>
  );
};
