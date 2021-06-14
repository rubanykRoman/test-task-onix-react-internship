import React, { useEffect, useState } from 'react';
import api from '../services/usersApi';

const withGetCrud = (Component, URI) => {
  const WithGetCrud = () => {
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      api.get(URI).then(({ data }) => setList(data))
        .catch((err) => setError(err))
        .finally(() => setIsLoading(false));
    }, [api]);

    const deleteItem = (id) => {
      api.delete(id);

      setList(list.filter((item) => item.id !== id));
    };

    const createItem = (newItem) => {
      api.post('', newItem).then(({ data }) => setList((list) => [...list, data]));
    };

    const updateItem = (updItem) => {
      const item = list.find((l) => l.id === updItem.id);
      const newItem = {
        ...item, name: updItem.name, phone: updItem.phone, email: updItem.email 
      };

      api.put(updItem.id, updItem).then(() => {
        setList(list.map((item) => (item.id !== updItem.id ? item : newItem)));
      });
    };

    return (
      <Component
        list={list}
        create={createItem}
        update={updateItem}
        remove={deleteItem}
        isLoading={isLoading}
        error={error}
      />
    );
  };

  return WithGetCrud;
};

export default withGetCrud;
