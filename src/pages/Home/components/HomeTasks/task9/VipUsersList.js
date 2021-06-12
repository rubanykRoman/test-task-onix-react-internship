import React from 'react';
import withGetCrud from '../../../../../hoc/withGetCrud';
import vipUsersApi from '../../../../../services/vipUsersApi';
import Loading from '../../../../../components/Loading/Loading';
import NotFound from '../../../../../components/NotFound/NotFound';

const VipUsersList = ({
  list, remove, isLoading, error 
}) => (
  <>
    { isLoading ? <Loading />
      : (
        <div>
          <h3>VIP Clients</h3>
          <ol>
            {list.map((item) => (
              <li key={item.id} className="user-info">
                {item.name}
                <br />
                {item.phone}
                <br />
                <button onClick={() => remove(item.id)}>del</button>
              </li>
            ))}
          </ol>
        </div>
      )}
    {error ? <NotFound /> : null }
  </>
);

export default withGetCrud(VipUsersList, vipUsersApi);
