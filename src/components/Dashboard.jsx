import { Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome to the Dashboard
        <p>Here is your dashboard</p>
        <Outlet/>
      </h1>
    </div>
  )
}
export default Dashboard