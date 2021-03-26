import React from 'react';
import propTypes from 'prop-types';
import styles from './Profile.module.css';

const Profile = ({ avatar, name, tag, location, stats }) => {
  return (
    <div className={styles.profile}>
      <div>
        <img className={styles.avatar} src={avatar} alt={name} />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.location}>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.list}>
          <span className={styles.title}>Followers</span>
          <span className={styles.data}>{stats.followers}</span>
        </li>
        <li className={styles.list}>
          <span className={styles.title}>Views</span>
          <span className={styles.data}>{stats.likes}</span>
        </li>
        <li className={styles.list}>
          <span className={styles.title}>Likes</span>
          <span className={styles.data}>{stats.views}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  tag: propTypes.string.isRequired,
  location: propTypes.string.isRequired,
  stats: propTypes.shape({
    followers: propTypes.number.isRequired,
    likes: propTypes.number.isRequired,
    views: propTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
