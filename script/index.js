// popup
const editButtonElem = document.querySelector('.profile__edid-button'); 
const popupElem = document.querySelector('.popup');
const popupCloseElem = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');


const addButtonElem = document.querySelector('.profile__add-button');
const formElem = document.querySelector('.form');
const formCloseElem = document.querySelector('.form__close');
const formItem = document.querySelector('.form__item');
const nameImage = document.querySelector('input[name="nameImage"]');
const galleryName = document.querySelector('.gallery__text');


const nameInput = document.querySelector('input[name="nameUser"]');
const jobInput = document.querySelector('input[name="jobUser"]');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

// popup
function openPopup (element) {
    element.classList.add('popup_opened');
}

function closePopup (element) {
    element.classList.remove('popup_opened')
}

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

editButtonElem.addEventListener('click', () => {
    openPopup(popupElem);
});

popupCloseElem.addEventListener('click', () => {
    closePopup(popupElem);
 });

// form
function openForm (element) {
    element.classList.add('form_opened');
}

function closeForm (element) {
    element.classList.remove('form_opened');
}

addButtonElem.addEventListener('click', () => {
    openForm(formElem);
});

formCloseElem.addEventListener('click', () => {
    closeForm(formElem);
 });


 function getValueImages () {
    nameImage.value = galleryName.textContent;
    // jobInput.value = profileProfession.textContent;
}

function handleImagesSubmit (evt) {
    evt.preventDefault(); 
    galleryName.textContent = nameImage.value;
    // profileProfession.textContent = jobInput.value;
    closeForm(formElem);
   }

   // gallery__image










formElement.addEventListener('submit', handleFormSubmit);
formItem.addEventListener('submit', handleImagesSubmit); 



const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];