

const BASE_URL = 'https://openlibrary.org/search.json';



export async function fetchBooks({ query = '', category = '', page = 1 } = {}) {
  const searchParams = new URLSearchParams();

  if (query) searchParams.set('q', query);
  if (category) searchParams.set('subject', category);
  searchParams.set('page', page);

  try {
    const response = await fetch(`${BASE_URL}?${searchParams.toString()}`);
    const data = await response.json();

    return data.docs.map(book => ({
      key: book.key,
      title: book.title,
      author: book.author_name?.join(', ') || 'Unknown',
      publishYear: book.first_publish_year || 'N/A',
      coverId: book.cover_i,
      coverUrl: book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : 'https://via.placeholder.com/150x220?text=No+Cover',
    }));
  } catch (error) {
    console.error('Error fetching books:', error);
    return [];
  }
}
