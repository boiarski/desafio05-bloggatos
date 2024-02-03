const like = document.querySelector(".like");
const dislike = document.querySelector(".dislike");

like.addEventListener("click", () => {
  like.classList.toggle("likeActive");
  dislike.classList.remove("dislikeActive");
});

dislike.addEventListener("click", () => {
  dislike.classList.toggle("dislikeActive");
  like.classList.remove("likeActive");
});
