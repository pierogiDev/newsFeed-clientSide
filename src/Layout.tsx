import {FC, ReactNode} from "react";
import {SearchBox} from "./SearchBox";
import {Container} from "@chakra-ui/react";

type Props = {
    children: ReactNode,
}

export const Layout: FC<Props> = (props: Props) => {
    return (
        <>
            <SearchBox/>
            <Container maxW={"full"} w={"full"}>
                {props.children}
            </Container>
        </>
    )
}
