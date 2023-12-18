import { ConfigProvider, theme } from 'antd';
import { useAppSelector } from './store/store-hooks';
import { Routes, Route } from 'react-router';
import MainPage from './pages/main-page';
import ParagraphDetails from './pages/paragraph-details';
import Profile from './pages/profile';
import NotFoundPage from './pages/not-found-page';
import Layout from './components/layout';
import SignIn from './pages/sign-in';

const App = () => {
  const userTheme = useAppSelector((state) => state.theme.userTheme);

  return (
    <ConfigProvider
      theme={{
        algorithm: !userTheme ? '' : theme.darkAlgorithm,
      }}
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/ParagraphDetails" element={<ParagraphDetails />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
};

export default App;
