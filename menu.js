let currentPage = "categories";
function hideAllMenus() {
    document.querySelectorAll('.menu-group').forEach(menu => {
        menu.style.display = 'none';
    });
    document.querySelector('.drinks-group').style.display = 'none';
}

function showMenu(menuClass) {
    document.querySelector('.menu-cat').style.display = 'none';
    document.querySelector('.back-btn').style.display = 'block';
    hideAllMenus();
    document.querySelector('.' + menuClass).style.display = 'grid';
    if (menuClass === 'menu-hot-drink' || menuClass === 'menu-cold-drink') {
        currentPage = "drink-menu";
    } else {
        currentPage = "menu";
    }
}



function showDrinks() {
    document.querySelector('.menu-cat').style.display = 'none';
    document.querySelector('.back-btn').style.display = 'block';
    hideAllMenus();
    document.querySelector('.drinks-group').style.display = 'flex';
    currentPage = "drinks";
}

function backToCategories() {
    if (currentPage === "drink-menu") {
        hideAllMenus();
        document.querySelector('.drinks-group').style.display = 'flex';
        currentPage = "drinks";
        return;
    }
 
    if (currentPage === "drinks") {
        hideAllMenus();
        document.querySelector('.menu-cat').style.display = 'grid';
        document.querySelector('.back-btn').style.display = 'none';
        currentPage = "categories";
        return;
    }

    if (currentPage === "menu") {
        hideAllMenus();
        document.querySelector('.menu-cat').style.display = 'grid';
        document.querySelector('.back-btn').style.display = 'none';
        currentPage = "categories";
    }
}

function openModal() {
    document.getElementById("reservationModal").style.display = "flex";

}

function closeModal() {
    document.getElementById("reservationModal").style.display = "none";

}

const dateInput = document.getElementById("dateInput");
const today = new Date().toISOString().split("T")[0];
dateInput.min = today;

const form = document.getElementById("reservationForm");
const message = document.querySelector(".message");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    message.style.display = "block";
    form.reset();

    setTimeout(() => {
        closeModal();
        message.style.display = "none";
    }, 3000);
});

function toggleMenu() {
    document.querySelector(".nav").classList.toggle("active");
}

