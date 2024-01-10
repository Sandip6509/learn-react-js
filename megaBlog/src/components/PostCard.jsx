import React from 'react'
import appwriteService from '../appWrite/config'
import {Link} from 'react-router-dom'
const PostCard = ({$id, title, featureImage}) => {
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full bg-gray-100 rounded-xl'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featureImage)} alt={title} className='rounded-xl' />
            </div>
            <h2>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard