import Layout from 'components/layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element="" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
