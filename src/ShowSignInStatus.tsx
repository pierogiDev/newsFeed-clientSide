import React, {FC} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {SignInButton} from "./SignInButton";
import {SignOutButton} from "./SignOutButton";

export const ShowSignInStatus: FC = () => {

    const {isAuthenticated} = useAuth0();

    return (
        <>
            {isAuthenticated ?
                <SignOutButton/> : <SignInButton/>
            }
        </>
    )
}
