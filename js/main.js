var elContextForm = utilsEl("#js-context-form");
var elContextName = utilsEl("#js-context-form__name-text");
var elContextSurname = utilsEl("#js-context-form__surname-text");
var elContextContact = utilsEl("#js-context-form__contact-number");
var elContextReletionShip = utilsEl("#js-context-form__reletionShip-text");
var elContextButton = utilsEl("#js-context-form__button");

var elContextList = utilsEl("#js-context-form__list");
var contacts = [];

var NewContact = function(name, surname, contact, reletionShip) {
    this.name = name;
    this.surname = surname;
    this.contact = contact;
    this.reletionShip = reletionShip;
}

var renderContact = function() {

    elContextList.innerHTML = "";
    contacts.forEach((contect) => {
        console.log(contect);

        var liElement = createElementUtils("li", "context__item card text-center p-3 mb-3");
        var fullnameElement = createElementUtils("div", "context__fullname", `${contect.name} ${contect.surname}`);
        var reletionElement = createElementUtils("div", "context__reletion text-danger", contect.reletionShip);
        var contactElement = createElementUtils("a", "context__link", contect.contact);
    
        contactElement.setAttribute("href", `tel: ${contect.contact}`);

        liElement.appendChild(fullnameElement);
        liElement.appendChild(reletionElement);
        liElement.appendChild(contactElement);

        elContextList.appendChild(liElement);
    });


}

elContextForm.addEventListener("submit", (e) => {
    e.preventDefault();

    var nameValue = elContextName.value;
    var surnameValue = elContextSurname.value;
    var contactValue = elContextContact.value;
    var reletionShipValue = elContextReletionShip.value;

    contacts.push(new NewContact (nameValue, surnameValue, contactValue, reletionShipValue));
    console.log(contacts);

    renderContact();
    elContextForm.reset();
    elContextName.focus();
})