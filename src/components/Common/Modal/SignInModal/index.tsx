import Image from 'next/image';

import styles from './Modal.module.scss';
import kakaoIcon from '@public/kakaotalk_icon.png';
import facebookIcon from '@public/facebook_icon.png';
import googleIcon from '@public/google_icon.png';

interface ModalProps {
  onClose: () => void;
}

const socialLogins = [
  {
    name: 'Kakao',
    icon: kakaoIcon,
    alt: 'kakao icon',
  },
  {
    name: 'Facebook',
    icon: facebookIcon,
    alt: 'facebook icon',
  },
  {
    name: 'Google',
    icon: googleIcon,
    alt: 'google icon',
  },
];

const Modal = ({ onClose }: ModalProps) => (
  <div className={styles.modal}>
    <div className={styles.modalContent}>
      <span className={styles.closeButton} onClick={onClose}>
        &times;
      </span>
      <div className={styles.loginGroup}>
        <h2>로그인</h2>
        <form className={styles.loginForm}>
          <input type='email' placeholder='이메일' required />
          <input type='password' placeholder='비밀번호' required />
          <button type='submit'>로그인</button>
        </form>
        <h2>소셜 로그인</h2>
        <div className={styles.socialLogin}>
          {socialLogins.map(({ name, icon, alt }) => (
            <button key={name}>
              <Image src={icon} alt={alt} width={30} height={30} />
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
