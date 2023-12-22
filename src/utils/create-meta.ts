type MetaData = {
  title?: string;
  description?: string;
};

const updateMetaData = (data: MetaData): void => {
  const head = document.head || document.getElementsByTagName('head')[0];

  const existingTitle = document.querySelector('title');
  const existingDescription = document.querySelector(
    'meta[name="description"]'
  );

  if (existingTitle) {
    head.removeChild(existingTitle);
  }

  if (existingDescription) {
    head.removeChild(existingDescription);
  }

  if (data.title) {
    const newTitle = document.createElement('title');
    newTitle.textContent = data.title;
    head.appendChild(newTitle);
  }

  if (data.description) {
    const newDescription = document.createElement('meta');
    newDescription.name = 'description';
    newDescription.content = data.description;
    head.appendChild(newDescription);
  }
};

export default updateMetaData;
