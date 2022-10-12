import React from 'react'
import './index.css'

export const Csv: React.FC<{csv: string}> = ({csv}) => {
  return (
    <div className='csv'>
      <textarea value={csv} readOnly></textarea>
    </div>
  )
}