import { useState } from 'react';
import Logo from '@shared/assets/cross.svg?react';
import styles from './page.module.scss';
import { Input } from '@shared/ui/input/index.js';
export function Page() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h1 className={styles.title}>Hello, World!</h1>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Click me</button>
      <Logo width={100} height={100} />
      <Input type="text" placeholder={123} />
    </div>
  );
}
