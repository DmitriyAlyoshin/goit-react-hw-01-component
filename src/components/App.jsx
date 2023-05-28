import { Profile } from './profile/Profile';
import user from './profile/user.json'; // data
import { Statistics } from './statistics/Statistics';
import data from './statistics/data.json'; // data
import { FriendList } from './friendList/FriendList';
import friends from './friendList/friends.json'; // data
import { TransactionHistory } from './transactionHistory/TransactionHistory';
import transactions from './transactionHistory/transactions.json'; // data

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        padding: 20,
        color: '#010101',
      }}
    >
      <Profile
        userName={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      {/* Statistics from friends.json */}
      <Statistics title="Upload stats" stats={data} />

      {/* Friends from friends.json */}
      <FriendList friends={friends} />

      {/* Transaction history from transactions.json */}
      <TransactionHistory transactions={transactions} />

    </div>
  );
};
