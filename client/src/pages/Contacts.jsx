import { useSelector } from 'react-redux';
import { OvalLoader } from 'components/common/Loader/OvalLoader';

import { Container } from 'components/common/Container/Container';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { selectIsLoading } from 'store/seletors';

const Contacts = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      <Container pi="0" mttl="Contacts">
        <Filter /> <br />
        <ContactList />
      </Container>

      <Container pi="0" ttl="Phonebook">
        <ContactForm />
      </Container>

      {isLoading && <OvalLoader />}
    </>
  );
};

export default Contacts;
