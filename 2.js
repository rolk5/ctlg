const myList = document.querySelector("div");

fetch('https://script.googleusercontent.com/macros/echo?user_content_key=e8RH5XRh5pMduNn5YeU_AjJfy2YNUCzdw3FAjYFchTtv5lSXLsg_qUF_rXGj1P19rJF-oU8EIO8_grqv8iLa6-seF2KXSTqHm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnPAA2y3VG9JL81ZNanfkRoRM1TRpNg5VgNchTapj0eLsNmUatjGXwvNYTINa6Bd7jMjkfAoyZeN7HHAcHOJxqh3IbVrF9IR6-w&lib=MvIYJgZ0MgXa3kditUeoakMBHEyKE_rmM')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error, status = ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {

        //Список товаров
        for (const product of data.users) {
            
            //Создаем тип элемента
            const productList = document.createElement("div");
            productList.className = "catalogCard1";


            //Создаем название элемента
            const nameEl = document.createElement("p2");
            nameEl.textContent = product.Название;
            nameEl.className = "nameObj";

            

            //Создаем элемент цены с сиволом ₽
            const priceElement = document.createElement("p3");
            priceElement.textContent = `${product.РУБ1}₽`;

            productList.append(
                nameEl,
                priceElement,` за ${product.шт1} шт`,
            );
            myList.appendChild(productList);
        }
    })
    .catch((error) => {
        const p = document.createElement("p1");
        p.appendChild(document.createTextNode(`Error: ${error.message}`));
        document.body.insertBefore(p, myList);
    });
