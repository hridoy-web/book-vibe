import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {

    const { bookId } = useParams()
    // console.log('bookId', bookId)

    const books = useLoaderData()
    // console.log('books', books)

    const expectedBooks = books.find(book => book.bookId == bookId)

    console.log(expectedBooks)

    return (
        <div className='w-11/12 mx-auto justify-between py-8'>
            <div className="card lg:card-side bg-base-100 shadow-sm">
                <figure className='flex-1'>
                    <img
                    className='w-full h-80 md:h-full object-contain transition-all duration-500 hover:scale-105'
                        src={expectedBooks.image}
                        alt={expectedBooks.bookName} />

                </figure>
                <div className="card-body space-y-2 flex-3">
                    <h2 className="card-title text-2xl md:text-4xl font-bold ">{expectedBooks.bookName}</h2>
                    <div>
                        <p className='md:text-xl font-semibold text-gray-500 mb-2'>By: {expectedBooks.author}</p>

                        <div className='divider my-1 md:my-2'></div>

                        <p className='text-xl font-semibold text-gray-600'>{expectedBooks.category}</p>

                        <div className='divider my-1 md:my-2'></div>

                        <p className='font-semibold my-4'>Review: <span className='font-medium text-gray-500'>{expectedBooks.review}</span></p>

                        {/* badge icon */}
                        <div className='flex flex-col sm:flex-row gap-3 '>
                             <h4 className='font-semibold'>Tag:</h4>
                            {
                                expectedBooks.tags.map((tag, index) => <div key={index} className="badge badge-soft badge-success font-semibold"><span></span>{tag}</div> )
                            }
                        </div>

                        <div className='divider my-4'></div>

                        <div className='md:flex justify-between space-y-3 md:space-y-0'>
                            <p className='text-gray-500 font-semibold'>Number of Pages: {expectedBooks.totalPages}</p>
                            <p className='text-gray-500 font-semibold'>Publisher: {expectedBooks.publisher}</p>
                            <p className='text-gray-500 font-semibold'>Year of Publishing: {expectedBooks.yearOfPublishing}</p>
                            <p className='text-gray-500 font-semibold'>Rating: {expectedBooks.rating}</p>
                        </div>
                    </div>
                    <div className="card-actions justify-start md:justify-end gap-4 mt-4">
                        <button className="btn btn-outline btn-primary transition-all duration-500 hover:scale-105">Read</button>
                        <button className="btn btn-info text-white transition-all duration-500 hover:scale-105 ">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;