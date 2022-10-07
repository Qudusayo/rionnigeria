import { Card } from "..";
import GridLayout from "../../components/GridLayout/GridLayout";
import Component from "../../layout/Component/Component";

import styles from "./../../styles/analysis.module.scss";

export default function Analysis() {
  return (
    <Component>
      <div className={styles.AnalysisSector}>
        <h2 className={styles.AnalysisSectorTitle}>Analysis</h2>
        <p className={styles.AnalysisSectorInfo}>
          Certain issues, development and topics of discussion deserve thorough
          and critical analysis, or careful examination of such, in order to
          clearly and genuinely understand it. Such may not be as simple as
          their facial meanings or difficult to tackle with emotion, but needed
          to be given a careful examination of the substance in order to find
          out clear truth and form right opinion on it.
        </p>
        <div className={styles.AnalysisSectorContent}>
          <div className={styles.GridFiveLayer}>
            <div className={styles.GridFiveLayerMain}>
              <Card
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                summary="Bibendum lectus vitae, pharetra enim. Odio aenean est eget lectus duis etiam sem in. Lorem tincidunt elit sed odio. At scelerisque in sapien velit libero. Posuere tellus laoreet elementum ac eget. Arcu facilisis velit, dui volutpat amet, consectetur augue sed mauris. Ipsum libero mauris malesuada quis ornare tortor lorem."
              />
            </div>
            <div className={styles.GridFiveLayerSection}>
              <Card
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
              />
              <Card
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
              />
              <Card
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
              />
              <Card
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
              />
            </div>
          </div>
        </div>
        <GridLayout grid={4}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => {
            return (
              <Card
                key={index}
                imageUrl="https://www.arabianbusiness.com/cloud/2022/07/18/dubai-skyline.jpg"
                title="10 Places you can visit after your hajj"
                date="Mon, 15th Aug."
                className={styles.CardAbsolute}
              />
            );
          })}
        </GridLayout>
      </div>
    </Component>
  );
}
