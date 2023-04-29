import moment from "moment";
import { FaRegBookmark, FaShareAlt, FaEye, FaStar, FaRegStar } from "react-icons/fa";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, author, image_url, total_view, rating } = news;
  return (
    <Card className="mb-3">
      <Card.Header>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex gap-3 align-items-center">
            <Image style={{ height: "45px" }} src={author?.img} roundedCircle />
            <div>
              <h5>{author?.name}</h5>
              <p className="m-0">
                {moment(author?.published_date).format("yyyy-MM-DD")}
              </p>
            </div>
          </div>
          <div className="d-flex gap-3">
            <FaRegBookmark />
            <FaShareAlt />
          </div>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? (
            <>{details}</>
          ) : (
            <>
              {details.slice(0, 250)}...{" "}
              <Link
                className="fw-bold"
                style={{ textDecoration: "none", color: "orange" }}
                to={`/news/${_id}`}
              >
                Read more
              </Link>
            </>
          )}
        </Card.Text>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex justify-content-between align-items-center gap-2">
            <Rating
            placeholderRating= {rating?.number}
            emptySymbol= {<FaRegStar />}
            placeholderSymbol= {<FaStar />}
            fullSymbol= {<FaStar />}
            >  
            </Rating>
            <p className="m-0">{rating?.number}</p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <FaEye />
            <p className="m-0">{total_view}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default NewsCard;
