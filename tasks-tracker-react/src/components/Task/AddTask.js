import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { addTaskAction } from '../../actions/TaskActions'

function AddTask(props) {
    const [summary, setSummary] = useState("")
    const [acceptanceCriteria, setAcceptanceCriteria] = useState("")
    const [status, setStatus] = useState("")
    const [errors, setErrors] = useState("")

    useEffect(() => {
        setErrors(props.errors)
    }, [props.errors])

    function onSubmit(e) {
        e.preventDefault()
        const newTask = {
            summary: summary,
            acceptanceCriteria: acceptanceCriteria,
            status: status
        };
        console.log(newTask)
        props.addTaskAction(newTask, props.history)
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
                                <input type="text" className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.summary})}
                                    name="summary" placeholder="Project Task summary" value={summary}
                                    onChange={e => setSummary(e.target.value)}
                                />
                                {
                                    errors.summary && (
                                        <div className="invalid-feedback">{errors.summary}</div>
                                    )
                                }
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

AddTask.propTypes = {
    addTaskAction: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    errors: state.errors
})

export default connect(mapStateToProps, {addTaskAction}) (AddTask);
