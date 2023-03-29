var comments = [
    {
        id: 1,
        postId: 1,
        email: "teste@teste.com",
        body: "WOW nice graphics!",
    },
    {
        id: 2,
        postId: 1,
        email: "user1234@example.com",
        body: "This is awesome!",
    },
    {
        id: 3,
        postId: 1,
        email: "johndoe@mail.com",
        body: "Great job!",
    },
    {
        id: 4,
        postId: 1,
        email: "janedoe@mail.com",
        body: "This is amazing!",
    },
    {
        id: 5,
        postId: 1,
        email: "example@example.com",
        body: "I'm loving it!",
    },
    {
        id: 6,
        postId: 1,
        email: "codingrocks@mail.com",
        body: "You guys rock!",
    },
    {
        id: 7,
        postId: 1,
        email: "programmer123@mail.com",
        body: "I'm blown away!",
    },
    {
        id: 8,
        postId: 1,
        email: "artlover@mail.com",
        body: "The art is fantastic!",
    },
    {
        id: 9,
        postId: 1,
        email: "techenthusiast@mail.com",
        body: "This is next level!",
    },
    {
        id: 10,
        postId: 1,
        email: "videogamefan@mail.com",
        body: "This is like a dream come true!",
    },
];
var modal = document.querySelector("#modal");
var modalContent = document.querySelector("#modalContentId");
function openModal() {
    if (modal)
        modal.style.display = "flex";
}
function closeModal() {
    if (modal)
        modal.style.display = "none";
}
modalContent === null || modalContent === void 0 ? void 0 : modalContent.addEventListener("click", function (event) {
    event.stopPropagation();
});
document.addEventListener("click", closeModal);
function createComments(comments) {
    var commentHolder = document.querySelector("#commentContentHolder");
    if (commentHolder) {
        comments.map(function (item) {
            var li = document.createElement("li");
            li.classList.add("commentCard");
            var div = document.createElement("div");
            var strong = document.createElement("strong");
            strong.textContent = item.email;
            div.appendChild(strong);
            var p = document.createElement("p");
            p.textContent = item.body;
            div.appendChild(p);
            li.appendChild(div);
            commentHolder.appendChild(li);
        });
    }
}
;
createComments(comments);
