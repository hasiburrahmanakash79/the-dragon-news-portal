import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="">
      <h4>All Categories</h4>
      <div className="ps-5 py-3 bg-light">
        {categories.map((category) => (
          <p key={category.id} className="p-2 fs-5">
            <Link to={`/category/${category.id}`} className="text-black fs-5" style={{textDecoration: 'none'}}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
