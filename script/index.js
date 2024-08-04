// popup
const editButtonElem = document.querySelector('.profile__edid-button'); 
const popupElem = document.querySelector('.popup');
const popupCloseElem = document.querySelector('.popup__close');
const formElement = document.querySelector('.popup__form');
const nameInput = document.querySelector('input[name="nameUser"]');
const jobInput = document.querySelector('input[name="jobUser"]');
const profileName = document.querySelector('.profile__name');
const profileProfession = document.querySelector('.profile__profession');

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
const addButtonElem = document.querySelector('.profile__add-button');
const formElem = document.querySelector('.form');
const formCloseElem = document.querySelector('.form__close');
const formItem = document.querySelector('.form__item');

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




const nameImage = document.querySelector('input[name="nameImage"]')
const linkImage = document.querySelector('input[name="linkImage"]')
const galleryCards = document.querySelector('.gallery__cards')
const galleryTemplate = document.querySelector('.gallery-template').content
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

  function deleteCard(delCard) {
    delCard = this.parentElement;
    delCard.remove();
    }


    

  
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


      galleryCards.prepend(initialCardsElement)
      })
  }

  renderCards(initialCards)

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

   const popupElemImage = document.querySelector('.gallery__image');
   const popupCloseImage = document.querySelector('.image-popup__close');
   const popupImage = document.querySelector('.image-popup');
  //  const desImage = document.querySelector('figcaption[name="desImage"]')
  //  const opImage = document.querySelector('img[name="opImage"]')
   
   
  //  function openImage() {
  //    desImage.value = initialCards.name
  //    opImage.value = initialCards.link
  //   }
   
  const desImage = document.querySelector('figcaption[name="desImage"]')
  const opImage = document.querySelector('img[name="opImage"]')
  console.log(desImage, opImage)

  //  function openImage() {
  //        desImage.value = initialCards.name
  //        opImage.value = initialCards.link
  //       }



       function openPopupImage (element) {
           element.classList.add('image-popup__opened');
           console.log(element)
       }
       
   
       function closePopupImage (element) {
           element.classList.remove('image-popup__opened')
       }
   
       popupElemImage.addEventListener('click', () => {
        openPopupImage(popupImage);
      });
     
     popupCloseImage.addEventListener('click', () => {
         closePopupImage(popupImage);
      });
   

