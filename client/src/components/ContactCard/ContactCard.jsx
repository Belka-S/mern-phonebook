import { BsTelephone, BsEnvelope, BsWhatsapp, BsGithub } from 'react-icons/bs';
import { LiaTelegram, LiaViber, LiaLinkedinIn } from 'react-icons/lia';
import { PiMapPinFill } from 'react-icons/pi';

import { Div, List } from './ContactCard.styled';
import { useAuth, useContacts } from 'utils/hooks';

const ContactCard = () => {
  const { userId } = useAuth();
  const { activeContact, isLoading } = useContacts();

  const shouldRender = !isLoading && userId === activeContact?.owner;
  const off = ['_id', 'name', 'group', 'favorite', 'owner'];

  const link = {
    phone: {
      href: `tel:${activeContact?.phone}`,
      icon: <BsTelephone size="14" />,
    },
    email: {
      href: `mailto:${activeContact?.email}`,
      icon: <BsEnvelope size="14" />,
    },
    whatsapp: {
      href: `https://wa.me/${activeContact?.whatsapp}`,
      icon: <BsWhatsapp size="14" />,
    },
    viber: {
      href: `viber://chat?number:+${activeContact?.viber}`,
      icon: <LiaViber size="20" />,
    },
    telegram: {
      href: `https://t.me/${activeContact?.telegram.replace('@', '')}`,
      icon: <LiaTelegram size="16" />,
    },
    linkedin: {
      href: activeContact?.linkedin,
      icon: <LiaLinkedinIn size="20" />,
    },
    github: { href: activeContact?.github, icon: <BsGithub size="16" /> },
    address: {
      href:
        activeContact?.address &&
        'https://www.google.com/maps/search/' +
          `${activeContact?.address.split(/\s+/).join('+')}`,
      icon: <PiMapPinFill size="16" />,
    },
  };

  return (
    <>
      <Div>
        {shouldRender &&
          Object.keys(link).map(
            key =>
              activeContact[key] && (
                <a
                  href={link[key].href}
                  target="_blank"
                  rel="noreferrer"
                  key={link[key].href}
                >
                  {link[key].icon}
                </a>
              )
          )}
      </Div>
      <List>
        {shouldRender &&
          Object.keys(activeContact).map(
            key =>
              !off.includes(key) &&
              activeContact[key] && (
                // <li key={key}>{`${key}: ${activeContact[key]}`}</li>
                <li key={key}>
                  <span>{`${key}`}</span>
                  <span>{`${activeContact[key]}`}</span>
                </li>
              )
          )}
      </List>
    </>
  );
};

export default ContactCard;
