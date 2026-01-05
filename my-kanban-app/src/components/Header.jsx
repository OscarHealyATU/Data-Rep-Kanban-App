import { Link } from "react-router-dom";
import './Header.css'
export default function Header({ pageName }) {
    return (
        <div className="header">
            <h1>{pageName}</h1>
            <div className='headerBtns'>
                <Link to="/">
                    <button className='btn btn-dark'>Dashboard</button>
                </Link>
                <Link to="/create">
                    <button className='btn btn-dark'>Add Task</button>
                </Link>
                <Link to="/archive">
                    <button className='btn btn-dark'>View Archive</button>
                </Link>
            </div>
        </div>
    )
};