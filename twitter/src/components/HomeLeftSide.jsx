import React from 'react'
import twitterLogo from '../images/twitter.svg'
import home from '../images/home.svg'
import explore from '../images/explore.svg'
import notification from '../images/notification.svg'
import message from '../images/mess.svg'
import bookmark from '../images/book.svg'
import lists from '../images/list.svg'
import profile from '../images/prof.svg'
import more from '../images/more.svg'
import person from '../images/person.svg'

const HomeLeftSide = () => {
    return (
        <>
            <img width={'45'} src={twitterLogo} alt="" />
            <ul className='py-10'>
                <li className='flex gap-3 py-2'><img width={'20'} src={home} alt="" /> Home</li>
                <li className='flex gap-3 py-2'><img width={'20'} src={explore} alt="" /> Explore</li>
                <li className='flex gap-3 py-2'><img width={'20'} src={notification} alt="" /> Notifications</li>
                <li className='flex gap-3 py-2'><img width={'20'} src={message} alt="" /> Messages</li>
                <li className='flex gap-3 py-2'><img width={'20'} src={bookmark} alt="" /> Bookmarks</li>
                <li className='flex gap-3 py-2'><img width={'20'} src={lists} alt="" /> Lists</li>
                <li className='flex gap-3 py-2'><img width={'20'} src={profile} alt="" /> Profile</li>
                <li className='flex gap-3 py-2'><img width={'20'} src={more} alt="" /> More</li>
            </ul>
            <button className='w-52 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full'> Tweet </button>

            <div className='flex align-align-items-center gap-3 mt-36'>
                <img width={'45'} src={person} alt="" />
                <div>
                    <p>Bobur</p>
                    <p>@bobur_mavlonov</p>
                </div>
                <div className='text-2xl'>
                    ...
                </div>
            </div>
        </>
    )
}

export default HomeLeftSide