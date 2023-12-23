import React, { useState } from 'react';
import { Space, Tag } from 'antd';
import { useAppDispatch, useAppSelector } from '../store/store-hooks';
import { checkTagName } from '../store/reducers/tag-slice';
const { CheckableTag } = Tag;

interface AppTagProps {
  tagsData?: {
    tags?: string[];
  };
}

const AppTag: React.FC<AppTagProps> = ({ tagsData = {} }) => {
  const dispatch = useAppDispatch();
  const [selectedTag, setSelectedTag] = useState<string>('');
  const [toggle, setToggle] = useState<boolean>(true);

  const handleChange = (tag: string, checked: boolean) => {
    setSelectedTag(checked ? tag : '');
  };
  const tagName = useAppSelector((state) => state.tagName.tagName);

  return (
    <Space size={[0, 8]} wrap>
      {tagsData?.tags?.map((tag: string) => (
        <CheckableTag
          key={tag}
          checked={selectedTag === tag}
          onChange={(checked) => {
            handleChange(tag, checked);
          }}
          onClick={() => {
            setToggle(!toggle);
            dispatch(checkTagName(toggle ? tag : ''));
            if (tagName !== tag) {
              setToggle(!toggle);
              dispatch(checkTagName(tag));
            }
          }}
        >
          {tag}
        </CheckableTag>
      ))}
    </Space>
  );
};

export default AppTag;
