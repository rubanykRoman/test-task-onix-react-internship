import React, { useEffect } from 'react';
import UsersList from './Users/UsersList';
import { getContacts, deleteContact, isLoadingToggle} from '../../../../../store/task14/actions';
import { connect } from 'react-redux';
import './Task14.scss';
import Loading from '../../../../../components/Loading/Loading';
import TaskCard from '../../../../../components/TaskCard';

function Task14({ contacts, getContacts, deleteContact, isLoading, isLoadingToggle }) {
    
    useEffect(() => {
        getContacts();
    }, [getContacts]);


    const onUpdateClick = async () => {
        isLoadingToggle();
        await getContacts();
        isLoadingToggle()
    }

    return (
        <>
            <TaskCard
                taskNumber="14"
            ></TaskCard>
            <button
                onClick={onUpdateClick}
                className="updButton"
            >
                {isLoading ?
                    <Loading /> :
                    <p>UPDATE CONTACTS</p>
                }
            </button>
            <div className='task-14'>
                <UsersList
                    contacts={contacts}
                    deleteContact={deleteContact}
                />
            </div>
        </>
    )
}

const mapStateToProps = ({task14reducer:{ contacts, isLoading }}) => ({
    contacts,
    isLoading,
});

const mapDispatchToProps = {
    getContacts,
    deleteContact,
    isLoadingToggle
};

export default connect(mapStateToProps, mapDispatchToProps)(Task14)