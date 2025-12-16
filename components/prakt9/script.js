const changeNameBtn = document.querySelector("#changeNameBtn");
const likeBtn = document.querySelector("#likeBtn");
const username = document.querySelector("#username");
const likes = document.querySelector("#likes");
const body = document.querySelector("body");
const changeColorBtn = document.querySelector("#changeColorBtn");
const nameInput = document.querySelector("#nameInput");
const bio = document.querySelector("#bio");
const bioBtn = document.querySelector("#bioBtn");
const hobby = document.querySelector("#hobby");
const hobbyBtn = document.querySelector("#hobbyBtn");
const imageBtn = document.querySelector("#imageBtn");
const profileImage = document.querySelector("#profileImage");
const removeBtn = document.querySelector("#removeBtn");
const tips = document.querySelector("#tips");


function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}




changeNameBtn.addEventListener("click", () => {
    if (nameInput.value === "") {
        alert("Please enter a name");
    }
    else {
        username.textContent = nameInput.value;
    }
});

likeBtn.addEventListener("click", () => {
    countLikes = parseInt(likes.textContent);
    countLikes++;
    likes.textContent = countLikes;
})

changeColorBtn.addEventListener("click", () => {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.toggle("dark");
    }
    else {
        body.classList.remove("dark");
        body.classList.toggle("light");
    }
})


bioBtn.addEventListener("click", () => {
    if (bio.classList.contains("hidden")) {
        bio.classList.remove("hidden");
    }
    else {
        bio.classList.toggle("hidden");
    }
})

hobbyBtn.addEventListener("click", () => {
    if (hobby.classList.contains("hidden")) {
        hobby.classList.remove("hidden");
    }
    else {
        hobby.classList.toggle("hidden");
    }
})

imageBtn.addEventListener("click", () => {
    profileImage.src = "img" + getRandomInRange(1, 3) + ".png";
})

removeBtn.addEventListener("click", () => {
    username.textContent = "Введите ваше имя в поле ниже"
    likes.textContent = "0";
    nameInput.value = "";
})

nameInput.addEventListener("input", () => {
    if (nameInput.value === "") {
        alert("Please enter a name");

    }
    else {
        username.textContent = nameInput.value
    }
})

changeNameBtn.addEventListener("mouseover", () => {
    tips.textContent = "Смена имени"
})
changeNameBtn.addEventListener("mouseout", () => {
    tips.textContent = "";
})

imageBtn.addEventListener("mouseover", () => {
    tips.textContent = "Смена картинки"
})
imageBtn.addEventListener("mouseout", () => {
    tips.textContent = "";
})

bioBtn.addEventListener("mouseover", () => {
    tips.textContent = "Отображение биографии"
})
bioBtn.addEventListener("mouseout", () => {
    tips.textContent = "";
})

likeBtn.addEventListener("mouseover", () => {
    tips.textContent = "Поставить лайк"
})
likeBtn.addEventListener("mouseout", () => {
    tips.textContent = "";
})

removeBtn.addEventListener("mouseover", () => {
    tips.textContent = "Сброс имени и лайков"
})
removeBtn.addEventListener("mouseout", () => {
    tips.textContent = "";
})

changeColorBtn.addEventListener("mouseover", () => {
    tips.textContent = "Смена темы"
})
changeColorBtn.addEventListener("mouseout", () => {
    tips.textContent = "";
})


hobbyBtn.addEventListener("mouseover", () => {
    tips.textContent = "Отображение хобби"
})
hobbyBtn.addEventListener("mouseout", () => {
    tips.textContent = "";
})
