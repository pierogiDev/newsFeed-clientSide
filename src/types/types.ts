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
};

type articles = Array<article>;

type category = "general" | "business" | "technology" | "science" | "entertainment" | "sports" | "health";

type returnOfGetJpNewsByCategories = {
    [prop in category]: Array<article>;
};


type searchWord = {
    searchWord: string,
}

export type {article, articles, category, returnOfGetJpNewsByCategories, searchWord}
