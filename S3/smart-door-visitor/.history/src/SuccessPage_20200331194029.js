import React from 'react';
import Success from './Success.png'

class Access extends React.Component {
  
  render() {
    console.log("AccessStatus");
    return (
      <div>
        <img src={Success} className="Success-img" alt = ""/>   
      </div>
    )
  }
}

function SuccessPage() {
  return (
    <div>
      <Access/>
    </div>
  )
}

export default SuccessPage;