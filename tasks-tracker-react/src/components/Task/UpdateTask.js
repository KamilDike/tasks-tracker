import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { getTaskAction, addTaskAction } from '../../actions/TaskActions'

function UpdateTask(props) {
    const [id, setId] = useState("")
    const [summary, setSummary] = useState("")
    const [acceptanceCriteria, setAcceptanceCriteria] = useState("")
    const [status, setStatus] = useState("")
    const [errors, setErrors] = useState({})

    useEffect(() => {
            const { task_id } = props.match.params;
            props.getTaskAction(task_id)
    }, [])

    useEffect(() => {
        if (props.errors) {
            console.log(props.errors)
            setErrors(props.errors)
        }

        setId(props.task.id)
        setSummary(props.task.summary)
        setAcceptanceCriteria(props.task.acceptanceCriteria)
        setStatus(props.task.status)
    }, [props])

    function onSubmit(e) {
        e.preventDefault()
        const updatedTask = {
            id: id,
            summary: summary,
            acceptanceCriteria: acceptanceCriteria,
            status: status
        };
        console.log(updatedTask)
        props.addTaskAction(updatedTask, props.history)
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
                                <input type="text" 
                                className={classnames("form-control form-control-lg", {
                                    "is-invalid": errors.summary
                                })}
                                name="summary" placeholder="Project Task summary" value={summary}
                                    onChange={e => setSummary(e.target.value)}/>
                            </div>
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria" value={acceptanceCriteria}
                                    onChange={e => setAcceptanceCriteria(e.target.value)}></textarea>
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
                            <input type="submit" className="btn btn-primary btn-block mt-4" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

UpdateTask.propTypes = {
    task: PropTypes.object.isRequired,
    getTaskAction: PropTypes.func.isRequired,
    addTaskAction: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    task: state.tasks.task,
    errors: state.errors
})

export default connect(mapStateToProps, {getTaskAction, addTaskAction}) (UpdateTask);
