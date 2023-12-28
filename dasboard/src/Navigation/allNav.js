import React from 'react';
import { AiFillDashboard, AiOutlineShopping } from 'react-icons/ai';
import { BiCategory, BiLoaderCircle } from 'react-icons/bi';
import { FiUser } from 'react-icons/fi';
import { FaUser } from 'react-icons/fa';
import { BsCurrencyDollar } from 'react-icons/bs';
import { BsChat } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg'
import { TbDiscount2Off } from 'react-icons/tb'
import {BsChatLeftText} from 'react-icons/bs'
import { SiProducthunt } from 'react-icons/si'
import { BiMessageSquareAdd } from 'react-icons/bi'
import { AiOutlinePlus } from 'react-icons/ai'

// Define your navigation data
export const allNav = [
  {
    id: 1,
    title: 'Dashboard',
    icon: <AiFillDashboard />,
    role: 'admin',
    path: '/admin/dasbord'
  },
  {
    id: 2,
    title: 'Order',
    icon: <AiOutlineShopping />,
    role: 'admin',
    path: '/admin/dashboard/orders'
  },
  {
    id: 3,
    title: 'Category',
    icon: <BiCategory />,
    role: 'admin',
    path: '/admin/dashboard/category'
  },
  {
    id: 4,
    title: 'Seller',
    icon: <FiUser />,
    role: 'admin',
    path: '/admin/dashboard/activeseller'
  },
  {
    id: 5,
    title: 'Deactive Seller',
    icon: <FaUser />,
    role: 'admin',
    path: '/admin/dashboard/deactivateseller'
  },
  {
    id: 6,
    title: 'Seller Request',
    icon: <BiLoaderCircle />,
    role: 'admin',
    path: '/admin/dashboard/sellerrequest'
  },
  {
    id: 7,
    title: 'Payment Request',
    icon: <BsCurrencyDollar />,
    role: 'admin',
    path: '/admin/dashboard/paymentrequest'
  },
  {
    id: 8,
    title: 'Chat Seller',
    icon: <BsChat/>,
    role: 'admin',
    path: '/admin/dashboard/chatseller'
  },
  
  {
        id: 9,
        title: 'Dashboard',
        icon: <AiFillDashboard />,
        role: 'seller',
        path: '/seller/dashboard'
    },
    {
        id: 10,
        title: 'Add Product',
        icon: <AiOutlinePlus />,
        role: 'seller',
        path: '/seller/dashboard/add-product'
    },
    {
        id: 11,
        title: 'All Product',
        icon: <SiProducthunt />,
        role: 'seller',
        path: '/seller/dashboard/products'
    },
    {
        id: 12,
        title: 'Discount Product',
        icon: <TbDiscount2Off />,
        role: 'seller',
        path: '/seller/dashboard/discount-products'
    },
    {
        id: 13,
        title: 'Orders',
        icon: <AiOutlineShopping />,
        role: 'seller',
        path: '/seller/dashboard/orders'
    },
    {
        id: 14,
        title: 'Payments',
        icon: <BsCurrencyDollar />,
        role: 'seller',
        path: '/seller/dashboard/payments'
    },
    {
        id: 15,
        title: 'Chat Customer',
        icon: <BiMessageSquareAdd />,
        role: 'seller',
        path: '/seller/dashboard/chat-customer'
    },
    {
        id: 16,
        title: 'Chat Support',
        icon: <BsChatLeftText />,
        role: 'seller',
        path: '/seller/dashboard/chat-support'
    },
    {
        id: 17,
        title: 'Profile',
        icon: <CgProfile />,
        role: 'seller',
        path: '/seller/dashboard/profile'
    }

];
