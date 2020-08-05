import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteTaskAction } from '../../actions/TaskActions'

function TaskItem(props) {
    const { task } = props

    function onDeleteClick(task_id) {
        props.deleteTaskAction(task_id)
    }

    return (
        <div className="card mb-1 bg-light">
            <div className="card-header text-primary">
                ID: {task.id}
            </div>
            <div className="card-body bg-light">
                <h5 className="card-title">
                    {task.summary}
                </h5>
                <p className="card-text text-truncate ">
                    {task.acceptanceCriteria}
                </p>
                <Link to={`updateTask/${task.id}`} className="btn btn-primary">
                    View / Update
                </Link>

                <button className="btn btn-danger ml-4" onClick={() => onDeleteClick(props.task.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}

TaskItem.propTypes = {
    deleteTaskAction: PropTypes.func.isRequired
}

export default connect(
    null, 
    {deleteTaskAction}
) (TaskItem);
