import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState([]);
  const [change, setChange] = useState();
  const [num, setNum] = useState([]);
  const [first, setFirst] = useState("");
  const [sec, setSec] = useState("");
  const nav = useNavigate();

  useEffect(() => {
    getApi();
    // eslint-disable-next-line
  }, [change, sec, first]);

  const getApi = async () => {
    if (change > 0) {
      if (first !== "" && sec !== "") {
        console.log(first, sec);
        const api = await axios(
          `https://api.spacexdata.com/v3/launches/?limit=${first}&offset=${sec}`
        );
        console.log(
          `https://api.spacexdata.com/v3/launches/?limit=${first}&offset=${sec}`
        );
        setState(api.data);
        setFirst("");
        setSec("");
      } else {
        const api = await axios(`https://api.spacexdata.com/v3/launches`);
        const limit = Math.round(api.data.length / change);
        setFirst(limit);
        console.log(limit);
        const empty = [];
        for (let i = 0; i < limit; i++) {
          empty.push(i + 1);
        }
        setNum(empty);
      }
    } else {
      const api = await axios(`https://api.spacexdata.com/v3/launches`);
      setState(api.data);
      setFirst("");
      setSec("");
      console.log("asass");
    }
  };

  const Pass = (e) => {
    const offset = e * first;
    console.log(offset);
    setSec(offset);
  };

  const Handle = (id) => {
    nav(`/Home2/?id=${id}`);
  };

  return (
    <>
      <div className="container select">
        <div className="row" style={{ alignItems: "center" }}>
          <div className="drop-down col-lg-2 ">
            <select onChange={(e) => setChange(e.target.value)}>
              <option>0</option>
              <option>10</option>
              <option>25</option>
              <option>50</option>
              <option>75</option>
              <option>100</option>
            </select>
          </div>
          {num.length ? (
            <div className="col-lg-10">
              <div className="row" style={{ justifyContent: "space-around" }}>
                {num.map((e, i) => {
                  return (
                    <div key={i} className=" round">
                      <h1 className="pointer" onClick={() => Pass(e)}>
                        {e}
                      </h1>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <section className="flight">
        <div className="container">
          <div className="row">
            {state.map((e, i) => (
              <div className="col-lg-3 col-sm-12 col-md-4 mt-sm-3" key={i}>
                <div className="box">
                  <img
                    onClick={() => Handle(e.flight_number)}
                    src={e.links.mission_patch_small}
                    alt="img"
                    className="w-sm-100 pointer"
                  />
                  <div>
                    <h3 style={{ textAlign: "center" }}>{e.mission_name}</h3>
                    <a href={e.links.wikipedia} target="jegan" className="btn">
                      View Site {e.flight_number}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
