import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button/Button';
import AppIcon from '../../components/Icons/AppIcon';
import LabeledInput from '../../components/LabeledInput/LabeledInput';
import styles from './Login.module.css';

function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`Fake login with ${email}:${password}`);
  }

  return (
    <div className={styles.container}>
      <header>
        <AppIcon />
      </header>
      <img src="/fadeOverlay.png" alt="" className={styles.fadeOverlay} />
      <main className={styles.main}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <LabeledInput
            label="Email"
            placeholder="Email"
            value={email}
            onChange={setEmail}
            type="email"
            required
          />
          <LabeledInput
            label="Password"
            placeholder="Password"
            value={password}
            onChange={setPassword}
            type="password"
            required
          />
          <Button>Login</Button>
        </form>
      </main>
      <footer>
        {/* <SocialLogins /> */}
        <p className={styles.hint}>Don't have an account?</p>
        <Link to="/Register">Register</Link>
      </footer>
    </div>
  );
}

export default Login;
