function dynamicOpenModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) {
    modal.classList.add("open");

    const closeBtn = modal.querySelector(".modal-close");
    closeBtn.addEventListener("click", () => {
      dynamicCloseModal(selector);
    });
  }
}

function dynamicCloseModal(selector) {
  const modal = document.querySelector(selector);
  if (modal) {
    modal.classList.remove("open");
  }
}

const openRegFormBtn = document.querySelector("#open-reg-form");
openRegFormBtn.addEventListener("click", () => {
  dynamicOpenModal("#reg-modal");
});

const onFormSubmitSuccess = (fields) => {
  if (fields.id) {
    updateUser(fields);
  } else {
    createUser(fields);
  }
};
const onFormSubmitError = (fields) => {
  console.log("Error", fields);
};

const regForm = document.querySelector("#reg"),
  user_Name = document.querySelector("#user_name"),
  userSurname = document.querySelector("#user_surname"),
  userEmail = document.querySelector("#user_email"),
  userPhone = document.querySelector("#user_phone"),
  userPersonalID = document.querySelector("#user_personal-id"),
  userZip = document.querySelector("#user_zip-code"),
  userGender = document.querySelector("#user_gender"),
  user_id = document.querySelector("#user_id");

regForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const userData = {
    id: user_id.value,
    first_name: user_Name.value,
    last_name: userSurname.value,
    phone: userPhone.value,
    id_number: userPersonalID.value,
    email: userEmail.value,
    gender: userGender.value,
    zip_code: userZip.value,
  };
  regForm.reset();
});

function getUsers() {
  fetch("http://borjomi.loremipsum.ge/api/get-user/${id}")
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}
getUsers();

async function getUsers() {
  try {
    const response = await fetch(
      "http://borjomi.loremipsum.ge/api/get-user/${id}"
    );
    const users = await response.json();
    renderUser(users);
  } catch (e) {
    console.log("Error - ", e);
  }
}
getUsers();

function renderUser() {
  const userTableContainer = document.querySelector("#user-list");
  const userTableBody = userTableContainer.querySelector("tbody");
}

async function renderUsers(usersArray) {
  const tableBody = document.querySelector("tbody");
  let tableBodyContent = "";
  for (let index = 0; index < usersArray.length; index++) {
    const user = usersArray[index];
    tableBodyContent =
      tableBodyContent +
      `<tr>
        <td>${user.id}</td>
        <td>${user.email}</td>
        <td>${user.first_name}</td>
        <td>${user.last_name}</td>
        <td>${user.gender}</td>
        <td>${user.mobile}</td>
        <td>${user.pn}</td>
        <td>${user.zip}</td>
        <td>${user.status}</td>
        <td>
            <button class="user-edit" data-user-id="${user.id}">Edit</button>
            <button class="user-remove" data-user-id="${user.id}">Delete</button>
        </td>
      <tr>
      `;
  }

  tableBody.innerHTML = tableBodyContent;
  await userActions();
}

getUsers();
const removeBtns = document.querySelectorAll(".user-remove");
const editBtn = document.querySelectorAll(".user-edit");

removeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const tr = e.target.parentNode.parentNode;
    tr.remove();
    console.log(tr);
  });
});
console.log(removeBtns);
console.log(editBtn);

removeBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const tr = e.target.parentNode.parentNode;
    tr.remove();
    console.log(tr);
  });
});

function getUser(id) {
  fetch(`http://borjomi.loremipsum.ge/api/get-user/${id}`, {
    method: "get",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      getUsers();
    })
    .catch((error) => {
      console.log(error);
    });
}

function deleteUser(id) {
  fetch(`http://borjomi.loremipsum.ge/api/delete-user/${id}`, {
    method: "delete",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
}

async function updateUser(userObj) {
  POST`http://borjomi.loremipsum.ge/api/update-user/${userObj.id}`;
}
async function deleteUser(userId) {
  DELETE`http://borjomi.loremipsum.ge/api/update-user/${userObj.id}`;
}

const btn = document.querySelector("#get-users");
btn.addEventListener("click", (e) => {
  getUsers();
});

async function createUser(userData) {
  try {
    const response = await fetch("http://borjomi.loremipsum.ge/api/register", {
      method: "post",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });
    await response.json();
    getUsers();
  } catch (e) {
    console.log("Error - ", e);
  }
}
