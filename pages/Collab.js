import React, { useState, useEffect } from 'react';
import { getSession, signIn } from 'next-auth/react';
import styles from '../styles/collab.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';

const Collab = () => {
  const router = useRouter();

  let email, session;

  const [visible, setVisible] = useState(true);

  const [statuses, setStatuses] = useState(null);

  useEffect(() => {
    (async () => {
      session = await getSession();
      email = session?.user.email;
      await axios.get(`/api/Group/group/?email=${email}`).then((res) => {
        setStatuses(res.data.status);
      });
      if (session) {
        email = JSON.stringify(session?.user.email);
      }
    })();
  }, []);

  const redirect = () => {
    if (typeof window !== 'undefined') {
      router.push('/MainCollab');
    }
  };

  return (
    <section className={styles.cont}>
      {(statuses === null || statuses === '' || statuses === undefined) && (
        <a className={styles.btn} href="/StudentGroup">
          Create Student Group
        </a>
      )}
      {statuses === 'Approved' && redirect()}
      <h1>{statuses === 'Pending' && 'Group Approval Status is Pending'}</h1>
      {statuses === 'Rejected' && <h1>Group Plea is Rejected</h1>}
    </section>
  );
};

export default Collab;
