import { NavLink } from 'react-router-dom';

function Home() {
  return (
    <>
    <div>Home</div>
    <NavLink to="/about"><button>About</button></NavLink></>
  )
}

export default Home;