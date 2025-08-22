

export function calculateBookPrice(book) {
    const basePrice = 10;
    const pageFactor = book.pageCount ? book.pageCount * 0.05 : 0;
    const yearFactor = book.publishYear ? (2025 - book.publishYear) * 0.1 : 0;

    const price = basePrice + pageFactor - yearFactor;
    return Math.max(price, 5).toFixed(2); // Minimum price of $5
}
