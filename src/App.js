import logo from './logo.svg';
import './App.css';
import EmployeeInfo from './component/EmployeeInfo';
import AllUser from './component/AllUser';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Details from './component/Details';
import { Toaster } from 'react-hot-toast';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <EmployeeInfo></EmployeeInfo>
    },
    {

      path: '/details/:id',
      element: <Details></Details>,
      loader: ({ params }) => fetch(`http://localhost:5000/users/${params?.id}`)
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}>
        <Toaster />
      </RouterProvider>

    </div>
  );
}

export default App;
