import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    doDummyAction,
} from '../actions';
import Task from './Task';
import { fetchTasks, completeTask } from '../utils/api';

class Main extends Component {
    state = {
        tasks: [],
    };

    async componentDidMount() {
        await this.getTasks();
    }

    async getTasks() {
        try {
            this.setState({
                tasks: await fetchTasks(),
            });
        } catch (err) {
            console.log("Error getting tasks");
        }
    }

    onCompleteTask(id) {
        return async () => {
            console.log("completing task " + id);
            await completeTask(id);
        }
    }

    render() {
        return (
            <div>
                <h1 className='header'>
                    Living room of Takeshi
                </h1>
                <ol className='task-list'>
                    {this.state.tasks && this.state.tasks.map(
                        (task) => (
                            <li className='task' key={task.id}>
                                <Task task={task} onComplete={this.onCompleteTask(task.id)}/>
                            </li>
                        )
                    )}
                </ol>
            </div>
        );
    }
}

export default connect()(Main);
