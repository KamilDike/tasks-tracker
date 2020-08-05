import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classnames from 'classnames'
import { getTaskAction } from '../../actions/TaskActions'

function UpdateTask(props) {
    useEffect(() => {
        const { task_id } = props.match.params;
        props.getTaskAction(task_id); 
    }, [])

    return (
        <div className="addProjectTask">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                        <Link to="/" className="btn btn-light">
                            Back to Board
                        </Link>
                        <h4 className="display-4 text-center">Add /Update Project Task</h4>
                        <form>
                            <div className="form-group">
                                <input type="text" className="form-control form-control-lg" name="summary" placeholder="Project Task summary" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control form-control-lg" placeholder="Acceptance Criteria" name="acceptanceCriteria"></textarea>
                            </div>
                            <div className="form-group">
                                <select className="form-control form-control-lg" name="status">
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
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    task: state.task,
    errors: state.errors
})

export default connect(mapStateToProps, {getTaskAction}) (UpdateTask);
