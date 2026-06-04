import { useState, useEffect } from 'react'

const API_URL = 'https://anurella.github.io/json/planets.json'

function usePlanets() {
  const [planets, setPlanets] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch planet data.')
        return res.json()
      })
      .then((data) => {
        setPlanets(data)
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [])

  return { planets, loading, error }
}

export default usePlanets
