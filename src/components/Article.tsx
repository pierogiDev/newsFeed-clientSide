import {FC} from "react";
import {Image, LinkBox, LinkOverlay, Text} from "@chakra-ui/react";
import {useDummyImage} from "react-simple-placeholder-image";

type ArticleProps = {
    title: string,
    urlToImage: string,
    url: string,
}

export const Article: FC<ArticleProps> = (props) => {

    const placeHolder = useDummyImage({
        shape: "image",
    })

    return (
        <LinkBox as={"article"} borderWidth={"1px"} rounded={"md"}>
            <LinkOverlay href={props.url}>
                <Image mt={3} mr={"auto"} ml={"auto"} mb={3} src={props.urlToImage} fallbackSrc={placeHolder}/>
                <Text pr={5} pl={5} size={"sm"} align={"left"}>
                    {props.title}
                </Text>
            </LinkOverlay>
        </LinkBox>
    )
}
