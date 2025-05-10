export const dogAndCat = async () => {
  const catUrl = "https://api.thecatapi.com/v1/images/search?limit=10";
  const dogUrl = "https://dog.ceo/api/breeds/image/random";

  const [catRes, dogRes] = await Promise.all([
    fetch(catUrl).then((res) => res.json()),
    fetch(dogUrl).then((res) => res.json()),
  ]);

  const cats = catRes.map((cat) => ({ url: cat.url, type: "cat" }));
  const dog = { url: dogRes?.message, type: "dog" };

  return [...cats, dog];
};
