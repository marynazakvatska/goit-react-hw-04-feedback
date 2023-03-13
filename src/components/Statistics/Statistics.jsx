import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <div>
            <ul style={{
                listStyle: 'none',
                margin: 0,
            padding: 0,}}>
       <li>Good: {good} </li>
                <li >Neutral:  {neutral}</li>
                     <li>Bad:  {bad}</li>
            </ul>
            <p>Total: {total}</p>
                 <p>Positive Feedback: {positivePercentage}%</p>
                 </div> 
        
    )
}

export default Statistics

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number,
    positivePercentage: PropTypes.func,
}