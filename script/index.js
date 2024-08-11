const editButtonElem = document.querySelector('.profile__edid-button'); 
const popupElem = document.querySelector('.popup');
const popupCloseElem = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('input[name="nameUser"]');
const jobInput = document.querySelector('input[name="jobUser"]');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');
// переменные отвечающие за вызов попапа с формой изменения имени и профессии
const addButtonElem = document.querySelector('.profile__add-button');
const formElem = document.querySelector('.form');
const formCloseElem = document.querySelector('.form__close');
const formItem = document.querySelector('.form__item');
// переменные отвечающие за вызов массива карточек
const nameImage = document.querySelector('input[name="nameImage"]')
const linkImage = document.querySelector('input[name="linkImage"]')
const galleryCards = document.querySelector('.gallery__cards')
const galleryTemplate = document.querySelector('.gallery-template').content
// переменные отвечающие за вызов попапа с формой добавления карточек
// const popupCloseImage = document.querySelector('.image-popup__close');
const popupImage = document.querySelector('.image-popup');
// const descriptionImage = document.querySelectorAll('figcaption[name="descriptionImage"]')
// const imgOpenImage = document.querySelectorAll('img[name="imgOpenImage"]')
// переменные отвечающие за вызов модального окна карточки
// console.log(descriptionImage, imgOpenImage)

// функция открытия и закрытия попапа с формой изменения имени и профессии

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

// функции открытия и закрытия попапа с формой добавления карточек

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

formElement.addEventListener('submit', handleFormSubmit);

// Массив карточек

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

  // функция удаления карточек

  function deleteCard(delCard) {
    delCard = this.parentElement;
    delCard.remove();
    }

  // функция для обработки массива

  function renderCards(data) {
    data.forEach(function (element) {
      const initialCardsElement = galleryTemplate.cloneNode(true);
      initialCardsElement.querySelector('.gallery__text').textContent = element.name;
      initialCardsElement.querySelector('.gallery__image').src = element.link;
      initialCardsElement.querySelector('.gallery__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('gallery__like_active');
      })
      const deleteCardsElem = initialCardsElement.querySelectorAll('.gallery__trash');
      deleteCardsElem.forEach((elem) => {
      elem.addEventListener('click', deleteCard);
      });
      const popupElemImages = initialCardsElement.querySelectorAll('.gallery__image');

      popupElemImages.forEach(function (el) {
        el.addEventListener('click', () => {
          console.log(el)
          const descriptionImage = document.querySelector('figcaption[name="descriptionImage"]').textContent = element.name;
          const imgOpenImage = document.querySelector('img[name="imgOpenImage"]').src = element.link
          // el = element.link;
          // el = element.name
          console.log(element)
          // console.log(popupImage)
          openPopupImage(popupImage);
        });
      
      })
      const popupCloseImage = document.querySelector('.image-popup__close').addEventListener('click', () => {
        closePopupImage(popupImage);
      });

      galleryCards.prepend(initialCardsElement)
      })
  }

  renderCards(initialCards)

  // функции добавления карточек

  function addCardsElem () { 
        const newArray = []
        newArray.push({
          name: nameImage.value,
          link: linkImage.value
        })
        console.log('massiv',initialCards)
        renderCards(newArray)
      }



  function addCards() {
    nameImage.value = initialCards.name
    linkImage.value = initialCards.link
  }
  
    
   function handleImagesSubmit (evt) {
          evt.preventDefault(); 
          addCardsElem()
        closeForm(formElem);
        }
   formItem.addEventListener('submit', handleImagesSubmit);

  //  const popupElemImage = document.querySelectorAll('.gallery__image');
   
  //  
    function openImage() {
      descriptionImage.textContent = initialCards.name
      imgOpenImage.src = initialCards.link
     }

     // функция открытия и закрытия модального окна карточек
     
    function openPopupImage (element) {
    element.classList.add('image-popup__opened');
   
     }
    function closePopupImage (element) {
    element.classList.remove('image-popup__opened')
    }

      // popupElemImage.forEach(function (element) {
      //   element.addEventListener('click', () => {
      //     console.log(element)
      //     console.log(popupImage)
      //     openPopupImage(popupImage);
      //   });
      //   element.addEventListener('click', () => {
      //       closePopupImage(popupImage);
      //     });
      //   })






      //  function openPopupImage (element) {
      //      element.classList.add('image-popup__opened');
      //      console.log(element)
      //  }
       
   
      //  function closePopupImage (element) {
      //      element.classList.remove('image-popup__opened')
      //  }
   
    //    popupElemImage.addEventListener('click', () => {
    //     openPopupImage(popupImage);
    //   });
     
    //  popupCloseImage.addEventListener('click', () => {
    //      closePopupImage(popupImage);
    //   });
 
