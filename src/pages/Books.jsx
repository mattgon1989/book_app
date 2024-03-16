//show list of books main page show to anyone 
//have a feature to find book by name with filter
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"
import { fetchBooks } from '../API';
const Books = () => {
  //  const [filterText,setFilterText] = useState("");
//    const filteredBooks = books.filter(book => book.name.toLowerCase().includes(filterText.toLowerCase()));
    const [books, setBooks] = useState([]);
    useEffect(() => {
async function fetchData() {

    const { books } = await fetchBooks();
    setBooks(books);
}
fetchData();
    }, [])
    console.log(books);
    return (
        <div>
            <h1>Books</h1>
            <p>Books we have available:</p>
            
            <ul>
                {books.map(book => (
                    <li className="bookCard" key={book.id}>
                        <Link to={`/singleBook/${book.id}`}>{book.name}</Link>
                        <h2>{book.title}</h2>
                        <img src={book.coverimage} alt={book.title} />
                        <p>Author: {book.author}</p>
                        <p>Summary: {book.description}</p>
                        
                        
                        </li>
                ))}
            </ul>
        </div>
    )
}

export default Books;