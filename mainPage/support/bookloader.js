"use strict";
var currentPath = "./store/store.json";
function bookListInitPage() {
    loadBookList(function (value) {
        let { bookList } = JSON.parse(value);
        for (let currentBook of bookList) {
            let currentBox = document.querySelector(".bookList ul");
            currentBox.innerHTML +=
                `   
            <li>
                <a href="../books/learning-${currentBook.path}/xsSupport/main.html">${currentBook.name}</a>
            </li>
            `;
        }
        ;
    });
}
//获取书籍列表json数据
function loadBookList(f) {
    let p = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", currentPath);
        xhr.responseType = "text";
        xhr.send();
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status >= 200 && xhr.status < 300) {
                    resolve(xhr.response);
                }
                else {
                    reject(xhr.status);
                }
            }
        };
    });
    p.then(function (value) {
        f(value);
    }, function (reason) {
        console.error(reason);
    });
}
