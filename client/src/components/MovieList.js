import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
function MovieList({ id, rank, movieNm, openDt }) {
  return (
    <div>
      <Card
        style={{
          height: "18rem",
          width: "18rem",
          border: "3px solid",
          float: "left",
          padding: "10px",
          margin: "20px",
        }}
      >
        <Card.Body>
          <Card.Title>
            <h1>{rank}위</h1>
            <br></br>
          </Card.Title>
          <Card.Title>{movieNm}</Card.Title>
          <Card.Title>개봉일 {openDt}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
MovieList.propTypes = {
  id: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  movieNm: PropTypes.string.isRequired,
  openDt: PropTypes.string.isRequired,
  //   genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};
export default MovieList;
