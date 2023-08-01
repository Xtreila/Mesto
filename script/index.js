const editButtonElem = document.querySelector('.profile__edid_button'); 
const popupElem = document.querySelector('.popup');
const popupCloseElem = document.querySelector('.popup__close');

const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('input[name="nameUser"]');
const jobInput = document.querySelector('input[name="jobUser"]');


const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');


// 
function openPopup (element) {
    element.classList.add('popup_opened');
}

function closePopup (element) {
    element.classList.remove('popup_opened')
}

editButtonElem.addEventListener('click', () => {
    openPopup(popupElem);
});

popupCloseElem.addEventListener('click', () => {
    closePopup(popupElem);
 });


// 

function getValueInputs () {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
}

function handleFormSubmit (evt) {
    evt.preventDefault(); 
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    closePopup(popupElem);
   }

formElement.addEventListener('submit', handleFormSubmit); 

// function openPopup (element) {
//     element.classList.add('popup_opened');
// }

// ___________________________________________
// editButtonElem.addEventListener('click', () => {
//     popupElem.classList.add('popup_opened');
// });

// popupCloseElem.addEventListener('click', () => {
//     popupElem.classList.remove('popup_opened');
// });