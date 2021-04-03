import React from 'react';

export default function Task6ListItem({quoteObj,showAddInfo}) {
    return (
        <li onClick={() => showAddInfo(quoteObj)}>{quoteObj.quote}</li>
    )
}
