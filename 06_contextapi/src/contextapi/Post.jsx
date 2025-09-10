import React, { useContext } from 'react'
import { ApiContext, ApiProvider } from './ContextApi'

function Post() {
    const {data , loading} = useContext(ApiContext)
        if(loading) return <h1>Loading....</h1>
    
    console.log(data);
  return (
    <div>Post</div>
  )
}

export default Post