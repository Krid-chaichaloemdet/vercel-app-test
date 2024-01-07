import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import Home from '../pages/Home';
import CreateProduct from '../pages/CreateProduct';
import ProductInfo from '../pages/ProductInfo';

const router = createBrowserRouter([
    {
        path:'/',
        element:(
            <Layout />
        ),children: [
            {path: '', element:<Home />},
            { path: 'createProduct', element: <CreateProduct />},
            { path: 'info', element: <ProductInfo />}
        ]
    }
])

export default function Route() {
    return <RouterProvider router={router} />;
  }