// src/components/MailboxDetails.jsx
import { useParams } from 'react-router-dom';

const MailboxDetails = (props) => {
  const { mailboxId } = useParams();
  const mailbox = props.mailboxes.find((mb) => mb._id === Number(mailboxId));

  if (!mailbox) {
    return <h2>Mailbox Not Found!</h2>;
  }

  return (
    <>
      <h2>Mailbox Details</h2>
      <p><strong>Box Number:</strong> {mailbox._id}</p>
      <p><strong>Boxholder Name:</strong> {mailbox.boxholder}</p>
      <p><strong>Box Size:</strong> {mailbox.boxSize}</p>
    </>
  );
};

export default MailboxDetails;
