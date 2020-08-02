import React from 'react'
import { Link } from 'react-router-dom'
import TaskItem from './Task/TaskItem'

function ProjectBoard() {
    return (
        <>
            {/* <!-- Project Board Starts Here MIND OTHER COMPONENTS WHEN COPY AND PASTING --> */}
            <div className="container">
                <Link to="/addTask" className="btn btn-primary mb-3">
                    <i className="fas fa-plus-circle"> Create Project Task</i>
                </Link>
                <br />
                <hr />
                {/* <!-- Backlog STARTS HERE --> */}
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-secondary text-white">
                                    <h3>TO DO</h3>
                                </div>
                            </div>

                            {/* <!-- SAMPLE PROJECT TASK STARTS HERE --> */}

                            <TaskItem></TaskItem>
                            
                            {/* <!-- SAMPLE PROJECT TASK ENDS HERE --> */}
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-primary text-white">
                                    <h3>In Progress</h3>
                                </div>
                            </div>
                            {/* <!-- SAMPLE PROJECT TASK STARTS HERE --> */}

                            {/* <!-- SAMPLE PROJECT TASK ENDS HERE --> */}
                        </div>
                        <div className="col-md-4">
                            <div className="card text-center mb-2">
                                <div className="card-header bg-success text-white">
                                    <h3>Done</h3>
                                </div>
                            </div>
                            {/* <!-- SAMPLE PROJECT TASK STARTS HERE --> */}

                            {/* <!-- SAMPLE PROJECT TASK ENDS HERE --> */}
                        </div>
                    </div>
                </div>

                {/* <!-- Backlog ENDS HERE --> */}
            </div>

    {/* <!-- PROJECT BOARD ENDS HERE --> */}
        </>
    )
}

export default ProjectBoard
