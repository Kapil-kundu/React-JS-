import React from 'react'

const Footer = () => {
  let footerStyle = {
   position : 'relative',
   top: '60vh',
   height: '10vh',
  }
  return (
    <footer className='bg-dark text-light py-3' style ={footerStyle} >
      <p className="text-center">Copyright &copy; MyTodosList.com</p>
    </footer>
  )
}

export default Footer
