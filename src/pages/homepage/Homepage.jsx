import React, {useEffect} from 'react'
import { testApi } from '../../apis/Api'

const Homepage = () => {

  // Print Hello after page load, Automatic
  useEffect(()=>{
    console.log("Hello!!")

    // calling test api
    testApi().then((res) => {
      console.log(res)
    })

  })

  return (
    <div>Homepage</div>
  )
}

export default Homepage