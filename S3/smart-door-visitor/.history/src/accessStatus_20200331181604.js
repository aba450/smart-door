import React from 'react';
import Success from './Success.png'

class Access extends React.Component {
  render() {
    return (
      <div>
        {/* <img src={Success} className="Success-img" alt = ""/>    */}
      </div>
    )
  }
}

function AccessStatus() {
  return (
    <div>
      <Access/>
    </div>
  )
}

export default AccessStatus;