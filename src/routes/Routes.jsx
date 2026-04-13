import MainLayout from '../layout/MainLayout';
import Homepage from '../pages/homepage/Homepage';
import Books from '../pages/books/Books';
import { createBrowserRouter } from 'react-router';
import ErrorPage from '../pages/errorPage/ErrorPage';
import BookDetails from '../pages/bookDetails/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/books',
        element: <Books />
      },
      {
        path: '/bookDetails/:bookId',
        Component: BookDetails,
        loader: ()=> fetch('/book-vibe/Data.json')
      }
    ],
    errorElement: <ErrorPage />
  }
],
  {
    basename: "/book-vibe"
  }
);