import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UsersList from './Task14UsersList';
import { getContacts, deleteContact, isLoadingToggle } from '../../../store/task14/actions';
import '../scss/Task14.scss';
import Loading from '../../../components/Loading/Loading';
import TaskCard from '../../../components/TaskCard';

const Task14 = ({
  contacts, getContacts, deleteContact, isLoading, isLoadingToggle 
}) => {
  useEffect(() => {
    getContacts();
  }, [getContacts]);

  const onUpdateClick = async () => {
    isLoadingToggle();
    await getContacts();
    isLoadingToggle();
  };

  return (
    <>
      <TaskCard taskNumber="14" />
      {!isLoading 

        ? <button onClick={onUpdateClick} className="updButton">UPDATE CONTACTS</button>
        : <Loading />}

      <div className="task-14">
        <UsersList
          contacts={contacts}
          deleteContact={deleteContact}
        />
      </div>
    </>
  );
};

const mapStateToProps = ({ task14reducer: { contacts, isLoading } }) => ({
  contacts,
  isLoading,
});

const mapDispatchToProps = {
  getContacts,
  deleteContact,
  isLoadingToggle
};

export default connect(mapStateToProps, mapDispatchToProps)(Task14);
