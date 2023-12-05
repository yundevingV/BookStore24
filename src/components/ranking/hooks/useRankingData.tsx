import { useEffect, useState } from "react";

import axios from "axios";

interface RankingProps{
    "id" : string,
    "title" : string,
    "author" : string,
    "publisher" : string,
    "avgScore" : number,
    "coverImg" : string,
    "isbn" : string,
}

interface booksProps{
    books : Array<RankingProps>,
}

interface ApiProps{
    "url" : string,
}

export default function useRankingData(url : string) {
    
    const [data, setData] = useState<booksProps[] | undefined>();


    useEffect(() => {
        axios
            .get(`${url}`, {
                
            })
            .then((response) => {
                setData(response.data);
                console.log(response)
                
            })
            .catch((error) => {
                console.log('에러:', error.response);
            });
    }, []);

    return (
        {data}

    );
}
