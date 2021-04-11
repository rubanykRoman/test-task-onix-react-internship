import React from 'react';
import PropTypes from 'prop-types';

export default function Task7TableRow({ final,
                                        final: { id, year, winner, finalist, flag },
                                        delItem,
                                        isActive }) {
    
    function onDelBtnClick(e) {
        e.stopPropagation();

        delItem(id)
    }

    function onLiClick() {
        isActive(final)
    }

    function onRawDragStart(e) {
        e.target.classList.add(`selected`);
    }

    function onRawDragEnd(e) {
        e.target.classList.remove(`selected`);
    }

    function onRawDragOver(e) {
        e.preventDefault();

        const ListElement = document.querySelector(".finals-list");
        const activeElement = ListElement.querySelector(".selected");
        const currentElement = e.target;

        const isMoveable = activeElement !== currentElement && currentElement.classList.contains("finals-list-item");
        if (!isMoveable) {
            return;
        }

        const nextElement = (currentElement === activeElement.nextElementSibling) ?
                            currentElement.nextElementSibling :
                            currentElement;
        
        ListElement.insertBefore(activeElement, nextElement);        
    }

    return (
        <li
            onClick={onLiClick}
            className={`${flag === true ? "active" : "not-active"} + finals-list-item`}
            draggable="true"
            onDragStart={onRawDragStart}
            onDragEnd={onRawDragEnd}
            onDragOver={onRawDragOver}>
                {`${year} `}   
                {`${winner} `}  
                {`${finalist} `}  
                <button onClick={onDelBtnClick}>del</button>
        </li>
    )
}

Task7TableRow.propTypes = {
    final: PropTypes.object,
    delItem: PropTypes.func,
    isActive: PropTypes.func,
}

