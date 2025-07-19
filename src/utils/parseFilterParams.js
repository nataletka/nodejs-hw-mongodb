const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = (type) => ['home', 'work', 'personal'].includes(type);

  if (isType(type)) return type;
};

const parseIsFavorite = (value) => {
  const isString = typeof value === 'string';
  if (!isString) return;
  if (value === 'true') return true;
  if (value === 'false') return false;
};

export const parseFilterParams = (query) => {
  const { type, isFavorite } = query;

  const parsedContactType = parseContactType(type);
  const parsedIsFavorite = parseIsFavorite(isFavorite);

  return {
    contactType: parsedContactType,
    isFavorite: parsedIsFavorite,
  };
};
