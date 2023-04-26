import React from 'react'
import './description.css'
import {FaArrowDown} from 'react-icons/fa'
import {BiHappy} from 'react-icons/bi'
import {MdCompress, MdOutlineWaterDrop} from 'react-icons/md'

const Description = () => {
   
  // const cards = [
  //   {
  //     id:1,
  //     icon: <FaArrowDown/>,
  //     title: "min",
  //     data:weather
  //   }
  // ]

  return (
    <div className='section section-descriptions'>
      <div className='card'>
        <div className='description-card-icon'>
            <FaArrowDown/>
            <small>min</small>
        </div>
        <h2>32 c</h2>
      </div>
      <div className='card'>
        <div className='description-card-icon'>
            <BiHappy/>
            <small>min</small>
        </div>
        <h2>32 c</h2>
      </div>
      <div className='card'>
        <div className='description-card-icon'>
            <MdCompress/>
            <small>min</small>
        </div>
        <h2>32 c</h2>
      </div>
      <div className='card'>
        <div className='description-card-icon'>
            <MdOutlineWaterDrop/>
            <small>min</small>
        </div>
        <h2>32 c</h2>
      </div>
    </div>
  )
}

export default Description
