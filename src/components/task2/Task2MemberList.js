import React from 'react';
import Task2MemberListItem from './Task2MemberListItem';

export default function Task2MemberList({names}) {
    return (
        <div className="new-members">
            <h4>Last New members:</h4>
            <ul>
                {names.map((name) => (
                    <Task2MemberListItem
                        key= {name}
                        name= {name}
                    ></Task2MemberListItem>
                ))}
            </ul>
        </div>
    )
}
