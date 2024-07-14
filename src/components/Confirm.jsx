import React, { useEffect } from 'react'
import { BiSolidMessageRoundedError } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getCartTotal } from '../redux/CartSlice';

const Confirm = () => {

        const dispatch = useDispatch();
        const {
          data: cartProds,
          totalAmounts,
          deliveryCharge,
        } = useSelector((state) => state.cart);
      
        useEffect(() => {
          dispatch(getCartTotal());
        }, [useSelector((state) => state.cart)]);


  return (
    <section fluid className='py-5 confirm'>
        <div className='container py-3'>
            <div ><Link to="/checkout" className='back'>Back</Link> </div>
            <div className='row d-flex justify-content-center'>
                <div className='col-lg-5 col-md-7 col-12'>
                    <div className='card px-3 py-3'>
                        <h4 className='mb-3'>Transfer Details</h4>
                        <p className='acct-details'>Account Name: Everything Gadgets</p>
                        <p className='acct-details'>Bank Name: Paystack</p>
                        <p>Account Number: 10167321962</p>
                        <p>Amount: ${totalAmounts + deliveryCharge}</p>
                        <button className='error-text mt-2 py-2 mb-4'><BiSolidMessageRoundedError className='error-icon'/> Ensure you transfer the exact amount stated above!</button>
                        <button className='confirm-btn py-2 px-4 border-0 mb-2'>Confirm and Transfer</button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Confirm