import {
    CONTACTS_GET_CONTACTS,
    CONTACTS_DELETE_CONTACT,
    CONTACTS_ISLOADING_TOGGLE
} from './actions';

const initialState = {
    contacts: [],
    isLoading: false,
};

const task14reducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CONTACTS_GET_CONTACTS:
            return { ...state, contacts: payload };
        case CONTACTS_DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter((el) => el.id !== payload),
            };
        case CONTACTS_ISLOADING_TOGGLE:
            return {
                ...state,
                isLoading: !state.isLoading
            };
        default:
            return state;
    }
}

export default task14reducer;