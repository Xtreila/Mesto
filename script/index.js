const editButtonElem = document.querySelector('.profile__edid_button'); 
const popupElem = document.querySelector('.popup');
const popupCloseElem = document.querySelector('.popup__close');

editButtonElem.addEventListener('click', () => {
    popupElem.classList.add('popup_opened');
});

popupCloseElem.addEventListener('click', () => {
    popupElem.classList.remove('popup_opened');
});
