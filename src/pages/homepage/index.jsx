import { Link } from 'react-router-dom'

let Homepage = () => {
    return (
        <div>
            <h1>Home page</h1>
            <Link exact to={'/aboutus'}>go to about us</Link>
        </div>
    )
}

export default Homepage