import React, { useState } from 'react';
import { Space, Tag } from 'antd';
const { CheckableTag } = Tag;

interface AppTagProps {
  tagsData?: {
    tags?: string[];
  };
}

const AppTag: React.FC<AppTagProps> = ({ tagsData = {} }) => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const handleChange = (tag: string, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tag]
      : selectedTags.filter((t) => t !== tag);
    setSelectedTags(nextSelectedTags);
  };

  return (
    <Space size={[0, 8]} wrap>
      {tagsData?.tags?.map((tag: string) => (
        <CheckableTag
          key={tag}
          checked={selectedTags.includes(tag)}
          onChange={(checked) => handleChange(tag, checked)}
        >
          {tag}
        </CheckableTag>
      ))}
    </Space>
  );
};

export default AppTag;
