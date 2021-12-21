import {useState, useEffect} from "react";
import axios from "axios";

export default function Newsfeed() {
    const [articles, setArticles] = useState(null);

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://crypto-news-live.p.rapidapi.com/news',
            headers: {
                'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
                'x-rapidapi-key': '5b6d31f8cfmsh5598169723208c2p1be828jsn0b38fac79ee6'
                // 'x-rapidapi-key': process.env.REACT_RAPID_API_KEY
            }
        };

        axios.request(options).then((response)  => {
            console.log(response.data);
            setArticles(response.data);
        }).catch((error) => {
            console.error(error);
        });
    }, [])

    console.log(articles);

    const firstSevenArticles = articles?.slice(0, 7);

    return (
        <div className="news-feed">
            <h2>Newsfeed</h2>
            {firstSevenArticles?.map((article, _index) => (
                <div key={_index}>
                    <a href={article.url}><p>{article.title}</p></a>
                </div>
            ))}
        </div>
    );
}