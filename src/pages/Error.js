import MainNavigation from "./MainNavigation";
import PageContent from '../components/PageContent'

function ErrorPage(){
return<>
<MainNavigation></MainNavigation>
<PageContent title= "An Error Occurred with the In URL Location"> </PageContent>
<p>Page not found....</p>
</>

}

export default ErrorPage