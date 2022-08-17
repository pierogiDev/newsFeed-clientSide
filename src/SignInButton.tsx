import React, {FC} from "react";
import {useAuth0} from "@auth0/auth0-react";
import {IconButton} from "@chakra-ui/react";
import {BiUserX} from "react-icons/all";

export const SignInButton: FC = () => {

    const { loginWithRedirect } = useAuth0();

    const onHandleClickLogin = async () => {
        await loginWithRedirect({
            appState: {
                returnTo: '/',
            },
        });
        console.log('loginWithRedirect is executed.');
    };

    return (
        <>
            <IconButton aria-label={"logged0ut"} onClick={onHandleClickLogin} icon={<BiUserX/>}
                        justifySelf={"flex-end"}/>
        </>
    )
}

