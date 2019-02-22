import React from 'react';

export default class TodoHeader extends React.Component {
    render() {
        return (
            <thead>
                <tr>
                    <th>Task</th>
                    <th>Action</th>
                </tr>
            </thead>
        );
    }
}
