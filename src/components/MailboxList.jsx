// src/components/MailboxList.jsx
import { Link } from 'react-router-dom';

const MailboxList = (props) => {
  return (
    <>
      <h2>Mailbox List</h2>
      <ul className='mail-box'>
        {props.mailboxes.map(mailbox => (
          <li key={mailbox._id} className='mail-box-list'>
            <Link to={`/mailboxes/${mailbox._id}`}>
              <h3>{mailbox.boxholder}'s Mailbox</h3>
              <p>Box Number: {mailbox._id}</p>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MailboxList;
