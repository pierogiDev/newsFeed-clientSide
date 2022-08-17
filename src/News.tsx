import {Box, Heading, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, VStack} from "@chakra-ui/react";
import {Article} from "./components/Article";
import * as React from "react";
import {FC, useEffect, useState} from "react";
import axios, {AxiosResponse} from "axios";
import {useAuth0} from "@auth0/auth0-react";

import type {article, returnOfGetJpNewsByCategories} from "./types/types";

export const News: FC = () => {

    const {isAuthenticated, getAccessTokenSilently} = useAuth0();
    const [defaultTab, setDefaultTab] = useState<number>(0);

    const [jpNewsCategories, setJpNewsCategories] = useState<returnOfGetJpNewsByCategories>();

    useEffect(() => {

        axios.get('http://localhost:4001')
            .then((res: AxiosResponse) => {
                setJpNewsCategories(res.data);
            });

        const ensureDbMatching = async () => {
            if (isAuthenticated) {
                let accessToken = await getAccessTokenSilently();
                let config = {
                    url: `http://localhost:4001/api/ensureDbMatching`,
                    method: "GET",
                    headers: {
                        "content-type": "application/json",
                        Authorization: `Bearer ${accessToken}`,
                    },
                };
                await axios(config).then((res) => {console.log(res.data)});
            }
        };
        ensureDbMatching();

        if (isAuthenticated) {
            setDefaultTab(1);
        }

    }, [isAuthenticated, defaultTab]);

    return (
        <>
            <Tabs align={"center"} display={{base: "none", md: "block"}} defaultIndex={defaultTab}>
                <TabList position={"sticky"} top={0}>
                    {
                        isAuthenticated && <Tab fontSize={["0.3rem", "0.6rem", "0.7rem", "1.5rem", "1.5rem"]}>マイフィード</Tab>
                    }
                    <Tab fontSize={["0.3rem", "0.6rem", "0.7rem", "1.5rem", "1.5rem"]}>トップ</Tab>
                    <Tab fontSize={["0.3rem", "0.6rem", "0.7rem", "1.5rem", "1.5rem"]}>ビジネス</Tab>
                    <Tab fontSize={["0.3rem", "0.6rem", "0.7rem", "1.5rem", "1.5rem"]}>テクノロジー</Tab>
                    <Tab fontSize={["0.3rem", "0.6rem", "0.7rem", "1.5rem", "1.5rem"]}>サイエンス</Tab>
                    <Tab fontSize={["0.3rem", "0.6rem", "0.7rem", "1.5rem", "1.5rem"]}>エンターテイメント</Tab>
                    <Tab fontSize={["0.3rem", "0.6rem", "0.7rem", "1.5rem", "1.5rem"]}>スポーツ</Tab>
                    <Tab fontSize={["0.3rem", "0.6rem", "0.7rem", "1.5rem", "1.5rem"]}>ヘルス</Tab>
                </TabList>
                <TabPanels>
                    {
                        isAuthenticated &&
                        <TabPanel>
                            テスト
                        </TabPanel>
                    }
                    <TabPanel>
                        <SimpleGrid minChildWidth={"300px"} spacing={"10px"}>
                            {
                                jpNewsCategories ? (
                                    jpNewsCategories.general.map((article: article, index: number) => {
                                        return (
                                            <Article key={index} title={article.title} urlToImage={article.urlToImage}
                                                     url={article.url}/>
                                        )
                                    })
                                ) : null
                            }
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid minChildWidth={"300px"} spacing={"10px"}>
                            {
                                jpNewsCategories ? (
                                    jpNewsCategories.business.map((article: article, index: number) => {
                                        return (
                                            <Article key={index} title={article.title} urlToImage={article.urlToImage}
                                                     url={article.url}/>
                                        )
                                    })
                                ) : null
                            }
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid minChildWidth={"300px"} spacing={"10px"}>
                            {
                                jpNewsCategories ? (
                                    jpNewsCategories.technology.map((article: article, index: number) => {
                                        return (
                                            <Article key={index} title={article.title} urlToImage={article.urlToImage}
                                                     url={article.url}/>
                                        )
                                    })
                                ) : null
                            }
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid minChildWidth={"300px"} spacing={"10px"}>
                            {
                                jpNewsCategories ? (
                                    jpNewsCategories.science.map((article: article, index: number) => {
                                        return (
                                            <Article key={index} title={article.title} urlToImage={article.urlToImage}
                                                     url={article.url}/>
                                        )
                                    })
                                ) : null
                            }
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid minChildWidth={"300px"} spacing={"10px"}>
                            {
                                jpNewsCategories ? (
                                    jpNewsCategories.entertainment.map((article: article, index: number) => {
                                        return (
                                            <Article key={index} title={article.title} urlToImage={article.urlToImage}
                                                     url={article.url}/>
                                        )
                                    })
                                ) : null
                            }
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid minChildWidth={"300px"} spacing={"10px"}>
                            {
                                jpNewsCategories ? (
                                    jpNewsCategories.sports.map((article: article, index: number) => {
                                        return (
                                            <Article key={index} title={article.title} urlToImage={article.urlToImage}
                                                     url={article.url}/>
                                        )
                                    })
                                ) : null
                            }
                        </SimpleGrid>
                    </TabPanel>
                    <TabPanel>
                        <SimpleGrid minChildWidth={"300px"} spacing={"10px"}>
                            {
                                jpNewsCategories ? (
                                    jpNewsCategories.health.map((article: article, index: number) => {
                                        return (
                                            <Article key={index} title={article.title} urlToImage={article.urlToImage}
                                                     url={article.url}/>
                                        )
                                    })
                                ) : null
                            }
                        </SimpleGrid>
                    </TabPanel>
                </TabPanels>
            </Tabs>
            <Box display={{base: "block", md: "none"}}>
                <Heading mt={5} mb={5} fontSize={"30px"} as={"h1"}>トップ</Heading>
                <>
                    <VStack spacing={5}>
                        {
                            jpNewsCategories ? (
                                jpNewsCategories.general.splice(0, 5).map((article: article, index: number) => {
                                    return (
                                        <Article key={index} title={article.title} urlToImage={article.urlToImage}
                                                 url={article.url}/>
                                    )
                                })
                            ) : null
                        }
                    </VStack>
                </>
                <Heading mt={5} mb={5} fontSize={"30px"} as={"h1"}>ビジネス</Heading>
                <>
                    <VStack spacing={5}>
                        {
                            jpNewsCategories ? (
                                jpNewsCategories.business.splice(0, 5).map((article: article, index: number) => {
                                    return (
                                        <Article key={index} title={article.title} urlToImage={article.urlToImage}
                                                 url={article.url}/>
                                    )
                                })
                            ) : null
                        }
                    </VStack>
                </>
                <Heading mt={5} mb={5} fontSize={"30px"} as={"h1"}>テクノロジー</Heading>
                <>
                    <VStack spacing={5}>
                        {
                            jpNewsCategories ? (
                                jpNewsCategories.technology.splice(0, 5).map((article: article, index: number) => {
                                    return (
                                        <Article key={index} title={article.title} urlToImage={article.urlToImage}
                                                 url={article.url}/>
                                    )
                                })
                            ) : null
                        }
                    </VStack>
                </>
                <Heading mt={5} mb={5} fontSize={"30px"} as={"h1"}>サイエンス</Heading>
                <>
                    <VStack spacing={5}>
                        {
                            jpNewsCategories ? (
                                jpNewsCategories.science.splice(0, 5).map((article: article, index: number) => {
                                    return (
                                        <Article key={index} title={article.title} urlToImage={article.urlToImage}
                                                 url={article.url}/>
                                    )
                                })
                            ) : null
                        }
                    </VStack>
                </>
                <Heading mt={5} mb={5} fontSize={"30px"} as={"h1"}>エンターテイメント</Heading>
                <>
                    <VStack spacing={5}>
                        {
                            jpNewsCategories ? (
                                jpNewsCategories.entertainment.splice(0, 5).map((article: article, index: number) => {
                                    return (
                                        <Article key={index} title={article.title} urlToImage={article.urlToImage}
                                                 url={article.url}/>
                                    )
                                })
                            ) : null
                        }
                    </VStack>
                </>
                <Heading mt={5} mb={5} fontSize={"30px"} as={"h1"}>スポーツ</Heading>
                <>
                    <VStack spacing={5}>
                        {
                            jpNewsCategories ? (
                                jpNewsCategories.sports.splice(0, 5).map((article: article, index: number) => {
                                    return (
                                        <Article key={index} title={article.title} urlToImage={article.urlToImage}
                                                 url={article.url}/>
                                    )
                                })
                            ) : null
                        }
                    </VStack>
                </>
                <Heading mt={5} mb={5} fontSize={"30px"} as={"h1"}>ヘルス</Heading>
                <>
                    <VStack spacing={5}>
                        {
                            jpNewsCategories ? (
                                jpNewsCategories.health.splice(0, 5).map((article: article, index: number) => {
                                    return (
                                        <Article key={index} title={article.title} urlToImage={article.urlToImage}
                                                 url={article.url}/>
                                    )
                                })
                            ) : null
                        }
                    </VStack>
                </>
            </Box>
        </>
    )
}

