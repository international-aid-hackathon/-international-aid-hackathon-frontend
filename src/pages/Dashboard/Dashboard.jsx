import React from 'react';
// import Link from ''
import { Link, useNavigate } from 'react-router-dom'
const Dashboard = ({jobs, jobData}) => {
    console.log('herer',jobData.jobDoc?.length)

    return (
        <>
        <main>
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title"><a> Sales </a></h4>
                    <p className="card-text">Total Sales {jobData.jobDoc?.length} </p>
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
                <Link to="/job">
                    <button className="btn btn-primary"> add jobs</button>
                </Link>
            </div>
        </main>
        </>
    )
}
export default Dashboard
