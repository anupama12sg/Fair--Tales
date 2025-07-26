import React from 'react'
import logo1 from '../assets/logo1.webp'

const Fairtales = () => {
    return (
        <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>

            {/*-----title----*/}
            <div className='flex items-center mt-7 gap-2 '>
                <img className='w-12' src={logo1} alt="" />
                <h1 className='text-3xl font-semibold font-serif'>FairTales</h1>
                <div className='bg-amber-200 flex-row-3'>
                    <h4 className='italic gap-y-4'>"Stories need freedom, not filters."</h4>
                </div>

            </div>

        </div>
    )
}

export default Fairtales
