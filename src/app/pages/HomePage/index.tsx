import { translations } from 'locales/translations';
import { Helmet } from 'react-helmet-async';
import { _t } from 'utils/messages';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <span>{_t(translations.title)}</span>
    </>
  );
}
