import Layout from 'components/layout/Layout';
import Detail from 'pages/Detail';
import Main from 'pages/Main';
import SignIn from 'pages/SignIn';
import SignUp from 'pages/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Main />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/rooms/:id" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
