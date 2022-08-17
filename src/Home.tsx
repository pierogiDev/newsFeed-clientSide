import {Box, Grid, Heading, Input, SimpleGrid, Tab, TabList, TabPanel, TabPanels, Tabs, VStack} from "@chakra-ui/react";
import {ColorModeSwitcher} from "./ColorModeSwitcher";
import {News} from "./News";
import * as React from "react";
import {useEffect, useRef, useState} from "react";
import axios, {AxiosResponse} from "axios";

type category = "general" | "business" | "technology" | "science" | "entertainment" | "sports" | "health";

type article = {
    source: {
        id: string | null,
        name: string,
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string,
    content: string,
}

type returnOfGetJpNewsByCategories = {
    [prop in category]: Array<article>;
};

export const Home = () => {

    const [jpNewsCategories, setJpNewsCategories] = useState<returnOfGetJpNewsByCategories>();

    useEffect(() => {
        axios.get('http://localhost:4001')
            .then((res: AxiosResponse) => {
                setJpNewsCategories(res.data);
                console.log(res.data);
            });
    }, []);

    return
}
