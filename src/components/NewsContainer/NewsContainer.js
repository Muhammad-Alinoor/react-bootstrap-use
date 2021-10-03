import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import News from '../News/News';

const NewsContainer = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        fetch("https://newsapi.org/v2/everything?q=keyword&apiKey=5df596b1182b4314a47bfafb652d223b")
            .then(res => res.json())
            .then(data => setNews(data.articles));
    }, []);
    return (
        <div>
            {
                news.length === 0 ?
                    <Spinner animation="border" />
                    :
                    <Row xs={1} md={3} className="g-4">
                        {
                            news.map(nw => <News news={nw}></News>)
                        }
                    </Row>
            }
        </div>
    );
};

export default NewsContainer;