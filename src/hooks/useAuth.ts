import {Dispatch, SetStateAction, useCallback} from "react";
import {useHistory} from "react-router-dom";
import {useCookies} from "react-cookie";
import axios, {AxiosResponse} from "axios";

export const useAuth = () => {

    const [cookies, setCookie] = useCookies();
    const history = useHistory();

    const login = useCallback((email: string, pass: string, setIsRefused: Dispatch<SetStateAction<boolean>>) => {

        axios.post(`http://localhost:4001/login`,
            {},
            {
                withCredentials: true
            })
            .then((res: AxiosResponse<any>) => {
                console.log(res);
                console.log(`************************************* Response from '/login' *************************************`);
                if (cookies.isAuthenticated) {
                    setIsRefused(false);
                    history.go(0);
                } else {
                    console.log('Not authenticated');
                    setIsRefused(true);
                }
                console.log(`************************************* Response End *************************************`);
            })

            .catch((e) => {
                console.log('Catch error.');
                setIsRefused(true);
            });

    }, [history, setCookie]);

    return {login}
}
