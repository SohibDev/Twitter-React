import React from 'react'
import HomeCard from './HomeCard'

const HomeRightSide = () => {
    return (
        <>
            <div className='px-6 py-3' >
                <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" />
                <HomeCard />
            </div>
        </>
    )
}

export default HomeRightSide