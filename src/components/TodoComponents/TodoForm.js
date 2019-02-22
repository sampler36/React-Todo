
import React from 'react';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';

export default class TodoList extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'todos');

        return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} {...props} />);
    }

    render() {
        return (
            <table>
                <TodoHeader />
                <tbody>
                    {this.renderItems()}
                </tbody>
            </table>
        );
    }
}
