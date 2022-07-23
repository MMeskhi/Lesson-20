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

const createUserUrl = "http://borjomi.loremipsum.ge/api/register", //method POST
  getAllUsersUrl = "http://borjomi.loremipsum.ge/api/all-users", //method GET
  getSingleUserUrl = "http://borjomi.loremipsum.ge/api/get-user/1 ", //id method  GET
  updateUserUrl = "http://borjomi.loremipsum.ge/api/update-user/1 ", //id method PUT
  deleteUserUrl = "http://borjomi.loremipsum.ge/api/delete-user/1"; //id method DELETE

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
