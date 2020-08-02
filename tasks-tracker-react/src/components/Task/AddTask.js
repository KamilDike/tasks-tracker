import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AddTask() {
    const [summary, setSummary] = useState("")
    const [acceptanceCriteria, setAcceptanceCriteria] = useState("")
    const [status, setStatus] = useState("")

    function onSubmit(e) {
        e.preventDefault()
        const newTask = {
            summary: summary,
            acceptanceCriteria: acceptanceCriteria,
            status: status
        };
        console.log(newTask)
    }

    return (
        <div className="addProjectTask">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to="/" className="btn btn-light">
                            Back to Board
                        </Link>
                        <h4 className="display-4 text-center">Add /Update Project Task</h4>
                        <form onSubmit={onSubmit}>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" name="summary" placeholder="Project Task summary" value={summary}
                                    onChange={e => setSummary(e.target.value)}
                                />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria" value={acceptanceCriteria}
                                    onChange={e => setAcceptanceCriteria(e.target.value)}>
                                </textarea>
                            </div>
                            <div className="form-group">
                                <select className="form-control form-control-lg" name="status" value={status}
                                    onChange={e => setStatus(e.target.value)}>
                                    <option value="">Select Status</option>
                                    <option value="TO_DO">TO DO</option>
                                    <option value="IN_PROGRESS">IN PROGRESS</option>
                                    <option value="DONE">DONE</option>
                                </select>
                            </div>
                            <input type="submit" className="btn btn-primary btn-block mt-4"/>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddTask
