import { useEffect, useState } from 'react';
import React from 'react';

function withGetCrud(Component, api) {
    
    function WithGetCrud() {

        const [list, setList] = useState([])

        useEffect(() => {
            api.get().then(({ data }) => setList(data))
        }, [api]);

        function deleteItem(id) {
            api.delete(id);

            setList(list.filter((item) => item.id !== id));
        }

        function createItem(newItem) {
        
            api.post('', newItem).then(({ data }) =>
                setList((list) => [...list, data])
            );
        }

        function updateItem(updItem) {
            const item = list.find((l) => l.id === updItem.id);
            const newItem = { ...item, name: updItem.name, phone: updItem.phone, email: updItem.email };

            api.put(updItem.id, updItem).then(() => {
                setList(list.map((item) => item.id !== updItem.id ? item : newItem))
            });

        };

        return <Component
            list={list}
            create={createItem}
            update={updateItem}
            remove={deleteItem} />
    }

    return WithGetCrud
}

export default withGetCrud