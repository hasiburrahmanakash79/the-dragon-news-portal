import { useLoaderData } from "react-router-dom";
import NewsCard from "../../NewsCard/NewsCard";

const Categories = () => {
    const categoryNews = useLoaderData()

    return (
        <div>
            <h2 className="text-center mb-4 fw-bold">The Dragon News</h2>
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