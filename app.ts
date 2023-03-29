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

function createComments(comments: PostComment[]) {
  const commentHolder = document.querySelector<HTMLUListElement>(
    "#commentContentHolder"
  );
  if (commentHolder) {
    comments.map((item) => {
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
  }
  
};

createComments(comments);
