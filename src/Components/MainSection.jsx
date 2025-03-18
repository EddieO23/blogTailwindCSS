import React from 'react'

function MainSection() {
  return (
    <div className='contain flex w-[90%] md:w-[80%] mx-auto justify-between items-center flex-col md:flex-row my-[80px] gap-[50px]'>
      <div className="container_body flex flex-col gap-[20px] md:w-[60%] w-[80%]">
        <h2 className='text-3xl font-bold'>Heading</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam, nihil similique sapiente quasi ipsa numquam eaque! Soluta autem impedit voluptate repellendus doloribus repellat, ad aspernatur quis nihil, fuga error numquam voluptas hic ipsa, cum corporis quae incidunt tempore consequuntur porro sint eaque expedita? Illo doloremque aliquid est quidem fuga nesciunt! Debitis rerum deleniti expedita necessitatibus autem accusantium distinctio enim deserunt nulla, error cum, nemo nihil optio vitae vel ab ut, magnam fuga libero. Architecto, itaque similique dolore error necessitatibus provident molestiae, tempora excepturi doloremque, aperiam ea dicta praesentium ipsam vel distinctio velit porro beatae quae accusamus eveniet dolorem? Dicta beatae doloribus quas. Necessitatibus, qui. Eveniet possimus accusamus dolorum incidunt beatae.</p>
      </div>
        <img className='rounded-xl'  src="https://images.unsplash.com/photo-1641326201918-3cafc641038e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&q=80)" alt="" />
    </div>
  )
}

export default MainSection
