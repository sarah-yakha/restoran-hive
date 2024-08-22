import bootImg from './img/boootcamp.jpg';


export function getContact(){
    const contact = document.createElement('div');
    const contactsItem = document.createElement('div');
    contactsItem.classList.add('contactsItem')
    contact.classList.add('contact');
    const contText = document.createElement('h3');
    contText.classList.add('contText')
    contText.textContent = 'приходите к нам!';
    const link = document.createElement('a');
    link.classList.add('link')
    link.textContent = '__';
    link.target = '_blank';
   link.href ='https://hivebootcamp.ru/';
   contactsItem.append(link)
   
   contact.append(contText, contactsItem);

   
   
    return contact;

}