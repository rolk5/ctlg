
const DATA_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=tuQdiLD1YG42imxTO7r9hYD0y3L6GsSiKcOwLZs75Nd5nGl-gPFPzGn7HcUv4SK7TMQOzHXM8BauLQIepIc4fR-pQmHWmXjpm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPAA2y3VG9JL81ZNanfkRoRM1TRpNg5VgNchTapj0eLsNmUatjGXwvNYTINa6Bd7jMjkfAoyZeN7HHAcHOJxqh3IbVrF9IR6-w&lib=MvIYJgZ0MgXa3kditUeoakMBHEyKE_rmM';

    // Функция группировки данных
    function groupData(data) {
            return data.reduce((acc, item) => {
                if (!acc[item.Тип]) acc[item.Тип] = { };
                if (!acc[item.Тип][item.Группа]) acc[item.Тип][item.Группа] = [];
                acc[item.Тип][item.Группа].push(item.Название);
    return acc;

            }, { });
        }

    // Функция отрисовки (без изменений)
    function renderData(groupedData) {
            const container = document.getElementById('data-container');

    for (const [className, types] of Object.entries(groupedData)) {
                const classDiv = document.createElement('div');
    classDiv.className = 'category';

    const classHeader = document.createElement('h2');
    classHeader.className = 'category-header';
    classHeader.textContent = className;
    classDiv.appendChild(classHeader);

    for (const [typeName, items] of Object.entries(types)) {
                    const typeDiv = document.createElement('div');
    typeDiv.className = 'type-section';

    const typeHeader = document.createElement('h3');
    typeHeader.className = 'type-header';
    typeHeader.textContent = typeName;
    typeDiv.appendChild(typeHeader);

                    items.forEach(itemName => {
                        const itemDiv = document.createElement('div');
    itemDiv.className = 'item';
    itemDiv.textContent = itemName;
    typeDiv.appendChild(itemDiv);
                    });

    classDiv.appendChild(typeDiv);
                }

    container.appendChild(classDiv);
            }
        }

    // Загрузка данных при старте
    window.onload = function() {
        fetch(DATA_URL)
            .then(response => {
                if (!response.ok) throw new Error('Ошибка сети');
                return response.json();
            })
            .then(data => {
                const groupedData = groupData(data.users);
                renderData(groupedData);
            })
            .catch(error => {
                console.error('Ошибка загрузки данных:', error);
                newElement.innerHTML = '<p>Ошибка загрузки данных</p>';
                });
        };
