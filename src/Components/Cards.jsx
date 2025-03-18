import React from 'react'

function Cards() {
  return (
    <div className='cards flex flex-wrap w-[90%] md:w-[80%] mx-auto'>
      {[...Array(9)].map((item) => 
      <div className="card_body shadow-lg w-[300px] md:w-[30%]">
          <img className=''  src="https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80)" alt="" />
          <h4>Card Heading</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, accusantium?</p>
        </div>)}
    </div>
  )
}

export default Cards
