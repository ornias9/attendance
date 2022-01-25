'use strict';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Data about users

const user1 = {
  fullName: 'Aman Singh Maharjan',
  contact: 9860429145,
  designation: 'Trainee',
  pwd: 'aman1',
};

const user2 = {
  fullName: 'Davion Lance',
  contact: 9860429146,
  designation: 'Sr. engineer',
  pwd: 'Dragon9',
};

const users = [user1, user2];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const btnLogin = document.querySelector('#loginBtn');
const btnSubmitAttendance = document.querySelector('#submitAttendanceBtn');

const btnLogout = document.querySelector('#logoutBtn');

const inputLoginUsername = document.querySelector('#inputLoginUsername');
const inputLoginPassword = document.querySelector('#inputLoginPassword');

// Elements from submit Modal
const modalInputUsername = document.querySelector('#modalInputUsername');
const modalInputPassword = document.querySelector('#modalInputPassword');

//////////////////////////////////////////////////////////////////////////////////////////////
// Functions

const createUsernames = function (users) {
  users.forEach(function (user) {
    user.username = user.fullName
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};
createUsernames(users);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Event handlers
let currentUser;

btnLogout?.addEventListener('click', function (e) {
  e.preventDefault();
  location.href = 'login.html';
});

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();

  currentUser = users.find(
    (user) => user.username === inputLoginUsername.value
  );
  // console.log(currentUser);

  if (currentUser?.pwd === inputLoginPassword.value) {
    console.log(currentUser);

    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    location.href = '/index.html';
    // window.open('index.html');
    // history.pushState({}, '', 'index.html');

    currentUser = JSON.parse(localStorage.getItem(currentUser));

    console.log(currentUser);

    // labelWelcome.textContent = `Greetings, ${
    //   currentUser.fullName.split(' ')[0]
    // }`;
  }
});

/*
// ajax
function loadDetails(e) {
  e.preventDefault();

  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'users.json', true);

  xhr.onload = function () {
    if (this.status == 200) {
      const users = JSON.parse(this.responseText);
      // console.log(users);

      // create usernames
      const createUsernames = function (users) {
        users.forEach(function (user) {
          user.username = user.fullName
            .toLowerCase()
            .split(' ')
            .map((name) => name[0])
            .join('');
        });
      };
      createUsernames(users);

      // select currentuser
      currentUser = users.find(
        (user) => user.username === inputLoginUsername.value
      );
      console.log(currentUser);

      if (currentUser?.pwd === inputLoginPassword.value) {
        console.log(currentUser);
        location.href = 'index.html';
        //   // window.open('index.html');
        //   // history.pushState({}, '', 'index.html');

        //   console.log(currentUser);

        //   labelWelcome.textContent = `Greetings, ${
        //     currentUser.fullName.split(' ')[0]
        // }`;
      }
    }
  };

  xhr.send();
}

 */
