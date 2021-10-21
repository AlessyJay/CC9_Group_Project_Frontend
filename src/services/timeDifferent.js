const timeDiff = (value) => {
  const newTime = new Date().getTime();
  const diff = newTime - new Date(value).getTime();
  if (diff > 1000 * 60 * 60 * 24 * 7) {
    // console.log('week', diff / (1000 * 60 * 60 * 24 * 7));
    const time = diff / (1000 * 60 * 60 * 24 * 7);
    const x = Math.round(time);
    return `${x} week`;
  } else if (diff > 1000 * 60 * 60 * 24) {
    const time = diff / (1000 * 60 * 60 * 24);
    const x = Math.round(time);
    return `${x} day`;
  } else if (diff > 1000 * 60 * 60) {
    const time = diff / (1000 * 60 * 60);
    const x = Math.round(time);
    return `${x} minute`;
  } else {
    const time = diff / (1000 * 60);
    const x = Math.round(time);
    return `${x} second`;
  }
};

const MOCK_DRAFT = [
  {
    id: 1,
    title: 'Test01',
    target: 'u/Content_Avatar001',
    updatedAt: '2021-10-21 16:38:39',
  },
  {
    id: 2,
    title: 'Content001',
    target: 'u/Content_Avatar001',
    updatedAt: '2021-10-18 16:38:39',
  },
  {
    id: 3,
    title: 'TContent002',
    target: 'u/Content_Avatar001',
    updatedAt: '2021-10-17 16:38:39',
  },
  {
    id: 4,
    title: 'Test0555',
    target: 'r/Content_Avatar001',
    updatedAt: '2021-10-16 16:38:39',
  },
];
export { timeDiff, MOCK_DRAFT };
