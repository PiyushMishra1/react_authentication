import React, { Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";






  const Home = () => {

    const {

      isAuthenticated,

    } = useAuth0();
  return(
    <Fragment>
    {!isAuthenticated && (<div> <h4>welcome to authentication</h4>
    <br/> <h5>please authenticate</h5> </div>)}
    {isAuthenticated && (<div> <h4>welcome User</h4>
      <br/>
      <h5>
        authentication success
      </h5> </div>)}
</Fragment>

  )

}

export default Home;
