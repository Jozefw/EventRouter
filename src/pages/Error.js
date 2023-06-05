import MainNavigation from "./MainNavigation";
import { useRouteError} from 'react-router-dom';
import PageContent from '../components/PageContent'

function ErrorPage(){
  const error = useRouteError();
  let title = "An error popped up";
  let message = "Sumpin dun gown wrong";


  if (error.status === 500){
    message = error.data.message
  }

  if(error.status = 404){
    message = "Page not found...404 Error";
    title = "Resource not Found"
  }

return<>
<MainNavigation></MainNavigation>
<PageContent title= {title}> 
<p>{message}</p>
</PageContent>

</>

}

export default ErrorPage