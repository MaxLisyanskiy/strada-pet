// import React from 'react';
// import { Card, Avatar, Typography } from 'antd';
// import { CommentInterface } from '../types/comment-types';

// const { Title } = Typography;

// interface CommentProps {
//   key: number;
//   comment: CommentInterface;
// }

// const Comment: React.FC<CommentProps> = ({ key, comment }) => {
//   const { body, createdAt, updatedAt } = comment;
//   const { image, username } = comment.author;

//   return (
//     <>
//       <Card
//         key={key}
//         type="inner"
//         extra={<Avatar src={image} />}
//         title={username}
//         style={{ margin: '10px 0' }}
//       >
//         <div style={{ borderBottom: '1px solid black' }}>
//           <Typography
//             style={{
//               fontSize: '18px',
//             }}
//           >
//             {body}
//           </Typography>
//         </div>
//         <div style={{ margin: '10px 0' }}>
//           <Title level={5}>
//             Created At: {new Date(createdAt).toLocaleString()}
//           </Title>
//         </div>
//         <div>
//           <Title level={5}>
//             Updated At: {new Date(updatedAt).toLocaleString()}
//           </Title>
//         </div>
//       </Card>
//     </>
//   );
// };

// export default Comment;
