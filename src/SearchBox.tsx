import {FC, MutableRefObject, useRef, useState, KeyboardEvent} from "react";
import {useHistory} from "react-router-dom";
import {Box, Container, Input} from "@chakra-ui/react";
import {ColorModeSwitcher} from "./ColorModeSwitcher";

import {ShowSignInStatus} from "./ShowSignInStatus";

export const SearchBox: FC = () => {

    const keyword: MutableRefObject<string> = useRef<string>("");
    const [typing, setTyping] = useState<boolean>(false);
    const history = useHistory();

    const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && !typing && e.currentTarget.value !== "") {
            keyword.current = e.currentTarget.value;
            // console.log(`Entering keyword: ${e.currentTarget.value}`);
            history.push("/result", {searchWord: keyword.current});
            e.currentTarget.blur();
            e.currentTarget.value = '';
        }
    }

    return (
        <>
            <Container position={"sticky"}  maxW={"full"} w={"full"} top={0} zIndex={100} bg={"chakra-body-bg"}>
                <Box textAlign="end" fontSize="xl">
                        <ShowSignInStatus/>
                        <ColorModeSwitcher justifySelf="flex-end"/>
                </Box>
                <Box h={"10vh"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Input minW={"25vh"} maxW={"75vw"} onCompositionStart={() => {
                        setTyping(true)
                    }} onCompositionEnd={() => {
                        setTyping(false)
                    }} onKeyDown={handleKeyDown} type={"text"} placeholder={"ニュースを検索"}/>
                </Box>
            </Container>
        </>
    )
}

