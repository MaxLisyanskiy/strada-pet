import { ConfigProvider, theme } from 'antd';
import AppRoutes from './router';
import { useAppSelector } from './store/store-hooks';

const App = () => {
  const userTheme = useAppSelector((state) => state.theme.userTheme);

  return (
    <ConfigProvider
      theme={{
        algorithm: !userTheme ? theme.defaultAlgorithm : theme.darkAlgorithm,
        components: {
          Breadcrumb: {
            linkHoverColor: '#AED6F1',
          },
        },
      }}
    >
      <AppRoutes />
    </ConfigProvider>
  );
};

export default App;
