import CommonHero from "../components/CommonHero/CommonHero";
import styles from "./../styles/Info.module.scss";

export default function About() {
  return (
    <div className={styles.Info}>
      <CommonHero
        title="About Us"
        info="Get to know more about what we do"
        bg="/bg/about-bg.jpeg"
      />
      <div className={styles.InfoContent}>
        <div className={styles.InfoContentSector}>
          <div>
            <h2>Who We are</h2>
            <p>
              Risalatul Islamiyyat Organization of Nigeria (RION) was founded as
              a youth organization on 29th September 1991, by some Muslim youths
              under the name Islamic Message Group of Nigeria which it retained
              until when it was incorporated with the Federal Government under
              Corporate Affair Commission.
            </p>

            <p>
              At start, lack of Islamic source where Muslims can assess
              information about their religion and contribute their talents and
              provisions to the same, necessitated the establishment of the
              organization in the area where it sprang. And it focus has been
              how to acquaint Muslims with fundamentals of their religion
              through various forms of dawah, directing them to the part of
              unity in the faith and denouncing them from bid&apos;a and
              providing them with best argument against the assaults of
              unbelievers among others.
            </p>

            <p>
              The formation of dawah activities of the group was in line with
              the order of Allah: “Let there arise out of you, band of people
              inviting to all that is good, enjoining others to do what is right
              and forbidding what is wrong, they are the one to attain felicity”
              Q3: 104 and “Invite all to the way of Allah with wisdom and
              beautiful preaching, and argue with them in ways that are best.
              Surely Allah knows best who have strayed from His path and who
              received guidance” Q16:125. This again led to the creation of this
              site in the month of Muharram 1433H (Dec. 2011).
            </p>
          </div>
          <div>
            <h2>Affiliate</h2>
            <p>
              The group is an affiliate member of National Council of Muslim
              Youth Organizations (NACOMYO)-Nigeria and World Assembly of Muslim
              Youth (WAMY)-Saudi Arabia. It is ready to affiliate with any
              non-violence local and foreign Islamic organizations with similar
              aims for the promotion of peaceful Islamic ideology as well as
              unity and welfare of Muslims ummah.
            </p>
          </div>
        </div>
        <div className={styles.InfoContentSector}>
          <div>
            <h2>Our Mission</h2>
            <p>
              Our mission is to establish and provide for humanity, Muslims and
              non-Muslims alike, the veracity of Islam as the only faith by
              which man can lead a true upright and pure life, attain genuine
              peace and salvation and be assured of Blissfull Janat as promised
              by Allah.
            </p>
          </div>
          <div>
            <h2>Aims and Objectives</h2>
            <p>
              To let all mankind be well understood that &ldquo;There is no
              Deity worthy of worship except Allah Ta&apos;ala&rdquo;.
              <br />
              To promote and propagate the only true religion - Islam in all its
              ramifications. To inspire unity and inculcate the message of the
              Holy Qur&apos;an and the Hadith of the Prophet Muhammed (S.A.W.)
              into all mankind especially Muslims. To cater for and enhance the
              health, educational, economic, moral and spiritual needs of Muslim
              faithful with workshops, conferences, films strip and whatever is
              in our disposal.
              <br />
              To call non-Muslims into the fold of Islam through comparative
              lectures, prints, C.D., symposia, debates, and other beautiful
              manners according to Quran16:125.
            </p>
          </div>
          <div>
            <h2>Core value</h2>
            <p>Justice and Unity (Q4: 135; Q3: 103).</p>
          </div>
          <div>
            <h2>Future Activity/Project</h2>
            <p>
              We determine to fortify, modernize and expand our dawah activities
              by building an Islamic Message Centre on plots of land acquired by
              the group. It will be a centre to promote education and health and
              support the peace and welfare of the populace irrespective of the
              faith or tribe as well as cooperating in such for the benefit of
              humanity.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.InfoCard}>{AppreciationCard()}</div>
    </div>
  );
}

export function AppreciationCard() {
  return (
    <>
      <h2>Appreciation/ Request</h2>
      <p>
        We appreciate your visitation to our Website. The future begins now and
        we are happy to tell you that our building project has begun. RION is a
        small and non-profit dawah organization striving to acquaint Muslims
        with the best and necessary information about their religion and trying
        to cater for their welfare, thereby making them secured and conscious of
        themselves and the faith. The effort so far was shouldered by the few
        committed people like you. But as we embark on the building project we
        would like you also to be part of the expanded activities. Please Donate
        Today, Fiisabilillah.
      </p>
      <address>
        Islamic Message Group of Nigeria Account
        <br />
        Number: 0008681914
        <br />
        Union Bank Nigeria Plc.
      </address>
      <p>
        If you have paid any amount to our account or you have any comment or
        question, please kindly Contact Us for detail.
        <br />
        Thanks and Jazakum Lahu Khairan!
      </p>
    </>
  );
}
