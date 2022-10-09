import React from 'react'
import '../styles/csv.css'

export const Csv: React.FC<{csv: string}> = ({csv}) => {
  return (
    <div className='csv'>
      <textarea value={csv} readOnly></textarea>
    </div>
  )
}