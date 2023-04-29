import { useLoaderData } from "react-router-dom";
import NewsCard from "../../NewsCard/NewsCard";

const Categories = () => {
    const categoryNews = useLoaderData()

    return (
        <div>
            <h2>This Category news</h2>
            {
                categoryNews.map(news => <NewsCard
                    key={news._id}
                    news={news}
                >
                </NewsCard>)
            }
        </div>
    );
};

export default Categories;