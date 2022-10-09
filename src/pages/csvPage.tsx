import { useEffect, useState } from 'react'
import { Csv } from '../components/csv'
import { Navbar } from '../components/navbar'
import { getToken } from '../services/token'


const getCsvData = async () => {
  const data = await window.fetch(
    `http://localhost:3001/meetupscsv`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    }, 
  )

  return data;
}



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