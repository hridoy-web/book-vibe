import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router';

const BookCard = ({ books }) => {
    return (
        <Link to={`/bookDetails/${books.bookId}`} className="card bg-base-100 border border-gray-50 drop-shadow-2xl w-full h-full">
            <figure className='p-2'>
                <img className='w-full h-64 md:h-96 object-contain transition-all duration-500 hover:scale-105'
                    src={books.image}
                    alt={books.bookName} />
            </figure>

            <div className="card-body">

                {/* badge icon */}
                <div className='flex gap-2 mt-1'>
                    {
                        books.tags.map((tags, index) => <div key={index} className="badge badge-soft badge-success font-semibold">{tags}</div>)
                    }
                </div>

                <h2 className="card-title text-xl mt-2">
                    {books.bookName}
                </h2>

                <div className='flex justify-between mt-3 '>
                    <p className='font-semibold text-gray-500'>By: {books.author}</p>
                    <p className='font-semibold text-gray-500 text-right'>Publish: {books.yearOfPublishing}</p>
                </div>

                <div className="divider m-0"></div>

                <div className="card-actions justify-end">
                    <p className=' font-semibold text-lg text-gray-700'>{books.category}</p>
                    <div className='flex gap-1 items-center
                                        '>
                        <span className='text-yellow-500'><IoStar /></span>
                        <p className='text-right font-semibold text-lg text-gray-700'>
                            {books.rating}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default BookCard;