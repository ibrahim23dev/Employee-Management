const {adminRoute} = require('./adminRouter');
const {sellerRoutes} =require('./SellerRouter')

export const privateRoute = [
    ...adminRoute,
    ...sellerRoutes
    
];
