import PropTypes from 'prop-types';
import TransactionItem from './transactionItem';
import { TableTransaction, TableTitle, TableBody } from './transactionHistory.styled';

const TransactionHistory = ({items}) => { 
    return (
    <TableTransaction>
        <thead>
            <tr>
                <TableTitle>Type</TableTitle>
                <TableTitle>Amount</TableTitle>
                <TableTitle>Currency</TableTitle>
            </tr>
        </thead>

        <TableBody>
            {items.map(item => (
            <TransactionItem
                key = {item.id}
                type = {item.type}
                amount = {item.amount}
                currency = {item.currency}
            />
            ))}
        </TableBody>
    </TableTransaction>
)}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
        }),
    ),
}

export default TransactionHistory;