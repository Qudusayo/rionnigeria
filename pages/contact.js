import { FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Button } from "../components/Subscribe/Subscribe";

import styles from "./../styles/Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.Contact}>
      <div className={styles.ContactContent}>
        <div className={styles.ContactContentInfo}>
          <h2>Risalatul Islamiyyat Organization of Nigeria</h2>
          <div className={styles.ContactContentInfoDetails}>
            <span className={styles.Icons}>
              <FiMapPin stroke="#94CC07" strokeWidth={2} size={25} />
            </span>
            <div>
              <span>Postal Address</span>
              <p>
                P. O. Box 22873 U.I. Post Office Ibadan,
                <br /> Oyo State, Nigeria.
              </p>
            </div>
          </div>
          <div className={styles.ContactContentInfoDetails}>
            <span className={styles.Icons}>
              <FiMail stroke="#FF9900" strokeWidth={2} size={25} />
            </span>
            <div>
              <span>Email Address</span>
              <p>info@rionnigeria.org</p>
            </div>
          </div>
          <div className={styles.ContactContentInfoDetails}>
            <span className={styles.Icons}>
              <FiPhone stroke="#039341" strokeWidth={2} size={25} />
            </span>
            <div>
              <span>Phone Number</span>
              <p>+234 (805) 593 6722, +234 (802) 887 6782</p>
            </div>
          </div>
        </div>
        <form className={styles.ContactContentForm}>
          <h2>Send us a Message</h2>
          <div>
            <label htmlFor="name">Your Name</label>
            <input id="name" />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input id="email" />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input id="phoneNumber" />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input id="subject" />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" rows={4}></textarea>
          </div>
          <Button title="Submit" />
        </form>
      </div>
    </div>
  );
}
