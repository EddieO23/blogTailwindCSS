import React from 'react'

function Cards() {
  return (
    <div className='cards flex flex-wrap w-[90%] md:w-[80%] mx-auto gap-[30px] justify-center'>
      {[...Array(9)].map((item) => 
      <div className="card_body rounded-md shadow-xl p-4 w-[300px] md:w-[30%]">
          <img className='rounded-md'  src="https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&h=500&q=80
" alt="" />
          <h4 className='text-2xl font-bold flex flex-col items-center'>Card Heading</h4>
          <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, accusantium?</p>
        </div>)}
    </div>
  )
}

export default Cards
