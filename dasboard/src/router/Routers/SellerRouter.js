import { lazy } from 'react'
const SellerDashboard = lazy(() => import("../../Views/seller/SellerDashboard"))
const AddProduct = lazy(() => import("../../Views/seller/AddProduct"))
const Products = lazy(() => import("../../Views/seller/Products"))
const DiscountProducts = lazy(() => import("../../Views/seller/DiscountProducts"))
const Orders = lazy(() => import("../../Views/seller/Orders"))
const Payments = lazy(() => import("../../Views/seller/Payments"))
const SellerToAdmin = lazy(() => import("../../Views/seller/SellerToAdmin"))
const SellerToCustomer = lazy(() => import("../../Views/seller/SellerToCustomer"))
const Profile = lazy(() => import("../../Views/seller/Profile"))
const OrderDetails = lazy(() => import("../../Views/seller/OrderDetails"))
const Pending = lazy(() => import("../../Views/Pending"))
const Deactive = lazy(() => import("../../Views/Deactive"))
const EditProduct = lazy(() => import('../../Views/seller/EditProduct'));
export const sellerRoutes = [

    {
        path: '/seller/account-pending',
        element: <Pending />,
        ability: 'seller'
    },
    {
        path: '/seller/account-deactive',
        element: <Deactive />,
        ability: 'seller'
    },

    {
        path: '/seller/dashboard',
        element: <SellerDashboard />,
        role: 'seller',
        status: 'active'
    },

    {
        path: '/seller/dashboard/add-product',
        element: <AddProduct />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/edit-product/:productId',
        element: <EditProduct/>,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/products',
        element: <Products/>,
        role: 'seller',
        status: 'active'
    },

    {
        path: '/seller/dashboard/discount-products',
        element: <DiscountProducts />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/orders',
        element: <Orders />,
        role: 'seller',
        visibility: ['active', 'deactive']
    },
    {
        path: '/seller/dashboard/order/details/:orderId',
        element: <OrderDetails />,
        role: 'seller',
        visibility: ['active', 'deactive']
    },
    {
        path: '/seller/dashboard/payments',
        element: <Payments />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/chat-support',
        element: <SellerToAdmin />,
        role: 'seller',
        visibility: ['active', 'deactive', 'pending']
    },
    {
        path: '/seller/dashboard/chat-customer/:customerId',
        element: <SellerToCustomer />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/chat-customer',
        element: <SellerToCustomer />,
        role: 'seller',
        status: 'active'
    },
    {
        path: '/seller/dashboard/profile',
        element: <Profile />,
        role: 'seller',
        visibility: ['active', 'deactive', 'pending']
    }
]