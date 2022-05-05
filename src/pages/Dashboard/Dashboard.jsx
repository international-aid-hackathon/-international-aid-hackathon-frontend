import React from 'react';
// import Link from ''
import { Link, useNavigate } from 'react-router-dom'
const Dashboard = ({jobs}) => {

    return (
        <>
        <main>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title"><a> Sales </a></h4>
                    <p className="card-text">Total Sales 0{jobs.length} </p>
                    <Link to="/history">
                    <button className="btn btn-primary">  sales History </button>
                    </Link>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title"><a>Card title</a></h4>
                    <p className="card-text"> Commissions 0 </p>
                </div>
            </div>
            <div>
                <Link to="/jobs">
                    <button className="btn btn-primary"> add jobs</button>
                </Link>
            </div>
        </main>
        </>
    )
}
export default Dashboard
