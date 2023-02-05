let arrColumns = document.getElementsByClassName("column");
let newArrColumns = [];

function start() {
    getNewArrColumns();// FUNCTION CALL
    shakerSort(newArrColumns); // FUNCTION CALL
}

function getHeight(item) {
    return item.offsetHeight;
}

function getNewArrColumns() {
    for (let i = 0; i < arrColumns.length; i++) {
        newArrColumns[i] = getHeight(arrColumns[i]);
    }
}

function swap(arr, item1, item2) {
    let temp = arr[item2];
    arr[item2] = arr[item1];
    arr[item1] = temp;
    renderColumn(arr, item1, item2);
}

async function shakerSort(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        for (let i = left; i < right; i++) {
            if (arr[i] > arr[i + 1]) {
                await waitFor(500)
                    .then(() => {
                        swap(arr, i, i + 1);
                    });
            }
        }
        right--;
        for (let j = right; j > left; j--) {
            if (arr[j] < arr[j - 1]) {
                await waitFor(500)
                    .then(() => {
                        swap(arr, j, j - 1);
                    });
            }
        }
        left++;
    }
}

function renderColumn(arr, item1, item2) {
    arrColumns[item2].style.height = arr[item2] + "px";
    arrColumns[item1].style.height = arr[item1] + "px";
}

function waitFor(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve()
        }, time);
    });
}

setTimeout(start, 1000);


