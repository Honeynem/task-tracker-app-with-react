import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

//using props in another way-->
const Header = ({title , onAdd , showAdd}) => {

  return (
    <header className='header'>
        {/* for css in js use style ={headingStyle} */}
        <h1 >{title}</h1>
        <Button 
        color={showAdd ? 'red' : 'green'} 
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd} />
    </header>
  ) 
}
//CSS IN JS
// const headingStyle={
//     color: 'red',
//     backgroundColor: "black"
// }
Header.defaultProps = {
    title : 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string
}
export default Header
