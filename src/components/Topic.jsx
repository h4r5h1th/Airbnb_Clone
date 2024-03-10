import React from 'react'
import './Topic.css'

const Topic = ({topic, setCategory}) => {
  function NewCategory(){
    setCategory(topic?.key);
  }
  return (
    <div className='Topic_Parent_div' onClick={NewCategory}>
        <img src={topic?.image} alt='topic_loading' className="topic__image"/>
        <p className='Topic_Title'>{topic?.title}</p>
    </div>
  )
}

export default Topic