import React from 'react';
import PropTypes from 'prop-types';
import Task7ListItem from './Task7ListItem';

const Task7List = ({ finals, delItem, flagToggle}) => {
    return (
        <ul className="finals-list">
            {finals.map((final) =>
                <Task7ListItem
                    key={final.id}
                    final={final}
                    delItem={delItem}
                    flagToggle={flagToggle}>
                </Task7ListItem>)}
        </ul>
    )
}

Task7List.propTypes = {
    finals: PropTypes.array,
    delItem: PropTypes.func,
    flagToggle: PropTypes.func,
}

export default Task7List;