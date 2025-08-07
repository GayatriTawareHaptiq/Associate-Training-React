

export async function fetchBooks({ query, category, page = 1 }) {
  let url = `https://openlibrary.org/search.json?`;

  if (query) url += `q=${query}&`;
  if (category) url += `subject=${category}&`;
  url += `page=${page}`;

  try {
    const res = await fetch(url);
    const data = await res.json();
    return data.docs;
  } catch (err) {
    console.error('Failed to fetch books:', err);
    return [];
  }
}
