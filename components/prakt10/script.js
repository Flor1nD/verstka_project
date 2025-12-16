const titleInput = document.getElementById('artifact-title');
const categoryInput = document.getElementById('artifact-category');
const imageInput = document.getElementById('artifact-image');
const filterInput = document.getElementById('artifact-filter');
const addBtn = document.getElementById('add-btn');
const categorySelector = document.getElementById('artifact-categories');
const gallery = document.getElementById('gallery');
const categories = document.getElementById('artifact-categories');
const artifactsCount = document.getElementById('artifacts-count');

let cardCounter = 0;
let artifactsCounter = 0;

addBtn.addEventListener('click', function() {
    if (titleInput.value === '' || categoryInput.value === '' || imageInput.value === '') {
        alert('Please enter a valid data');
    }
    else {
        const card = document.createElement('div');

        card.classList.add('card');
        card.dataset.id = `${cardCounter}`;
        card.id = `card${card.dataset.id}`;
        cardCounter++;
        artifactsCounter++;
        card.dataset.category = categoryInput.value.toLowerCase();
        card.innerHTML = `
        <img src="${imageInput.value}" alt="х">
        <h2>${titleInput.value}</h2>
        <p>${categoryInput.value}</p>
        <button id="delete-btn">Удалить артефакт</button>
        <button id="favorite-btn">В избранное</button>
    `;

        gallery.appendChild(card);

        const category = document.createElement(`option`);
        category.value = categoryInput.value.toLowerCase();
        category.innerHTML = categoryInput.value;

        categories.appendChild(category);

        titleInput.value = '';
        imageInput.value = '';
        categoryInput.value = '';
        artifactsCount.textContent = artifactsCounter;

        const deleteBtn = card.querySelector('#delete-btn');
        deleteBtn.addEventListener('click', function() {
            card.remove();
            category.remove();
            artifactsCounter--;
            artifactsCount.textContent = artifactsCounter;
        });

        const favoriteBtn = card.querySelector('#favorite-btn');
        favoriteBtn.addEventListener('click', function() {
            if (card.classList.contains('favorite')) {
                card.classList.remove('favorite');
                favoriteBtn.textContent = 'В избранное';
            }
            else {
                card.classList.add('favorite');
                favoriteBtn.textContent = 'В избранном';
            }
        })

        card.addEventListener('click', function(event) {
            if (!event.target.closest('#delete-btn') && !event.target.closest('#favorite-btn')) {
                console.log("Привет");
            }
        });

        card.addEventListener('mouseover', function() {
            card.classList.add('mouseOvered');
        })
        card.addEventListener('mouseout', function() {
            card.classList.remove('mouseOvered');
        })
    }
});





categorySelector.addEventListener('change', function() {
    const filterValue = categorySelector.value;
    const allCards = document.querySelectorAll('.card');
    if (filterValue.length > 0) {
        allCards.forEach((card) => {
            const cardCategory = card.dataset.category.toLowerCase();


            if (filterValue === '' || cardCategory.includes(filterValue)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        })
    }

    else {
        allCards.forEach((card) => {
            card.style.display = 'block';
        })
    }

})

// filterInput.addEventListener('input', function() {
//     const filterValue = filterInput.value.toLowerCase().trim();
//     const allCards = document.querySelectorAll('.card');
//
//     allCards.forEach((card) => {
//         const cardCategory = card.dataset.category.toLowerCase();
//
//
//         if (filterValue === '' || cardCategory.includes(filterValue)) {
//             card.style.display = 'block';
//         } else {
//             card.style.display = 'none';
//         }
//     })
// })