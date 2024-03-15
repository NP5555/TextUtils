import React from 'react'

const CustomButton = ({action,title,bgColor}) => {
//   console.log("🚀 ~ CustomButton ~ props:", props)
  return (
    <button onClick={action} style={{height:60,width:'30%',padding:15,borderRadius:10,backgroundColor:bgColor ? bgColor : 'green',margin:10,color:'white'}}>{title}</button>
  )
}

export default CustomButton
