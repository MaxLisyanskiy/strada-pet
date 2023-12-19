import { ConfigProvider, theme } from 'antd';
import { useAppSelector } from './store/store-hooks';
import AppRoutes from './router/index';

const App = () => {
  const userTheme = useAppSelector((state) => state.theme.userTheme);

  return (
    <ConfigProvider
      theme={{
        algorithm: !userTheme ? '' : theme.darkAlgorithm,
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  );
};

export default App;
