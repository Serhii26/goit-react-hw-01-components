import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const Transactions = ({ items }) => {
  return (
    <table className={css.transaction}>
      <thead>
        <tr>
          <th className={css.title}>Type</th>
          <th className={css.title}>Amount</th>
          <th className={css.title}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr className={css.rows} key={item.id}>
            <td className={css.info}>{item.type}</td>
            <td className={css.info}>{item.amount}</td>
            <td className={css.info}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
Transactions.protoTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
