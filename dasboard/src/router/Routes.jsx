import {useRoutes} from 'react-router-dom'

const Routes=({allRoutes})=>{
    const Router = useRoutes([...allRoutes])
    
    return Router;
}

export default Routes;
