import api from '..//..//pages/Home/components/HomeTasks/task14/Users/usersApi';


export const CONTACTS_GET_CONTACTS = 'CONTACTS_GET_CONTACTS';
export const getContacts = () => async (dispatch) => {
    const { data } = await api.get();
    dispatch({
        type: CONTACTS_GET_CONTACTS,
        payload: data,
    });
};

export const CONTACTS_DELETE_CONTACT = 'CONTACTS_DELETE_CONTACT';
export const deleteContact = (payload) => async (dispatch) => {
    await api.delete(payload);
    dispatch({
        type: CONTACTS_DELETE_CONTACT,
        payload,
    });
};

export const CONTACTS_ISLOADING_TOGGLE = 'CONTACTS_ISLOADING_TOGGLE';
export function isLoadingToggle() {
    return { type: CONTACTS_ISLOADING_TOGGLE};
}