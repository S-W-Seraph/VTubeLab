// Menu nav toggle

const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', function (e) {
    e.preventDefault();

    this.classList.toggle('active');
    nav.classList.toggle('active');
});

// Accordion

const dataCollapse = document.querySelectorAll('[data-collapse]');

dataCollapse.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        this.closest('.accordion__item').classList.toggle('active');
    });
});

// Filter

const filter = document.querySelectorAll('[data-filter]');
const goods = document.querySelectorAll('[data-cat]');

filter.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();

        const category = this.dataset.filter;

        if (category === 'clearFilter') {
            goods.forEach(item => {
                item.classList.remove('hide');
            });
        } else {
            goods.forEach(item => {
                const goodCategory = item.dataset.cat;

                if (goodCategory !== category) {
                    item.classList.add('hide');
                } else {
                    item.classList.remove('hide');
                }
            });
        }
    });
});

// Price counter & basket

const totalPriceSpan = document.querySelector('.total__price-span-catalog');
const toggleCheckboxes = document.querySelectorAll('.checkbox-toggle');
const defaultCheckboxes = document.querySelectorAll('.checkbox-default');

let overlayPrice = 0;
let stickersPrice = 0;
let bgmPrice = 0;
let conceptArtPrice = 0;
let modelPrice = 0;
let rigPrice = 0;

const basket = [];

toggleCheckboxes.forEach(item => {
    item.addEventListener('change', function () {
        if (this.id === 'checkbox-toggle-1') {
            if (this.checked) {
                overlayPrice += 6000;

                function generateRandomNumber() {
                    var minm = 100000;
                    var maxm = 999999;
                    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
                }

                let overlayOrder = {
                    id: generateRandomNumber(),
                    name: 'Оверлей х1',
                    price: overlayPrice,
                };

                basket[0] = overlayOrder;
                localStorage.setItem('basket', JSON.stringify(basket));
            } else {
                overlayPrice = 0;

                defaultCheckboxes.forEach(item => {
                    item.checked = false;
                });

                function generateRandomNumber() {
                    var minm = 100000;
                    var maxm = 999999;
                    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
                }

                let overlayOrder = {
                    id: generateRandomNumber(),
                    name: 'Оверлей х1',
                    price: overlayPrice,
                };

                basket[0] = overlayOrder;
                localStorage.setItem('basket', JSON.stringify(basket));
            }
        }

        if (this.id === 'checkbox-toggle-3') {
            if (this.checked) {
                bgmPrice += 750;

                function generateRandomNumber() {
                    var minm = 100000;
                    var maxm = 999999;
                    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
                }

                let bgmOrder = {
                    id: generateRandomNumber(),
                    name: 'BGM х1',
                    price: bgmPrice,
                };

                basket[2] = bgmOrder;
                localStorage.setItem('basket', JSON.stringify(basket));
            } else {
                bgmPrice -= 750;

                function generateRandomNumber() {
                    var minm = 100000;
                    var maxm = 999999;
                    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
                }

                let bgmOrder = {
                    id: generateRandomNumber(),
                    name: 'BGM х1',
                    price: bgmPrice,
                };

                basket[2] = bgmOrder;
                localStorage.setItem('basket', JSON.stringify(basket));
            }
        }

        if (this.id === 'checkbox-toggle-4') {
            if (this.checked) {
                conceptArtPrice += 5000;

                function generateRandomNumber() {
                    var minm = 100000;
                    var maxm = 999999;
                    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
                }

                let conceptArtOrder = {
                    id: generateRandomNumber(),
                    name: 'Концепт-арт х1',
                    price: conceptArtPrice,
                };

                basket[3] = conceptArtOrder;
                localStorage.setItem('basket', JSON.stringify(basket));
            } else {
                conceptArtPrice -= 5000;

                function generateRandomNumber() {
                    var minm = 100000;
                    var maxm = 999999;
                    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
                }

                let conceptArtOrder = {
                    id: generateRandomNumber(),
                    name: 'Концепт-арт х1',
                    price: conceptArtPrice,
                };

                basket[3] = conceptArtOrder;
                localStorage.setItem('basket', JSON.stringify(basket));
            }
        }

        if (this.id === 'checkbox-toggle-5') {
            if (this.checked) {
                modelPrice += 5000;

                function generateRandomNumber() {
                    var minm = 100000;
                    var maxm = 999999;
                    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
                }

                const modelPricesItem1 =
                    document.getElementById('modelActionItem1');
                modelPricesItem1.classList.add('active');

                let modelOrder = {
                    id: generateRandomNumber(),
                    name: 'Модель х1',
                    price: modelPrice,
                };

                basket[4] = modelOrder;
                localStorage.setItem('basket', JSON.stringify(basket));
            } else {
                modelPrice = 0;

                function generateRandomNumber() {
                    var minm = 100000;
                    var maxm = 999999;
                    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
                }

                const modelActionsItems = document.querySelectorAll(
                    '.model__actions-item'
                );
                modelActionsItems.forEach(item => {
                    item.classList.remove('active');
                });

                let modelOrder = {
                    id: generateRandomNumber(),
                    name: 'Модель х1',
                    price: modelPrice,
                };

                basket[4] = modelOrder;
                localStorage.setItem('basket', JSON.stringify(basket));
            }
        }

        if (this.id === 'checkbox-toggle-6') {
            if (this.checked) {
                rigPrice += 15000;

                function generateRandomNumber() {
                    var minm = 100000;
                    var maxm = 999999;
                    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
                }

                let rigOrder = {
                    id: generateRandomNumber(),
                    name: 'Риг х1',
                    price: rigPrice,
                };

                basket[5] = rigOrder;
                localStorage.setItem('basket', JSON.stringify(basket));
            } else {
                rigPrice -= 15000;

                function generateRandomNumber() {
                    var minm = 100000;
                    var maxm = 999999;
                    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
                }

                let rigOrder = {
                    id: generateRandomNumber(),
                    name: 'Риг х1',
                    price: rigPrice,
                };

                basket[5] = rigOrder;
                localStorage.setItem('basket', JSON.stringify(basket));
            }
        }

        totalPriceSpan.innerText =
            overlayPrice +
            stickersPrice +
            bgmPrice +
            conceptArtPrice +
            modelPrice +
            rigPrice +
            ' руб.';
    });
});

defaultCheckboxes.forEach(item => {
    item.addEventListener('change', function () {
        const checkedDefaultCheckboxes = document.querySelectorAll(
            '.checkbox-default:checked'
        );

        if (checkedDefaultCheckboxes.length >= 1) {
            setTimeout(function () {
                document.getElementById('checkbox-toggle-1').checked = true;
            }, 30);
        }

        if (document.getElementById('checkbox-toggle-1').checked === true) {
            if (this.checked) {
                overlayPrice += 6000;
            } else {
                overlayPrice -= 6000;
            }
        } else {
            if (this.checked) {
                if (checkedDefaultCheckboxes.length === 1) {
                    overlayPrice += 6000;
                } else {
                    overlayPrice += 6000;
                }
            } else {
                overlayPrice -=6000;
            }
        }

        totalPriceSpan.innerText =
            overlayPrice +
            stickersPrice +
            bgmPrice +
            conceptArtPrice +
            modelPrice +
            rigPrice +
            ' руб.';

        function generateRandomNumber() {
            var minm = 100000;
            var maxm = 999999;
            return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
        }

        let overlayOrder = {
            id: generateRandomNumber(),
            name: 'Оверлей х1',
            price: overlayPrice,
        };

        basket[0] = overlayOrder;
        localStorage.setItem('basket', JSON.stringify(basket));
    });
});

// Stickers counter & basket

const btnPrev1 = document.getElementById('btnPrev1');
const counterInput1 = document.getElementById('counter-input-1');
const btnNext1 = document.getElementById('btnNext1');
const btnPrev2 = document.getElementById('btnPrev2');
const counterInput2 = document.getElementById('counter-input-2');
const btnNext2 = document.getElementById('btnNext2');

btnPrev1 &&
    btnPrev1.addEventListener('click', function () {
        if (Number(counterInput1.value)) {
            counterInput1.setAttribute(
                'value',
                Number(counterInput1.value) - 1
            );

            stickersPrice -= 500;
            totalPriceSpan.innerText =
                overlayPrice +
                stickersPrice +
                bgmPrice +
                conceptArtPrice +
                modelPrice +
                rigPrice +
                ' руб.';

            function generateRandomNumber() {
                var minm = 100000;
                var maxm = 999999;
                return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
            }

            let stickersCount =
                Number(counterInput1.value) + Number(counterInput2.value);
            let stickersOrder = {
                id: generateRandomNumber(),
                name: `Стикеры х${stickersCount}`,
                price: stickersPrice,
            };

            basket[1] = stickersOrder;
            localStorage.setItem('basket', JSON.stringify(basket));
        }

        if (
            Number(counterInput1.value) === 0 &&
            Number(counterInput2.value) === 0
        ) {
            document.getElementById('checkbox-toggle-2').checked = false;
        }
    });

btnNext1 &&
    btnNext1.addEventListener('click', function () {
        counterInput1.setAttribute('value', Number(counterInput1.value) + 1);
        document.getElementById('checkbox-toggle-2').checked = true;
        stickersPrice += 500;
        totalPriceSpan.innerText =
            overlayPrice +
            stickersPrice +
            bgmPrice +
            conceptArtPrice +
            modelPrice +
            rigPrice +
            ' руб.';

        function generateRandomNumber() {
            var minm = 100000;
            var maxm = 999999;
            return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
        }

        let stickersCount =
            Number(counterInput1.value) + Number(counterInput2.value);
        let stickersOrder = {
            id: generateRandomNumber(),
            name: `Стикеры х${stickersCount}`,
            price: stickersPrice,
        };

        basket[1] = stickersOrder;
        localStorage.setItem('basket', JSON.stringify(basket));
    });

btnPrev2 &&
    btnPrev2.addEventListener('click', function () {
        if (Number(counterInput2.value)) {
            counterInput2.setAttribute(
                'value',
                Number(counterInput2.value) - 1
            );

            stickersPrice -= 1000;
            totalPriceSpan.innerText =
                overlayPrice +
                stickersPrice +
                bgmPrice +
                conceptArtPrice +
                modelPrice +
                rigPrice +
                ' руб.';

            function generateRandomNumber() {
                var minm = 100000;
                var maxm = 999999;
                return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
            }

            let stickersCount =
                Number(counterInput1.value) + Number(counterInput2.value);
            let stickersOrder = {
                id: generateRandomNumber(),
                name: `Стикеры х${stickersCount}`,
                price: stickersPrice,
            };

            basket[1] = stickersOrder;
            localStorage.setItem('basket', JSON.stringify(basket));
        }

        if (
            Number(counterInput2.value) === 0 &&
            Number(counterInput1.value) === 0
        ) {
            document.getElementById('checkbox-toggle-2').checked = false;
        }
    });

btnNext2 &&
    btnNext2.addEventListener('click', function () {
        counterInput2.setAttribute('value', Number(counterInput2.value) + 1);
        document.getElementById('checkbox-toggle-2').checked = true;
        stickersPrice += 1000;
        totalPriceSpan.innerText =
            overlayPrice +
            stickersPrice +
            bgmPrice +
            conceptArtPrice +
            modelPrice +
            rigPrice +
            ' руб.';

        function generateRandomNumber() {
            var minm = 100000;
            var maxm = 999999;
            return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
        }

        let stickersCount =
            Number(counterInput1.value) + Number(counterInput2.value);
        let stickersOrder = {
            id: generateRandomNumber(),
            name: `Стикеры х${stickersCount}`,
            price: stickersPrice,
        };

        basket[1] = stickersOrder;
        localStorage.setItem('basket', JSON.stringify(basket));
    });

// Data output

const btnAddToBasket = document.getElementById('btnAddToBasket');
const basketTableHeader = document.querySelector('.basket__table-header');
const basketData = JSON.parse(localStorage.getItem('basket'));

const createTableItems = (tableItemId, tableItemName, tableItemPrice) => {
    const tableItemRow = document.createElement('tr');

    const tableItemIdData = document.createElement('td');
    tableItemIdData.innerText = '#' + tableItemId;

    const tableItemNameData = document.createElement('td');
    tableItemNameData.innerText = tableItemName;

    const tableItemPriceData = document.createElement('td');
    tableItemPriceData.innerText = tableItemPrice + ' руб.';

    tableItemRow.append(tableItemIdData, tableItemNameData, tableItemPriceData);

    return tableItemRow;
};

let totalBasketPrice = 0;
const basketPriceTotal = document.querySelector(
    '.total__price-span-basket-price'
);
const basketPriceNumber = document.querySelector(
    '.total__price-span-basket-number'
);

basketData &&
    basketData.forEach(item => {
        if (item) {
            const tableItem = createTableItems(item.id, item.name, item.price);

            if (item.price !== 0) {
                basketTableHeader &&
                    basketTableHeader.insertAdjacentElement(
                        'afterend',
                        tableItem
                    );
            }

            totalBasketPrice += item.price;
        }
    });

function generateRandomNumber() {
    var minm = 100000;
    var maxm = 999999;
    return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
}

const key = 'randomNumberKey';
const value = +(localStorage.getItem(key) ?? generateRandomNumber());

localStorage.setItem(key, value);

basketData &&
    basketData.forEach(item => {
        if (item) {
            if (basketPriceNumber && basketData && item.price !== 0) {
                basketPriceNumber.innerText = 'Номер заказа: ' + value;
            }
        }
    });

if (basketPriceNumber) {
    basketPriceTotal.innerText = totalBasketPrice + ' руб.';
}

// Clear basket

const btnClearBasket = document.getElementById('clearBasket');

btnClearBasket &&
    btnClearBasket.addEventListener('click', function () {
        localStorage.clear();
        location.reload();
    });

// Model actions

const modelActionsItems = document.querySelectorAll('.model__actions-item');

modelActionsItems.forEach(item => {
    item.addEventListener('click', function () {
        const modelActionsCheckbox =
            document.getElementById('checkbox-toggle-5');
        modelActionsCheckbox.checked = true;

        modelActionsItems.forEach(item => {
            item.classList.remove('active');
        });

        this.classList.toggle('active');

        const modelActionItem1 = document.getElementById('modelActionItem1');
        const modelActionItem2 = document.getElementById('modelActionItem2');
        const modelActionItem3 = document.getElementById('modelActionItem3');

        if (modelActionItem1.classList.contains('active')) {
            modelPrice = 5000;

            totalPriceSpan.innerText =
                overlayPrice +
                stickersPrice +
                bgmPrice +
                conceptArtPrice +
                modelPrice +
                rigPrice +
                ' руб.';

            function generateRandomNumber() {
                var minm = 100000;
                var maxm = 999999;
                return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
            }

            let modelOrder = {
                id: generateRandomNumber(),
                name: 'Модель х1',
                price: modelPrice,
            };

            basket[4] = modelOrder;
            localStorage.setItem('basket', JSON.stringify(basket));
        }

        if (modelActionItem2.classList.contains('active')) {
            modelPrice = 30000;
            totalPriceSpan.innerText =
                overlayPrice +
                stickersPrice +
                bgmPrice +
                conceptArtPrice +
                modelPrice +
                rigPrice +
                ' руб.';

            function generateRandomNumber() {
                var minm = 100000;
                var maxm = 999999;
                return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
            }

            let modelOrder = {
                id: generateRandomNumber(),
                name: 'Модель х1',
                price: modelPrice,
            };

            basket[4] = modelOrder;
            localStorage.setItem('basket', JSON.stringify(basket));
        }

        if (modelActionItem3.classList.contains('active')) {
            modelPrice = 20000;
            totalPriceSpan.innerText =
                overlayPrice +
                stickersPrice +
                bgmPrice +
                conceptArtPrice +
                modelPrice +
                rigPrice +
                ' руб.';

            function generateRandomNumber() {
                var minm = 100000;
                var maxm = 999999;
                return Math.floor(Math.random() * (maxm - minm + 1)) + minm;
            }

            let modelOrder = {
                id: generateRandomNumber(),
                name: 'Модель х1',
                price: modelPrice,
            };

            basket[4] = modelOrder;
            localStorage.setItem('basket', JSON.stringify(basket));
        }
    });
});
