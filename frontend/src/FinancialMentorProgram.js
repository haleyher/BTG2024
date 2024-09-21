import React from 'react';

import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'

function FinancialMentorProgram() {
  return (

    <>
        

  <Stat>
  <StatLabel>Collected Fees</StatLabel>
  <StatNumber>£0.00</StatNumber>
  <StatHelpText>Feb 12 - Feb 28</StatHelpText>
  </Stat>
    <div>
      <h1>Financial Mentor Program</h1>
      <p>Here you can find various resources to assist with your projects!</p>
    </div>
    </>
  );
}

export default FinancialMentorProgram;