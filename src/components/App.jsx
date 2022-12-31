import user from '../components/user.json';
import data from '../components/data.json';
import friends from '../components/friends.json';
import transactions from '../components/transactions.json';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

const { username, tag, location, avatar, stats } = user;
export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '50px',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
        margin: '50px 0px',
      }}
    >
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
