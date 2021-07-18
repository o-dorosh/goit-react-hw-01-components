import { Profile } from '../Profile/Profile';
import user from '../Profile/user.json';

import statisticalData from '../Statistics/statistical-data.json';
import { Statistics } from '../Statistics/Statistics';

import friends from '../FriendList/friends.json';
import { FriendList } from '../FriendList/FriendList';

import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import transactions from '../TransactionHistory/transactions.json';
import './App.css';

export function App() {
  return (
    <div>
      <Profile
        key={user.name}
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />;
    </div>
  );
}

export default App;
