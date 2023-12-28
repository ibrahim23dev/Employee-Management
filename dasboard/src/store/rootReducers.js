import authReducer from './Reducers/authReducer';
import categoryReducer from './Reducers/categoryReducer';
import productReducer from './Reducers/productReducer';
import sellerReducer from './Reducers/sellerReducer';
import chatReducer from './Reducers/chatReducer';
import OrderReducer from './Reducers/OrderReducer';
import PaymentReducer from './Reducers/PaymentReducer';
import dashboardIndexReducer from './Reducers/dashboardIndexReducer';

const rootReducer = {
    auth: authReducer,
    category: categoryReducer,
    product: productReducer,
    order: OrderReducer,
    seller: sellerReducer,
    payment: PaymentReducer,
    chat: chatReducer,
    dashboardIndex: dashboardIndexReducer
}
export default rootReducer