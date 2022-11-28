import React from 'react'
import { Link} from 'react-router-dom';
export const Conatct = () => {
  return (
    <>
    <button className="BackToHomeButton contactDiv"><Link to={'/'}>Home</Link></button>
    <div className='EmptyCartPara contact'>
        <p>Our Customer Service number is 18002660004, and our lines are open from 10 AM to 7 PM; Monday to Saturday, except for National and Public Holidays.</p>
    </div>
    </>
  )
}
