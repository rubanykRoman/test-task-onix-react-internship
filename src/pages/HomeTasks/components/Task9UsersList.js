import React from 'react';
import Loading from '../../../components/Loading/Loading';
import NotFound from '../../../components/NotFound/NotFound';
import withGetCrud from '../../../hoc/withGetCrud';

const URI = '/users'

const Task9UsersList = ({list, remove, isLoading, error }) => 
  <>
    { isLoading ? <Loading />
      : (
        <div>
          <h3>Clients</h3>
          <ol>
            {list.map((item) => (
              <li key={item.id} className="user-info">
                {item.name} 
                {' '}
                <br />
                {item.email} 
                {' '}
                <br />
                <button onClick={() => remove(item.id)}>del</button>
              </li>
            ))}
          </ol>
        </div>
      )}
    {error ? <NotFound /> : null }
  </>

export default withGetCrud(Task9UsersList, URI);
