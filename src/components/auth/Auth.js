import React, { useContext } from 'react'
import { AuthContext } from '../../context/auth'
import { If } from 'react-if';

const Auth=(props)=> {
  const contextCondition = useContext(AuthContext);
    let showComponent = false;
   try {
     showComponent = contextCondition.loggedIn && props.capability
     ? contextCondition.user.capabilities.includes(props.capability)
     : false;
   } catch (error) {
    console.log(error.message);
   }
   
    return (
      <If condition={showComponent}>
        <div>{props.children}</div>
      </If>
    )



}

export default Auth;