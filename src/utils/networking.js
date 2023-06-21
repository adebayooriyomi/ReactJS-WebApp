
import {useState, useEffect} from 'react';

export const useNetwork = (url) => {
  const [data, setData ] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const fetchData = async () => {
    try{
      setLoading(true)
      const respData = await fetch(url).then(response => response.json())
      setData(respData.articles)
      setLoading(false)
    }catch(error){
      console.error(error)
      setError("Network Error")
      setLoading(false)
    }
  }

  useEffect(()=> {
    fetchData()
  },[url])

  return { data, error, loading}
}
