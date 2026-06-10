import { useState } from "react"
import { useItemContext } from '../context/ItemContext'

const Itemforms = () => {
  const { fetchItems } = useItemContext()
  const [error, setError] = useState(null)
  const [title, setTitle] = useState('')
  const [how, setHow] = useState('')
  const [size, setSize] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    const item = { title, how: Number(how), size }

    const response = await fetch('https://inventory-backend.vercel.app/api/items', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      return
    }

    setTitle('')
    setHow('')
    setSize('')
    setError(null)
    fetchItems()
  }

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Item</h3>

      <label>Item:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />

      <label>How Many:</label>
      <input
        type="number"
        onChange={(e) => setHow(e.target.value)}
        value={how}
      />

      <label>Size:</label>
      <input
        type="text"
        onChange={(e) => setSize(e.target.value)}
        value={size}
      />

      <button>Add Item</button>
      {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Itemforms
