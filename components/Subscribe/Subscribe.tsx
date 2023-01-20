import { useState } from "react";
import styles from "./Subscribe.module.scss";
import { ButtonType } from "../../types";

export default function Subscribe() {
  const [email, setEmail] = useState("");

  const emailSubmissionHandler = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className={styles.Subscribe}>
      <div className={styles.SubscribeContent}>
        <div className={styles.SubscribeHeader}>
          <h2>Subcribe so you don&apos;t Miss Anything</h2>
          <span>
            By Becoming a member of our email list, You will be the first hear
            about a news
          </span>
        </div>
        <form
          onSubmit={emailSubmissionHandler}
          className={styles.SubscribeForm}
        >
          <label htmlFor="subscribeEmail">Email Address</label>
          <input
            id="subscribeEmail"
            type={"email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button title="Subscribe" />
        </form>
      </div>
    </div>
  );
}

export function Button({
  title,
  value,
  onClick,
  isDisabled = false,
}: ButtonType) {
  return (
    <button className={styles.Button} type="submit" disabled={isDisabled}>
      {title}
    </button>
  );
}
