import {Outlet,useNavigation} from 'react-router-dom';
import MainNavigation from './MainNavigation';


function Root(){
const navigationStatus = useNavigation();

    return(
        <>
        <MainNavigation></MainNavigation>
        <main>
            {navigationStatus.state === 'loading' && <p>Loading...</p>}
        <Outlet></Outlet>
        </main>
        </>
    )
}
export default Root;