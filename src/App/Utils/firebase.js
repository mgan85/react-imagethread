import firebase from 'firebase';

firebase.initializeApp({
    apiKey: 'AIzaSyDcV2kTpYbyQN2PWu6GSA0ok7NpQL7uCZc',
    databaseURL: 'https://imagethread-miniproject.firebaseio.com/',
    storageBucket: 'gs://imagethread-miniproject.appspot.com'
});

export const storage = firebase.storage().ref();
export const database = firebase.database();



