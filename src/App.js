import React from 'react';
import User from './components/Social-network/user.json';
import Profile from './components/Social-network/Profile';
import statisticalData from './components/Statistics/statistical-data.json';
import Statistics from './components/Statistics/Statistics';
import friends from './components/FriendList/friends.json';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/Transaction-history/TransactionHistory';
import transactions from './components/Transaction-history/transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={User.name}
        tag={User.tag}
        location={User.location}
        avatar={User.avatar}
        stats={User.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
