import React from 'react';
import propTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section class={styles.statistics}>
      <h2 class={styles.title}>{title}</h2>
      <ul class={styles.statlist}>
        {stats.map(stat => (
          <li class={styles.item} key={stat.id}>
            <span class={styles.label}>{stat.label}</span>
            <span class={styles.percentage}> {stat.percentage} %</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: propTypes.string.isRequired,
  stats: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      label: propTypes.string.isRequired,
      percentage: propTypes.number.isRequired,
    }).isRequired,
  ),
};

export default Statistics;
