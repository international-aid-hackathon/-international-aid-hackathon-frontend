import React from 'react';
// import Link from ''
import { Link, useNavigate } from 'react-router-dom'
const Dashboard = () => {

    return (
        <>
        <main>
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title"><a> Sales </a></h4>
                    <p class="card-text">Total Sales 0 </p>
                </div>
            </div>
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title"><a>Card title</a></h4>
                    <p class="card-text"> Commissions 0 </p>
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
