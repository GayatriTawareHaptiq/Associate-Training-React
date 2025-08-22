export function calculateBookPrice(book) {
    const basePrice = 10;
    const pageFactor = book.pageCount ? book.pageCount * 0.05 : 0;

    // Extract year from publishedDate (e.g. "2015-06-01")
    const publishedYear = book.publishedDate
        ? parseInt(book.publishedDate.substring(0, 4), 10)
        : null;

    const yearFactor = publishedYear ? (2025 - publishedYear) * 0.1 : 0;

    const price = basePrice + pageFactor - yearFactor;
    return Math.max(price, 5).toFixed(2); // Minimum price of ₹5
}
