import useFetch from "../../hooks/useFetch";
import "./feature.css";
import { BackEnd_Url } from "../../services/config";

const Featured = () => {
  const { data, loading, error } = useFetch(`${BackEnd_Url}/api/hotels/countByCity?cities=Udaipur,Delhi,Jaipur`);

  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="images/Evening_view,_City_Palace,_Udaipur.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Udaipur</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="images/pexels-rishabh-dhiman-13471509.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Delhi</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem jaipur">
            <img
              src="images/pexels-poonam-sharma-6185650.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Jaipur</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;