import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
    doDummyAction,
} from '../actions';
import { fetchTasks } from '../utils/api';

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
                                <button className='task-button'>
                                    {task.number} {task.unit} of {task.name}
                                </button>
                            </li>
                        )
                    )}
                </ol>
            </div>
        );
    }
}

export default connect()(Main);
