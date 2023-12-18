import { ConfigProvider, theme } from 'antd';
import useAppSelector from './hooks/use-app-selector';
import { Routes, Route } from 'react-router';
import MainPage from './pages/main-page';
import ParagraphDetails from './pages/paragraph-details';
import Profile from './pages/profile';
import NotFoundPage from './pages/not-found-page';
import Layout from './components/layout';

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
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </ConfigProvider>
  );
};

export default App;
