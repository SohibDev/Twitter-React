import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Vector from "../images/Vector.svg";
import HomeLeftSide from "./HomeLeftSide";
import HomeRightSide from "./HomeRightSide";

const Home = () => {
    const [ posts, setPosts ] = useState([])
    useEffect(() => {
        fetch('https://641d1fb11a68dc9e46176ca3.mockapi.io/posts/posts')
          .then((res) => res.json()).then((data) => {
            // console.log(data);
            setPosts(data)
        })
        .catch(err => console.error(err));
    }, [])
  return (
    <>
      <div className="w-full px-40 flex gap-x-5  divide-x">
        <div className="w-72 py-7">
          <HomeLeftSide />
        </div>
        <div style={{maxWidth: '500px', width: '100%'}} className="w-100 border-indigo-500">
          <div className="w-100">
            <header className="py-4 flex justify-between shadow-sm px-5">
              <Link to="/" className="text-lg font-semibold">Home</Link>
              <Link to="/user">
              Single Page
              </Link>
              <Link to="/login">
               Log In
              </Link>
              <img src={Vector} alt="" />
            </header>
            <div className="flex">
              <img
                style={{
                  width: "100%",
                  maxWidth: "70px",
                  height: "100%",
                  maxHeight: "70px",
                  borderRadius: "50%",
                }}
                width="70px"
                className="rounded-circle object-fit-none p-2 "
                src="data:image/jpeg;base64,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"
                alt=""
              />
              <div style={{width: '100%'}}>
                <div>
                   <input type="text" placeholder="What's happening" className="border-none py-5" /> 
                </div>
                <button className="bg-blue-300 outline-none hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full r-1 float-right"> Tweet</button>
              </div>
            </div>
            {posts.map((item, i) => (
              <div key={i}>
                <div className="w-100">
                  <div className="flex gap-4 divide-y divide-slate-500 ... py-4">
                    <img
                      style={{
                        width: "100%",
                        maxWidth: "70px",
                        height: "100%",
                        maxHeight: "70px",
                        borderRadius: "50%",
                      }}
                      src={item.img}
                      width="70px"
                      className="rounded-circle object-fit-none p-2"
                      alt="..."
                    />
                    <div>
                      <div className="flex align-middle gap-3 ">
                        <p>{item.name}</p>
                        <h4 className="lh-1 mt-2 text-gray-300">
                          @{item.username}
                        </h4>
                        <p>{item.id}m</p>
                      </div>
                      <p className="card-text">{item.body}</p>
                      <img
                        width={"400"}
                        className="rounded-2xl pt-10"
                        src={item.image}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-96">
          <HomeRightSide/>
        </div>
      </div>
    </>
  );
};

export default Home;
