var posts = [
    {
        postId: 1,
        postTitle: "Nature",
        postDescription: "lorem ipsum de",
        postImage: "https://cdn.corporate.walmart.com/dims4/WMT/f7a8313/2147483647/strip/true/crop/1920x1080+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F7b%2F66%2F142c151b4cd3a19c13e1ca65f193%2Fbusinessfornature-banner.png",
    },
    {
        postId: 2,
        postTitle: "Why Sustainable Fashion is the Future",
        postDescription: "Learn about the environmental and social impact of fast fashion, and why sustainable fashion is the way forward.",
        postImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ExYAkW9JH4QBYSGIMxlofdJkyC5B0VIk5aoosXTv1QpLcNKcy6Njdv9RM1WvK5HntM4&usqp=CAU",
    },
    {
        postId: 3,
        postTitle: "The Benefits of Meditation: How it Can Improve Your Life",
        postDescription: "Discover the physical and mental health benefits of meditation, and how it can help you manage stress and improve your overall well-being.",
        postImage: "https://naturecanada.ca/wp-content/uploads/2022/06/NBCS-municipality_06-1024x1024.jpg",
    },
];
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
function renderPost(posts) {
    var postsHolder = document.querySelector("#postsHolder");
    if (postsHolder) {
        posts.map(function (post) {
            var li = document.createElement("li");
            var img = document.createElement("img");
            var title = document.createElement("h2");
            var description = document.createElement("p");
            img.classList.add("postImg");
            li.classList.add("postCard");
            title.classList.add("postTitle");
            description.classList.add("postDescription");
            title.innerText = post.postTitle;
            img.src = post.postImage;
            description.innerText = post.postDescription;
            li.appendChild(title);
            li.appendChild(description);
            li.appendChild(img);
            postsHolder.appendChild(li);
            img.addEventListener("click", function (e) {
                e.stopPropagation();
                createModal(post);
                openModal();
            });
        });
    }
}
renderPost(posts);
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
function createModal(post) {
    var postHolder = document.querySelector("#modalContentId");
    if (postHolder) {
        //Create elements
        postHolder.innerHTML = "";
        var section = document.createElement("section");
        var article = document.createElement("article");
        var h1 = document.createElement("h1");
        var p = document.createElement("p");
        var figure = document.createElement("figure");
        var img = document.createElement("img");
        var commentsHolder = document.createElement("ul");
        commentsHolder.id = "commentContentHolder";
        //Placing elements inside others
        postHolder.appendChild(section);
        postHolder.appendChild(figure);
        section.appendChild(article);
        article.appendChild(h1);
        article.appendChild(p);
        figure.appendChild(img);
        section.appendChild(commentsHolder);
        //Giving class to elements
        figure.classList.add("left");
        article.classList.add("postDescription");
        section.classList.add("right");
        img.classList.add("postImg");
        commentsHolder.classList.add("comments");
        h1.textContent = post.postTitle;
        img.src = post.postImage;
        p.textContent = post.postDescription;
    }
}
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
    else {
        console.error("No comment");
    }
}
//createModal(posts[0]);
createComments(comments);
