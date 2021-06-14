const db = require('./index');
const TodoList = require('./Todo');
const Registration = require('./Authentification')

const testTodo = [
  {
    text: "Test the data",
    isCompleted: false
  },
  {
    text: "Buy food",
    isCompleted: true
  },
  {
    text: "play playstasion",
    isCompleted: false
  },
  {
    text: "going out",
    isCompleted: false
  }
];

const testRegistration = [
  {
    name: "anis",
    password: "12345",
    password_confirmation: "12345"
  }
]

const insertTodo = function () {
  TodoList.create(testTodo)
    .then(() => {
      console.log('Database seeded successfully');
    })
    .catch((error) => {
      console.log('error seeding the database: ', error);
    })
    .finally(() => {
      db.close();
    });
};

insertTodo();


const insertUser = function () {
  Registration.create(testRegistration)
    .then(() => {
      console.log('Database seeded successfully');
    })
    .catch((error) => {
      console.log('error seeding the database: ', error);
    })
    .finally(() => {
      db.close();
    });
};

insertUser();

// const updateTodo = function(){
//   TodoList.update(testTodo)
//     .then(() => {
//       console.log('Database updated successfully');
//     })
//     .catch((error) => {
//       console.log('error updating the database: ', error);
//     })
//     .finally(() => {
//       db.close();
//     });
// }

// updateTodo();