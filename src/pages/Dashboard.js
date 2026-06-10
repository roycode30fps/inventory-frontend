import Details from '../components/details'
import Itemforms from '../components/Itemforms'
import { useItemContext } from '../context/ItemContext'

const Dashboard = () => {
  const { items, error } = useItemContext()

  return (
    <div className="page-layout">
      <div className="dashboard">
        <h2>Dashboard</h2>
        {error && <p>{error}</p>}
        <div className="items">
          {items.map((item) => (
            <Details key={item._id} item={item} />
          ))}
        </div>
      </div>
      <div className="form-panel">
        <Itemforms />
      </div>
    </div>
  )
}

export default Dashboard
