import { useState } from 'react';
import { useRecoilState } from 'recoil';

import { modalVisibleState } from '@/core/atoms/modalState';
import styles from './SignIn.module.scss';
import SignInModal from '@/components/Common/Modal/SignInModal';

const UserActions = () => {
  const [modalState, setModalState] = useRecoilState<boolean>(modalVisibleState);
  const toggleModal = () => {
    setModalState(!modalState);
  };

  return (
    <div className={styles.buttonGroup}>
      <button className={styles.signIn} onClick={toggleModal}>
        Sign In
      </button>
      {modalState && <SignInModal onClose={toggleModal} />}
    </div>
  );
};

export default UserActions;
