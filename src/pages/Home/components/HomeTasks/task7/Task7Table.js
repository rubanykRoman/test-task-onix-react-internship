import React from 'react';
import PropTypes from 'prop-types';
import Task7TableRow from './Task7TableRow';

export default function Task7Table({ finals, delItem, isActive}) {
    return (
        <>
            <ul className="finals-list">
                {finals.map((final) =>
                    <Task7TableRow
                        key={final.id}
                        final={final}
                        delItem={delItem}
                        isActive={isActive}>
                    </Task7TableRow>)}
            </ul>
        </>
    )
}

Task7Table.propTypes = {
    finals: PropTypes.array,
    delItem: PropTypes.func,
    isActive: PropTypes.func,
}