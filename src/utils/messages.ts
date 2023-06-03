import i18next from 'locales/i18n';

export const _t = (path: string): string => {
  if (!path) {
    return '_NOT_TRANSLATED_';
  }

  return i18next.t(path);
};

export const createMessageWithParams = (p: {
  path: string;
  params: string[];
  pattern?: string;
}) => {
  const { path, params } = p;
  // eslint-disable-next-line no-template-curly-in-string
  const pattern = p.pattern || '${keyword}';

  return params.reduce(
    (message: string, param: string) => message.replace(pattern, param),
    i18next.t(path),
  );
};
