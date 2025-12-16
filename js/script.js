const full_table = document.getElementById("projects_table");
const categorySelector = document.getElementById("category_selector");

const numbers = [3, 4, 6, 7, 8, 9, 10];
const names = ["Анкета", "Список покупок", "Фреймворки CSS", "Figma", "Tilda", "Мини-портфолио", "Галерея артефактов"];
const datas = ["Создавали анкету с помощью HTML и изучали метод POST", "Создание таблицы со стилями CSS", "Изучали фреймворки CSS", "Делали макет страницы в Figma и переносили его в HTML", "Делали макет страницы в Tilda", "Создаваи свое мини-портфолио с использованием JS", "Создавали генерацию постов используя JS"];
const categories = ["html", "css", "css", "shablon", "shablon", "js", "js"];

for (let i = 0; i < numbers.length; i++) {
    const row = document.createElement("tr");
    row.classList.add("row");
    row.dataset.category = categories[i];
    row.innerHTML = `
    <td>Практика ${numbers[i]}</td>
    <td>${names[i]}</td>
    <td>${datas[i]}</td>
    <td><a href="./components/prakt${numbers[i]}/">Практика ${numbers[i]}</a></td>
    `
    full_table.appendChild(row);
}


categorySelector.addEventListener('change', function() {
    const filterValue = categorySelector.value;
    const allCards = document.querySelectorAll('.row');
    if (filterValue.length > 0) {
        allCards.forEach((card) => {
            const cardCategory = card.dataset.category.toLowerCase();


            if (filterValue === '' || cardCategory.includes(filterValue)) {
                card.style.display = 'table-row';
            } else {
                card.style.display = 'none';
            }
        })
    }

    else {
        allCards.forEach((card) => {
            card.style.display = 'table-row';
        })
    }

})