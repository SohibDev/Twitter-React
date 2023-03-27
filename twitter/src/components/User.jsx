import { useEffect, useState } from "react";
import Vector from "../images/Vector.svg";
import HomeLeftSide from "./HomeLeftSide";
import UserRightSide from "./UserRightSide";
import background from "../images/background.png";
import bobur from "../images/UserBob.png";
import { Link, Navigate } from "react-router-dom";

const User = () => {
    const [posts, setPosts] = useState([])
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
                <div className="border-b-1 border-px-4 border-indigo-500">
                    <div className="w-100">
                        <header className="py-4 flex justify-between shadow-sm px-5">
                            <h2 className="text-lg font-semibold">Bobur</h2>
                            <Link to='/'> Home</Link>
                            <img src={Vector} alt="" />
                        </header>
                        <div className="relative">
                            <div className=" mx-auto ">
                                <a rel="noreferrer">
                                    <img src={background} alt="" />
                                </a>
                            </div>
                            <div className="px-4 w-100">
                                <div className="flex justify-between" >
                                    <div>
                                        <img className="absolute " style={{ marginTop: '-50px' }} width={'90'} src={bobur} alt="" />
                                        <p className="pt-10 font-semibold">Bobur</p>
                                        <p className="text-gray-400 pb-4">@bobur_mavlonov</p>
                                        <p>UX&UI designer at <span className="text-blue-600">@abutechuz</span></p>
                                    </div>
                                    <div>
                                        <button className="bg-transparent m-4 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 px-4 border border-blue-500 hover:border-transparent rounded-full">
                                            Edit Profile
                                        </button>
                                    </div>
                                    <div>
                                    </div>
                                </div>
                                <div className="flex justify-between text-sm py-5">
                                    <p>Mashagdaman</p>
                                    <p className="text-blue-600">t.me/boburjon_mavlonov</p>
                                    <p>Born November 24, 2000</p>
                                    <p>Joined May 2020</p>
                                </div>
                                <div className="flex gap-3">
                                    <p><span className="font-semibold">67</span> Following </p>
                                    <p><span className="font-semibold">47</span> Followers </p>
                                </div>
                                <div className="flex justify-between font-semibold pt-5">
                                    <p>Tweets</p>
                                    <p>Tweets & replies</p>
                                    <p>Media</p>
                                    <p>Likes</p>
                                </div>
                                <hr
                                 className="w-100 mt-4"/>
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
                    <UserRightSide />
                </div>
            </div>
        </>
    )
}

export default User