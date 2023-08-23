import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Template from './component/template';
import Home from './views/home';
import Contratar from './views/contratar';
import './App.css';

const rotas = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: '/contratar',
    element: <Contratar />
  }
]);

function App() {
  return (
    <div className='app'>
      <div className='container'>
        <Template>
          <RouterProvider router={rotas}>
            <Outlet />
          </RouterProvider>
        </Template>
      </div>
    </div>
  );
}

export default App;
