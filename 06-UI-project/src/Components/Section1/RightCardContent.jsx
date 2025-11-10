import React from 'react'

const RightCardContent = () => {
  return (
    <div>
       <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
          <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
          <div>
            <p className='text-m leading-[1.4] text-white mb-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim quisquam temporibus quos. Enim quisquam.</p>
            <div className='flex justify-between'>
                <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>Satisfied</button>
                <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full'> <i class="ri-arrow-right-line"></i></button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default RightCardContent
