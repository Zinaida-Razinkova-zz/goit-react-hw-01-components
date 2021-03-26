import React from 'react';
import propTypes from 'prop-types';
import styles from './FrendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul class={styles.friendlist}>
      {friends.map(friend => (
        <li class={styles.item} key={friend.id}>
          <span
            class={friend.isOnline ? styles.statusOnline : styles.statusOffline}
          >
            {friend.isOnline}
          </span>
          <img class={styles.avatar} src={friend.avatar} alt="" width="48" />
          <p class={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.arrayOf(
    propTypes.shape({
      name: propTypes.string.isRequired,
      avatar: propTypes.string.isRequired,
      isOnline: propTypes.bool.isRequired,
      id: propTypes.number.isRequired,
    }).isRequired,
  ),
};

export default FriendList;
