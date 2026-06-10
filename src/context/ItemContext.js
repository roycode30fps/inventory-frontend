import { createContext, useContext, useState, useEffect } from 'react'

export const ItemContext = createContext()

export const useItemContext = () => useContext(ItemContext)

export const ItemContextProvider = ({ children }) => {
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  const fetchItems = async () => {
    try {
      const res = await fetch('http://localhost:4000/api/items')
      const json = await res.json()
      if (!res.ok) throw new Error(json.error || 'Failed to fetch')
      setItems(json)
      setError(null)
    } catch (err) {
      setError(err.message)
    }
  }

  useEffect(() => { fetchItems() }, [])

  return (
    <ItemContext.Provider value={{ items, error, fetchItems }}>
      {children}
    </ItemContext.Provider>
  )
}
