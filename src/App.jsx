import { RouterProvider } from 'react-router-dom';
import { RouterObject } from './RouterList.jsx';

function App() {
  return (
    <RouterProvider router={RouterObject} />
  )
}

export default App;