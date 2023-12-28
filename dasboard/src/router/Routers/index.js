import { privateRoute } from './privateRouter'
import MainLayout from '../../Layout/MainLayout'
//import ProtectRoute from './protectRouter'
export const GetRoutes = () => {
    const allRoute = []
    privateRoute.map(r => {
        //r.element = <ProtectRoute route={r} >{r.element}</ProtectRoute>
    })
    return {
        path: '/',
        element: <MainLayout />,
        children: privateRoute
    }
}
