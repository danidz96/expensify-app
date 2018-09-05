import * as firebase from 'firebase';
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };

// database.ref('expenses')
//   .once('value')
//   .then(snapshot => {
//       const expenses = [];

//       snapshot.forEach(childSnapshot => {
//           expenses.push({
//               id: childSnapshot.key,
//               ...childSnapshot.val()
//           })
//       })
//       console.log(expenses);
//   })

// SUBSCIBE ON EXPENSES CHANGE
// database.ref('expenses').on('value', snapshot => {
//     const expenses = [];

//     snapshot.forEach(childSnapshot => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// });

// SUBSCRIBE ON CHILD REMOVE
// database.ref('expenses').on('child_removed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// })

// SUBSCRIBE ON CHILD CHANGE
// database.ref('expenses').on('child_changed', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// })

// SUBSCRIBE ON CHILD ADDED
// database.ref('expenses').on('child_added', snapshot => {
//     console.log(snapshot.key, snapshot.val());
// })


// database.ref('expenses').push({
//     description: 'Boots',
//     note: '',
//     amount: 50,
//     createdAt: 1000
// });

// database.ref('notes/-LLUy230EGSG0rnFWq0S').remove()

// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'Js, React, Angular'
// })

// const fireBaseNotes = {
//     notes: {
//         '12eada': {
//             title: 'First note',
//             body: 'This is my note'
//         },
//         '12edasdada': {
//             title: 'Second note',
//             body: 'This is my note'
//         },
//     }
// }

// database.ref().set({
//     name: 'Dani Domínguez',
//     age: 22,
//     isSingle: false,
//     stressLevel: 6,
//     location: {
//         city: 'Barcelona',
//         coutry: 'Spain'
//     },
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('This failed: ' + e);
// })

// ADD OR MODIFY DATA 

// database.ref('attributes').set({
//     height: 170 + 'cm',
//     weight: 57
// }).then(() => {
//     console.log('Second set call worked');
// }).catch((e) => {
//     console.log('Error on the second', e);
// })

// REMOVE DATA

// database.ref('isSingle').remove()
//   .then(() => { console.log('Remove succedded') })
//   .catch(e => { console.log('error', e) })

// database.ref('isSingle').set(null);

// UPDATE DATA

// database.ref().update({
//     name: 'Mike',
//     age: 16,
//     job: 'Software Developer',
//     isSingle: null,
//     'location/city': 'Madrid'
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// })

// FETCH DATA (on, off, once)

// const onValueChange = database.ref().on('value', snapshot => {
//     console.log(snapshot.val());
// });

// setTimeout(() => {
//     database.ref('name').set('Dani')
// }, 3000);
// setTimeout(() => {
//     database.ref().off(onValueChange)
// }, 7000);
// setTimeout(() => {
//     database.ref('name').set('Andrew')
// }, 10000);

// database.ref().on('value', snapshot => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// })

// database.ref('name').set('Dani');
// database.ref('job/company').set('Google');

// setTimeout(() => {
//     database.ref('name').set('Mike')
// }, 3000);

// database.ref('name')
//     .once('value')
//     .then(snapshot => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(e => { console.log('Error fetching data', e) })