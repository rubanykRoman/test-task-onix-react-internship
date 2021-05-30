import React from 'react';
import PropTypes from 'prop-types';

const Task7ListItem = ({ final: {
    id, year, winner, finalist, flagActive, flagSelected },
    delItem,
    flagToggle}) => {
    
    const onDelBtnClick = (e) => {
        e.stopPropagation();

        delItem(id)
    }

    const onRawDragOver = (e) => {
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
            onClick={(e)=>flagToggle(id,e)}
            className={`${flagActive === true ? "active" : "not-active"} 
                        ${flagSelected === true ? "selected" : "not-selected"} 
                        finals-list-item`
                    }
            draggable="true"
            onDragStart={(e)=>flagToggle(id,e)}
            onDragEnd={(e)=>flagToggle(id,e)}
            onDragOver={onRawDragOver}>
                {`${year} `}   
                {`${winner} `}  
                {`${finalist} `}  
                <button onClick={onDelBtnClick}>del</button>
        </li>
    )
}

Task7ListItem.propTypes = {
    final: PropTypes.object,
    delItem: PropTypes.func,
    flagToggle: PropTypes.func,
}

export default Task7ListItem;
