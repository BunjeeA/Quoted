setTimeout(getCategories, 500);

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        txtValue = a[i].textContent || a[i].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function getCategories() {
    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            // console.log(this.responseText);
        }
    });

    xhr.open("GET", "https://famous-quotes4.p.rapidapi.com/");
    xhr.setRequestHeader("X-RapidAPI-Key", "d467aa12b2msh7af0e36fc9e086ap177a9djsn287c58d0ab7d");
    xhr.setRequestHeader("X-RapidAPI-Host", "famous-quotes4.p.rapidapi.com");

    xhr.send(data);

    xhr.onload = function () {
        var data = JSON.parse(this.response)
        addDropdown = document.getElementById('myDropdown');
        for (var i = 0; i < data.length; i++) {
            const add = document.createElement('a');
            add.setAttribute('onclick', 'changeCategory(event)');
            add.innerText = data[i];
            addDropdown.appendChild(add);
        }


    }
}

function changeCategory(event) {
    input = document.getElementById('myInput');
    console.log(event.target.innerText);
    input.value = event.target.innerText;
    addDropdown = document.getElementById('myDropdown');
    addDropdown.classList.toggle("show");
}

function clearContainer(){
    var elements = document.getElementsByClassName("card");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

	var search = document.getElementById("searchBar");
	search.value = "";
}

function searchQuotes() {

    var category = document.getElementById('myInput').value;

    if(category == ''){
        alert('Please select a category');
    }

    const data = null;

    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
        }
    });

    xhr.open("GET", "https://famous-quotes4.p.rapidapi.com/random?category=" + category + "&count=3");
    xhr.setRequestHeader("X-RapidAPI-Key", "d467aa12b2msh7af0e36fc9e086ap177a9djsn287c58d0ab7d");
    xhr.setRequestHeader("X-RapidAPI-Host", "famous-quotes4.p.rapidapi.com");

    xhr.send(data);
    xhr.onload = function () {
        var data = JSON.parse(this.response);
        console.log(data);
        data.forEach(quote => {

            const card = document.createElement('div')
            card.setAttribute('class', 'card')

            // Create an h1 and set the text content to the film's title
            const h1 = document.createElement('h1')
            h1.textContent = quote.author;

            const p = document.createElement('p')
			p.textContent = '"' + quote.text + '"';

            const button = document.createElement('button')
            button.setAttribute('class', 'saveBtn');
            button.textContent = "Click to save"

            // Append the cards to the container element
            container.appendChild(card)

            // Each card will contain an h1 and a p
            card.appendChild(h1);
            card.appendChild(p);
            card.appendChild(button);


        })
    }




}

function validateForm(event) {
    event.preventDefault();
    email = document.getElementById('email').value;
    pass = document.getElementById('password').value;
    rpass = document.getElementById('rpassword').value;

    //minimum password length validation
    if (email == '') {
        alert("Please fill in email address");
        return false;
    }

    if (pass.length < 8) {
        alert("Password length must be atleast 8 characters");
        return false;
    }

    //maximum length of password validation
    if (pass.length > 15) {
        alert("Password length must not exceed 15 characters");
        return false;
    }

    if (pass != rpass) {
        alert("Passwords are not same");
        return false;
    }
    else {
        alert("Your account has been created successfully");
        document.write("JavaScript form has been submitted successfully");
    }
}

setTimeout(showHome, 5500);

function showHome() {
    body = document.querySelector('body');
    body.style.backgroundColor = 'rgb(246,79,60)';
    body.style.backgroundImage = 'radial-gradient(circle, hsla(341, 95%, 77%, 1) 0%, hsla(194, 51%, 67%, 1) 99%)';
    title = document.getElementById('title');
    title.style.display = 'none';
    home = document.getElementById('home');
    home.style.display = 'block';
    index = Math.floor(Math.random() * quotes.length);
    randomQuote = document.getElementById('rQuote');
    randomQuote.innerText = quotes[index];
    console.log(randomQuote.innerText);

}

var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
