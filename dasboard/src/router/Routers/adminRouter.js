import  React,{lazy} from "react";

const AdminDasbord = lazy(() => import('../../Views/admin/adminDasbord'));
const Order = lazy(() => import('../../Views/admin/Order'));
const Category = lazy(() => import('../../Views/admin/Category'));
const SellerRequest = lazy(() => import('../../Views/admin/SellerRequest'));
const Logout = lazy(() => import('../../Views/admin/logout'));
const Seller = lazy(() => import('../../Views/admin/Sellers'));
const DeactiveSeller = lazy(() => import('../../Views/admin/DeactiveSeller'));
const SellerChart = lazy(() => import('../../Views/admin/ChartSeller'));
const PaymentRequest = lazy(() => import('../../Views/admin/paymentRequest'));
const SellerDetails = lazy(() => import('../../Views/admin/SellerDetails'));
const BuyerDetails =lazy(() => import('../../Views/admin/buyerDetails'));

export const adminRoute = [
    {
        path: '/admin/dasbord',
        element: <AdminDasbord />,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/orders',
        element: <Order />,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/category',
        element: <Category />,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/activeseller',
        element: <Seller />,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/deactivateseller',
        element: <DeactiveSeller />,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/sellerrequest',
        element: <SellerRequest />,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/paymentrequest',
        element: <PaymentRequest />,
        ability: 'admin'
    },
     
    {
        path: '/admin/dashboard/chatseller',
        element: <SellerChart />,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/logout',
        element: <Logout />,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/sellerDetails',
        element: <SellerDetails />,
        ability: 'admin'
    },
    {
        path: '/admin/dashboard/BuyerDetails',
        element: <BuyerDetails />,
        ability: 'admin'
    }
];


