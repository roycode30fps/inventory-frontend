import { useItemContext } from '../context/ItemContext'

const Details = ({ item }) => {
    const { fetchItems } = useItemContext()

    const handleClick = async () => {
        const response = await fetch(`http://localhost:4000/api/items/${item._id}`, {
            method: 'DELETE'
        })
        await response.json()

        if (response.ok) {
            fetchItems()
        }
    }

    return (
        <div className="details">
            <h4>{item.title}</h4>
            <p><strong>Quantity:</strong> {item.how}</p>
            <p><strong>Size:</strong> {item.size}</p>
            <p><strong>Added:</strong> {new Date(item.createdAt).toLocaleDateString()}</p>
            <span className="delete-btn" onClick={handleClick}>Delete</span>
        </div>
    )
}

export default Details
