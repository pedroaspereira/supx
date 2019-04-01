export const createOrder = (order) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore()
        const profile = getState().firebase.profile
        const authorId = getState().firebase.auth.uid
        firestore.collection('orders').add({
            ...order,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_ORDER', order })
        }).catch((err) => {
            dispatch({ type: 'CREATE_ORDER_ERROR', err})
        })
    }
};