import { connect } from 'react-redux';
import { actions } from '../constants';
import { dispatchAction } from '../utils/common';
import TodoList from '../components/TodoList';

function mapStateToProps(state) {
    return {
        todos: state.todos,
    };
}


function mapDispatchToProps(dispatch) {
    return {
        onTodoClick(id) {
            dispatch(dispatchAction(actions.TOGGLE_TODO, { id }));
        }
    }
}

const Todos = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default Todos;