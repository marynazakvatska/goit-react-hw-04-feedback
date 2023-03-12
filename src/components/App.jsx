import PropTypes from 'prop-types';

import { useState } from "react";
import Statistics from "components/Statistics";
import Section from "components/Section";
import FeedbackOptions from "components/FeedbackOptions";
import Notification from "components/Notification";




export  function App()  {


  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [state, setState] = useState({
      good: 0,
        neutral: 0,
        bad: 0
  })

  const increment = (state) => {
    console.log(state)

    switch (state) {
      case 'good':
        setGood(good + 1);
        break;
      
        case 'neutral':
        setNeutral(neutral + 1);
        break;
      
       case 'bad':
        setBad(bad + 1);
        break;
    }
}


 const countTotalFeedback = () => good + bad+ neutral
    
   const positivePercentage = () => Math.round(good/countTotalFeedback()*100)
  

       return (
    <div
      style={{
        height: '100vh',
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
             color: '#010101',
             padding: 30,
           
      }}
    >

   
         
        <Section title="Please leave feedback">
          <FeedbackOptions 
        
     options={state} 
         onLeaveFeedback= {increment} />
                 
          </Section>
            
             {countTotalFeedback() === 0 ?   
<Section title="Statistics">
                     <Notification message="There is no feedback"></Notification>
                 </Section>

        : <Section title="Statistics">
                 <Statistics
                     good={good}
                     neutral={neutral}
                     bad={bad}
                     total={countTotalFeedback()}
                     positivePercentage={positivePercentage()} />

             </Section>

             
         }
        
    </div>
  );
         
}

App.propTypes = {
     options: PropTypes.object,
  countTotalFeedback: PropTypes.func,
  positivePercentage: PropTypes.func,
  increment: PropTypes.func,
   
}



