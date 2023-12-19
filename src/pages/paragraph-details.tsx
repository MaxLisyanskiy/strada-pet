import { Layout, Typography } from 'antd';
import AppHeader from '../components/header';

const { Paragraph } = Typography;

const ParagraphDetails = () => {
  return (
    <Layout>
      <AppHeader />
      <Typography>
        <Paragraph>Paragraph Details Page</Paragraph>
      </Typography>
    </Layout>
  );
};

export default ParagraphDetails;
