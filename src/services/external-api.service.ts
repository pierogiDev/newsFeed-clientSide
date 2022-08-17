import axios, { AxiosRequestConfig } from "axios";

export const callExternalApi = async (options: { config: AxiosRequestConfig }) => {
    try {
        const response = await axios(options.config);
        const { data } = response;

        return {
            data,
            error: null,
        };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            const axiosError = error;

            const { response } = axiosError;

            let message = "http request failed";

            if (response && response.statusText) {
                message = response.statusText;
            }

            if (axiosError.message) {
                message = axiosError.message;
            }
            //MEMO Refer to https://github.com/auth0-developer-hub/spa_react_typescript_hello-world/blob/main/src/hooks/use-external-api.tsx for this type definition
            if (response && response.data && (response.data as Error).message) {
                message = (response.data as Error).message;
            }

            return {
                data: null,
                error: {
                    message,
                },
            };
        }

        return {
            data: null,
            error: {
                message: (error as Error).message,
            },
        };
    }
};
