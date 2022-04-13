import axios from "axios";
import { useEffect, useState } from "react";
import MovieList from "../components/MovieList";
function Movie() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const key = "440a0195892f90bf5a9588e918db52c9";
  const getDate = new Date();
  const yDate = getDate.getTime(1 * 24 * 60 * 60 * 1000);
  getDate.setTime(yDate);
  var yYear = getDate.getFullYear();
  var yMonth = getDate.getMonth() + 1;
  var yDay = getDate.getDate() - 1;

  if (yMonth < 10) {
    yMonth = "0" + yMonth;
  }
  if (yDay < 10) {
    yDay = "0" + yDay;
  }
  const resultDate = yYear + "-" + yMonth + "-" + yDay;

  const res = resultDate.slice(0, 10).replace(/-/g, "");

  const getMovies = () => {
    axios
      .get(
        `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${res}&itemPerPage=10`
      )
      .then((res) => {
        setMovies(res.data.boxOfficeResult.dailyBoxOfficeList);
        console.log(res.data);
        setLoading(false);
      });
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>loading....</h1>
      ) : (
        <div>
          {movies.map((dailyBoxOfficeList) => (
            <MovieList
              key={dailyBoxOfficeList.rnum}
              id={dailyBoxOfficeList.rnum}
              rank={dailyBoxOfficeList.rank}
              movieNm={dailyBoxOfficeList.movieNm}
              openDt={dailyBoxOfficeList.openDt}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Movie;
