// import { getCsvData } from '@api'
import { Navbar, Csv } from '@components'
import { getCsvData } from '@mock/backend'
import { useState, useEffect } from 'react'



export const CsvPage = () => {
  const [data, setData] = useState('')

  useEffect(() => {
    const csvData = async () => {
      const csv = await getCsvData()
      const csvData = await csv.text()
      setData(csvData);
    }

    csvData()
  }, [])


  return (
    <div>
      <Navbar />
      <Csv csv={data}/>
    </div>
  )
}