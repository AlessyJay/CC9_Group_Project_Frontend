const timeDiff = value => {
  const newTime = new Date().getTime();
  const diff = newTime - new Date(value).getTime();
  if (diff > 1000 * 60 * 60 * 24 * 7) {
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

const formatDate = date => {
  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);
};

export { timeDiff, formatDate };
