import React, { use } from 'react';

import BookCard from '../../components/Ui/BookCard';

const booksPromise = fetch('/book-vibe/Data.json').then(res => res.json())

const AllBooks = () => {

    const booksData = use(booksPromise)
    // console.log('data', booksData)

    return (
        <div className='w-11/12 mx-auto'>
            <h2 className='font-bold text-3xl md:text-4xl text-center'>Books</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-5 md:py-8'>
                {
                    booksData.map(books => <BookCard key={books.bookId} books={books} ></BookCard>)
                }
            </div>
        </div>
    );
};

export default AllBooks;