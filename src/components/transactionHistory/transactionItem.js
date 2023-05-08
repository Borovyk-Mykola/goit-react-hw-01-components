import PropTypes from 'prop-types';
import { CellTable } from './transactionItem.styled';

const TransactionItem = ({
    type,
    amount,
    currency,
}) => { 
return (
    <tr>
        <CellTable>{type}</CellTable>
        <CellTable>{amount}</CellTable>
        <CellTable>{currency}</CellTable>
    </tr>
)}

TransactionItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
}

export default TransactionItem;