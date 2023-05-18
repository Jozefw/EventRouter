import {Outlet} from 'react-router-dom';
import MainNavigation from './MainNavigation';


function Root(){

    return(
        <>
        <MainNavigation></MainNavigation>
        <main>
        <Outlet>n</Outlet>
        </main>
        </>
    )
}
export default Root;