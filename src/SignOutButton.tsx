import {IconButton} from "@chakra-ui/react";
import {BiUserCheck} from "react-icons/all";
import React from "react";
import {useAuth0} from "@auth0/auth0-react";

export const SignOutButton = () => {

    const {logout} = useAuth0();

    const handleClickLogout = () => {
        logout({
            returnTo: window.location.origin,
        });
    }

    return (
        <>
            <IconButton aria-label={"loggedIn"}
                        icon={<BiUserCheck/>} justifySelf={"flex-end"}
                        onClick={handleClickLogout}/>
        </>
    )
}

