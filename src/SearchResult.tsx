import React, {FC, useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import {Box, Button, SimpleGrid, Tag} from "@chakra-ui/react";
import axios, {AxiosResponse} from "axios";
import {useAuth0} from "@auth0/auth0-react";

import {Article} from "./components/Article";
import type {article, articles, searchWord} from "./types/types";

const getSearchResults = async (searchWord: string): Promise<articles> => {
    let searchResponse: AxiosResponse = await axios.get(`http://localhost:4001/query?query=${searchWord}`, {
        withCredentials: true,
    });
    return searchResponse.data.articles
};

export const SearchResult: FC = () => {

    const {state} = useLocation<searchWord>();
    const [searchNewsResults, setSearchNewsResults] = useState<articles>([]);
    const {isAuthenticated, getAccessTokenSilently} = useAuth0();

    useEffect(() => {
        getSearchResults(state.searchWord).then((response: articles) => {
            setSearchNewsResults(response);
        });
    }, [state.searchWord]);

    const onHandleClickAddWord = async () => {
        if (isAuthenticated) {
            let accessToken = await getAccessTokenSilently();
            let config = {
                url: `http://localhost:4001/api/addWord`,
                method: "POST",
                headers: {
                    "content-type": "application/json",
                    Authorization: `Bearer ${accessToken}`,
                },
                data: {
                    addWord: state.searchWord,
                }
            };
            await axios(config).then((res) => {console.log(res.data)});
        }
    }

    return (
        <> {searchNewsResults ? (
            <>
                <Tag mb={5} size={"lg"}>検索結果：{state.searchWord}</Tag>
                {
                    isAuthenticated && <Button onClick={onHandleClickAddWord}>マイフィードに検索ワードを追加</Button>
                }
                <Box display={{base: "block", md: "none"}}>
                    {
                        searchNewsResults.map((result: article, index: number) => {
                            return (
                                <Article key={index} title={result.title} urlToImage={result.urlToImage} url={result.url}/>
                            )
                        })
                    }
                </Box>
                <Box display={{base: "none", md: "block"}}>
                    <SimpleGrid minChildWidth={"300px"} spacing={"10px"}>
                        {
                            searchNewsResults.map((result: article, index: number) => {
                                return (
                                    <Article key={index} title={result.title} urlToImage={result.urlToImage}
                                             url={result.url}/>
                                )
                            })
                        }
                    </SimpleGrid>
                </Box>
            </>
        ) : null
        }
        </>
    )
}
