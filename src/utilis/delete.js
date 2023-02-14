import render, { deleteBooks} from "./app";

export const removeBooks = (event) => {
  const buttonDelete = event.target;
  const idToDelete = buttonDelete.id;
  
  deleteBooks(idToDelete)
  render()
}