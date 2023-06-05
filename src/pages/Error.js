import MainNavigation from "./MainNavigation";
import PageContent from './PageContent'

function ErrorPage(){
return<>
<MainNavigation></MainNavigation>
<PageContent title= "An Error Occured with the In URL Location"> </PageContent>
<p>Page not found....</p>
</>

}

export default ErrorPage