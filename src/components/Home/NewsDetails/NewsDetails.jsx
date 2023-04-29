import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsight from "../../EditorsInsight/EditorsInsight";

const NewsDetails = () => {
  const news = useLoaderData();
  const { title, details, image_url, category_id } = news;
  return (
    <div>
      <h4>Dragon news</h4>

      <Card className="p-3">
      <Card.Img variant="top" src={image_url} />
      <div className="my-3">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
            {details}
        </Card.Text>
        <Link to={`/category/${category_id}`}><Button variant="danger"> <FaArrowLeft></FaArrowLeft> All news in this category</Button></Link>
      </div>
    </Card>

    <EditorsInsight></EditorsInsight>
    </div>
  );
};

export default NewsDetails;
