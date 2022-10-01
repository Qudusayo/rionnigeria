import styles from "./../styles/Info.module.scss";
import { AppreciationCard } from "./about";

export default function About() {
  return (
    <div className={styles.Info}>
      <div className={styles.ActivityCard}>
        Programme of activities of the Organization is designed to aid and
        protect the belief, morals, welfare and Islamic consciousness of Muslim
        community and to enhance their Islamic knowledge and spiritual growth as
        well as to take the truth of Islam to the hearing of unbelievers for
        their guidance and salvation. The following activities have been held or
        still hold at our base:
      </div>
      <div className={styles.InfoContent}>
        <div className={styles.InfoContentSector}>
          <div>
            <h2>Dua' Circus/ Ramadan Iftar</h2>
            <p>
              Du'a Circus are members who voluntarily committed to join Muslims,
              members and non-members alike in their supplication at anytime and
              anywhere. Ramadan Iftar is a mean of family dawah and brotherhood
              bond fortifier, as willing members show their interest to host
              other members for a day iftar during Ramadan. Hosting family is
              attended to by conducting dua/ashkar; deliver short sermon and
              breaking the fast of the day with whatever is offered.
            </p>
          </div>
          <div>
            <h2>Library Service</h2>
            <p>
              We have a mini library from where members and non-members borrow
              books and check for references. All recorded cassettes of the
              Monthly Guest Lecture series are stocked with others like C.D/DVD
              etc, for the benefit of both Muslims and non-Muslims alike. We
              welcome donor of books and other materials to our library.
            </p>
          </div>
          <div>
            <h2>Women Wings/ Sister Circle</h2>
            <p>
              Programme specially designed for and attended by married women and
              spinsters only, where issues peculiar to female and other
              necessary Islamic topics are majorly discussed. It holds
              fortnightly.
            </p>
          </div>
          <div>
            <h2>Quranic Classes</h2>
            <p>
              The group operates Quranic class for adult Muslims who wish to
              learn reading of Quran in Arabic language. There is regular class
              and trainers to attach to, depending on choice of the student.
            </p>
          </div>
          <div>
            <h2>PUBLICATIONS</h2>
            <div>
              <h3>Tracts Distribution</h3>
              <p>
                We are second to none in printing Islamic tracts to educate the
                public about basic Islamic teachings and how to lead a saved
                life. We distribute them freely at any Islamic
                occasion/gathering, mosques, public places and preach them at
                Schools and send them to those who request by post. Since
                inception, over half a million tracts of different topics have
                been distributed in our state and beyond.
              </p>
            </div>
            <div>
              <h3>Book Production</h3>
              <p>
                We have been able to write a number of books from the experience
                and knowledge gained from what our respected imams taught us of
                Allah, His Prophet, religion and blessed life towards attaining
                salvation. And we have used the same knowledge and wisdom to
                answer few publications of the critics of Islam. The books are
                for sales to individuals but are given freely to organizations
                for their library upkeep on request.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.InfoContentSector}>
          <div>
            <h2>Weekly Tahalim</h2>
            <p>
              Mainly lecture for adults delivered by capable members of the
              group every yaom A'had (Sunday) at the centre. We teach every
              aspects of Islamic life as scheduled.
            </p>
          </div>
          <div>
            <h2>Monthly Guest Lecture (MGL)</h2>
            <p>
              Comes up every last yaom A'had (Sunday) of the month. Notable
              Imams/Islamic scholars are invited to deliver lecture on a
              specific issue in Islam in the local language. It used to be tape
              recorded and copies are sold to interested Muslims. Over 190
              lectures have been recorded. The summary of these are presented as
              'Monthly Guest Message'
            </p>
          </div>
          <div>
            <h2>Symposia</h2>
            <p>
              Over the years, the group has organised some symposia to reach
              larger population and different cadre of people to address some
              pressing issues and development.
            </p>
          </div>
          <div>
            <h2>Children Programme</h2>
            <p>
              Designed for children between ages of five to fifteen. It comes up
              every week along side with adult ta’alim. Children are taught some
              verses of Holy Quran and Hadiths on faith and morals. And how to
              worship Allah and how to make use of their tender age in the path
              of Islam and to live for Islam when grown up.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.InfoCard}>{AppreciationCard()}</div>
    </div>
  );
}
