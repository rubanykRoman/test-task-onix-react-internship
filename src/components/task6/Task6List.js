import React from 'react';
import Task6ListItem from "./Task6ListItem";

export default function Task6List({quotes,showAddInfo}) {
    return (
        <ol>
            {quotes.map((quoteObj) => (
                <Task6ListItem
                    key={quoteObj.quote_id}
                    quotes={quotes}
                    showAddInfo={showAddInfo}
                    quoteObj={quoteObj}
                ></Task6ListItem>
            ))}
        </ol>
    )
}

