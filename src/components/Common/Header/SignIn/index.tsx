import useModalStore from '@/store/modalStore';
import styles from './SignIn.module.scss';
import SignInModal from '@/components/Common/Modal/SignInModal';

const UserActions = () => {
  const { modalVisible, toggleModal } = useModalStore();

  return (
    <div className={styles.buttonGroup}>
      <button className={styles.signIn} onClick={toggleModal}>
        Sign In
      </button>
      {modalVisible && <SignInModal onClose={toggleModal} />}
    </div>
  );
};

export default UserActions;
