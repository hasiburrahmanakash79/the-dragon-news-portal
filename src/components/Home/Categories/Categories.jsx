import { useParams } from "react-router-dom";

const Categories = () => {
    const {id} = useParams()
    return (
        <div>
            <h2>Category is coming: {id}</h2>
        </div>
    );
};

export default Categories;