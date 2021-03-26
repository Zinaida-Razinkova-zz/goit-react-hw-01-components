import React from 'react';
import propTypes from 'prop-types';
import styles from './Transaction.module.css';

const TransactionHistory = ({ items }) => {
  return (
    <table class={styles.transaction}>
      <thead>
        <tr>
          <th class={styles.line}>Type</th>
          <th class={styles.line}>Amount</th>
          <th class={styles.line}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td class={styles.column}>{item.type}</td>
            <td class={styles.column}>{item.amount}</td>
            <td class={styles.column}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      amount: propTypes.string.isRequired,
      currency: propTypes.string.isRequired,
    }).isRequired,
  ),
};

export default TransactionHistory;
