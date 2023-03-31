type Post = {
  postId: number;
  postTitle: string;
  postDescription: string;
  postImage: string;
};

const posts: Post[] = [
  {
    postId: 1,
    postTitle: "Nature",
    postDescription:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    postImage:
      "https://cdn.corporate.walmart.com/dims4/WMT/f7a8313/2147483647/strip/true/crop/1920x1080+0+0/resize/1200x675!/quality/90/?url=https%3A%2F%2Fcdn.corporate.walmart.com%2F7b%2F66%2F142c151b4cd3a19c13e1ca65f193%2Fbusinessfornature-banner.png",
  },

  {
    postId: 2,
    postTitle: "Why Sustainable Fashion is the Future",
    postDescription:
      "Learn about the environmental and social impact of fast fashion, and why sustainable fashion is the way forward.",
    postImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3ExYAkW9JH4QBYSGIMxlofdJkyC5B0VIk5aoosXTv1QpLcNKcy6Njdv9RM1WvK5HntM4&usqp=CAU",
  },

  {
    postId: 3,
    postTitle: "The Benefits of Meditation: How it Can Improve Your Life",
    postDescription:
      "Discover the physical and mental health benefits of meditation, and how it can help you manage stress and improve your overall well-being.",
    postImage:
      "https://naturecanada.ca/wp-content/uploads/2022/06/NBCS-municipality_06-1024x1024.jpg",
  },
];

type PostComment = {
  id: number;
  postId: number;
  email: string;
  body: string;
};

const comments: PostComment[] = [
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
    postId: 2,
    email: "example@example.com",
    body: "I'm loving it!",
  },
  {
    id: 6,
    postId: 2,
    email: "codingrocks@mail.com",
    body: "You guys rock!",
  },
  {
    id: 7,
    postId: 2,
    email: "programmer123@mail.com",
    body: "I'm blown away!",
  },
  {
    id: 8,
    postId: 3,
    email: "artlover@mail.com",
    body: "The art is fantastic!",
  },
  {
    id: 9,
    postId: 3,
    email: "techenthusiast@mail.com",
    body: "This is next level!",
  },
  {
    id: 10,
    postId: 3,
    email: "videogamefan@mail.com",
    body: "This is like a dream come true!",
  },
];

function renderPost(posts: Post[]) {
  const postsHolder = document.querySelector("#postsHolder");
  if (postsHolder) {
    posts.map((post) => {
      const li = document.createElement("li");
      const img = document.createElement("img");
      const title = document.createElement("h2");
      const description = document.createElement("p");

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

      img.addEventListener("click", (e) => {
        e.stopPropagation();
        createModal(post);
        openModal();
        createComments(comments, post.postId);
      });
    });
  }
}

renderPost(posts);

const modal = document.querySelector<HTMLDivElement>("#modal");
const modalContent = document.querySelector<HTMLDivElement>("#modalContentId");

function openModal() {
  if (modal) modal.style.display = "flex";
}

function closeModal() {
  if (modal) modal.style.display = "none";
}

modalContent?.addEventListener("click", (event) => {
  event.stopPropagation();
});

document.addEventListener("click", closeModal);

function createModal(post: Post) {
  const postHolder =
    document.querySelector<HTMLDialogElement>("#modalContentId");
  if (postHolder) {
    //Create elements
    postHolder.innerHTML = "";
    const section = document.createElement("section");
    const article = document.createElement("article");
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const commentsHolder = document.createElement("ul");
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
    h1.classList.add("postTitle");

    h1.textContent = post.postTitle;
    img.src = post.postImage;
    p.textContent = post.postDescription;
  }
}

function createComments(comments: PostComment[], postId: number) {
  const commentHolder = document.querySelector<HTMLUListElement>(
    "#commentContentHolder"
  );
  if (commentHolder) {
    const filteredComments = comments.filter((comment: PostComment) => {
      return comment.postId === postId;
    });
    filteredComments.map((item) => {
      const li = document.createElement("li");
      li.classList.add("commentCard");
      const div = document.createElement("div");
      const strong = document.createElement("strong");
      strong.textContent = item.email;
      div.appendChild(strong);
      const p = document.createElement("p");
      p.textContent = item.body;
      div.appendChild(p);
      li.appendChild(div);
      commentHolder.appendChild(li);
    });
  } else {
    console.error("No comment");
  }
}
