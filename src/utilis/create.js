import { books, saveBooks } from "./app";

export const createBooks = (title, author) => {
  const id = '' + new Date().getTime()
  books.push({
    title: title,
    author: author,
    id: id,
  });

  saveBooks();
}