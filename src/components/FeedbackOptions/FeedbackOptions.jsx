import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css'


const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return Object.keys(options).map(btnName => {
    
         return (
             <button className={css.btn} key={btnName}
                 type='button'
           
                 onClick={() => onLeaveFeedback(btnName) }>{btnName}</button>
                    
    )
    })
   
} 
export default FeedbackOptions

FeedbackOptions.propTypes = {
     options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func,
}

