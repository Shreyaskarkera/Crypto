import React from 'react'

const JoinUs = () => {
    return (
        <div id="join" className='mt-30 mb-30'>
            <h1 className='text-white text-center font-bold text-6xl'>JOIN US VIA</h1>
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-rose-700 text-center font-bold text-6xl">DISCORD</h1>
            <p className='text-center text-gray-200 mt-3'>Invest and manage all your crypto at one place.</p>
            <div className='flex items-center justify-center m-10'>
                <a href="https://discord.com/"><button className=' py-3 hover:cursor-pointer px-6 bg-gradient-to-r from-blue-600 to-rose-700 rounded-4xl mb-10 text-white font-medium'>Join via Discord</button></a>
            </div>
        </div>
    )
}

export default JoinUs
