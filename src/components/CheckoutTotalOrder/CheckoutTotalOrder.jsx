import { useSelector } from 'react-redux';
import './CheckoutTotalOrder.css';
import { useLocation } from 'react-router-dom';
import formatNumberWithDots from '../../Utilities/formatNumberWithDot';

export default function  CheckoutTotalOrder () {
      const cartUserItems = useSelector((state) => state.fetchUserCart.userCart);
      const location = useLocation();
      const { subTotal } = location.state || {};
      
      return (
            <div className="checkoutOderContainer">
                  <h5 className="mb-4">YOUR ORDER</h5>
                  { (cartUserItems && cartUserItems.cart ? 
                  cartUserItems.cart.map((item, index) => {
                            return  <div key = {index} className='checkoutItemDetail'>
                                          <p className="fw-medium">{item.name}</p>
                                          <div className='checkout_itemPrice'>
                                                <p className="ps-2 d-flex">{formatNumberWithDots(item.price)} <span className='ps-1'>VND</span></p>
                                                <p className='ms-2'> x{item.quantity}</p>
                                          </div>
                                     </div>
                  }) : '')}
                         { ( cartUserItems && cartUserItems.cart 
                              && <div className='d-flex justify-content-between'>
                              <p className='fw-bold'>TOTAL</p>
                              <p className=' fs-5'>{subTotal} VND</p>
                        </div>
                         )}     
            </div>
      )
}