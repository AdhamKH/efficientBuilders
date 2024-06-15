"use client";
import React from "react";
import styles from "./style.module.scss";
const Icon = () => {
  return (
    <svg
      width="48"
      height="49"
      viewBox="0 0 48 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        y="0.25"
        width="48"
        height="48"
        rx="24"
        fill="url(#pattern0_2334_78190)"
      />
      <defs>
        <pattern
          id="pattern0_2334_78190"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use href="#image0_2334_78190" transform="scale(0.005)" />
        </pattern>
        <image
          id="image0_2334_78190"
          width="200"
          height="200"
          href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDcuMS1jMDAwIDc5LmVkYTJiM2ZhYywgMjAyMS8xMS8xNy0xNzoyMzoxOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIDIzLjEgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTYwQjY2NkU2MDIxMTFFQzk0QkVBRkUwOTE5N0ZDNzIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTYwQjY2NkY2MDIxMTFFQzk0QkVBRkUwOTE5N0ZDNzIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5NjBCNjY2QzYwMjExMUVDOTRCRUFGRTA5MTk3RkM3MiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo5NjBCNjY2RDYwMjExMUVDOTRCRUFGRTA5MTk3RkM3MiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PolfH7MAAAMAUExURfaoQvahNP705vapRPakOfzfufamPvetTPrKjfvWp/iyWPzgvfi2YfeqR/ewVPvdtPesS/3w3vnAdveuUPeqRf748vm+cvvYq/706PaeLveyWP727PadKv3myvzkxfesSvm8bvnHhfm4Zf3ozfakOPzbsfziwPnEfv7y4/726v3ozP3u2/rPlvrNkvvQmf3q0vi6afajOPvYrPvSnPm+c/768/enQPrIiP3s1/i8bPepRvvWpvrMkPnCfPvUofi5Zv3v3PixVfamPPvUovzmyP3s2PaiNfvQmPm6aPnBePvar/aqRPrAePivUfvbsf737vzjwvvarvm9b/zq0fzguvi0W/izWvvOlPzlxv7w3/7z5PetTv/47/3nzPm+cPnEgP3p0PvQm/vfuv3x4PrIiv7z5vzZr/vXqPzctP3r1P79/Pzkw/erSfafL/3s1Pe0XPrEgP/89/zbsvakO/i7a/vgvPnCe/vTnvvUpPi3ZPnGgvi6Z/7s1PWiNPrCe/3t2PvNlPnMkf/79/rKi/3y4vzjxPvYqfvWpPvTofvQl/i5Z/rPmPnCefrHhvzWp/rGg/rFgvnFgvaeLfWcKf7s1vaoQf716frLjvnIifm4Y/726P3v2/rJive4Y/i3Yv////ahM/aiNPahMvagMf78+PagMPaiNvi0Xvzet//+/f///v/+/vajN/agMvzetvahMf/9+v/9+//8+fajNv/69P/8+P/+/PaiN/i1X//69f78+faiM/748P///f/9+f758v/58vagL/iuT/ajNfvZrf7x4f769PalPfagM//8+v748f/48f3z5vzdtv3t2f/++/ezW/ejOP/79v78+v769f7///zfvPrOkv779v3x4/i1Xf3u2fnGgf316v7pzvm9cfzetfvgu/rBefi2Xve0W/egMvvarf/8+/zfuP779P/58/3myP3y5fafLv7y4fahNvrLj/akN/izXP/+//euTfWjNfnBefi8a/rRm/3q0PalO/nKivrUoP3lx/vVpv/79OARZM4AABO9SURBVHja7F19XFPnvc8h4QSigZh4g4MREDBQeZcYNCIVaVNFQWSCAqXSMofUxKmgLa4r1r6spXXWroX1lstznnNIJCGR9xcFBRFK37Rqu9bZrXZu987ZcW/vy7xZ7rrd5wRUXpIjxpIIn/P8xUeTnOf7/N5/z+/3Oxz1LFkc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"
        />
      </defs>
    </svg>
  );
};
const BusinessModal = ({ data }: any) => {
  console.log("data business", data[0]?.words);

  const evenArr = () => {
    let arr: string[] = [];
    data[0]?.words?.map((e: string, index: number) => {
      if (index % 2 === 0) {
        return arr.push(e);
      } else {
      }
    });
    return arr;
  };

  const oddArr = () => {
    let arr: string[] = [];
    data[0]?.words?.map((e: string, index: number) => {
      if (index % 2 === 0) {
      } else {
        return arr.push(e);
      }
    });
    return arr;
  };

  return (
    <section className={styles["business-model"]}>
      <div className={styles["content-container"]}>
        <div className={styles["left-column"]}>
          <p className={styles.subtitle}>Our story</p>
          <h1 className={styles.headline}>Our Business Model Emphasizes:</h1>
        </div>
        <div className={styles["right-column"]}>
          {data[0]?.words?.map((e: string, index: number) => {
            return (
              <div className={`${styles.point}`}>
                <div className={styles.icon}>
                  {index % 2 === 0 ? <Icon /> : ""}
                </div>
                <div className={`${styles.details} ${styles.margin}`}>
                  <h2>{index % 2 === 0 ? e : ""}</h2>
                  <p> {index % 2 === 0 ? "" : e}</p>
                  {/* <h3>Proactive Updates</h3>
                  <p>
                    We understand that construction projects can face unforeseen
                    challenges. By prioritizing open and continuous
                    communication, we keep everyone informed throughout every
                    phase of the project, ensuring transparency and trust.
                  </p>
                  <h3>Responsive Service</h3>
                  <p>
                    Our team is always available to answer questions, address
                    concerns, and provide updates, ensuring that you are never
                    in the dark about the status of your project.
                  </p> */}
                </div>
              </div>
            );
          })}
          <div className={styles.point}>
            <div className={styles.icon}>
              <Icon />
            </div>
            <div className={styles.details}>
              <h2>Unwavering Commitment to Communication</h2>
              <h3>Proactive Updates</h3>
              <p>
                We understand that construction projects can face unforeseen
                challenges. By prioritizing open and continuous communication,
                we keep everyone informed throughout every phase of the project,
                ensuring transparency and trust.
              </p>
              <h3>Responsive Service</h3>
              <p>
                Our team is always available to answer questions, address
                concerns, and provide updates, ensuring that you are never in
                the dark about the status of your project.
              </p>
            </div>
          </div>
          <div className={styles.point}>
            <div className={styles.icon}>
              <Icon />
            </div>
            <div className={styles.details}>
              <h2>Exemplary Cleanliness and Workmanship</h2>
              <h3>10-Year Workmanship Warranty</h3>
              <p>
                Our confidence in our workmanship is backed by a decade-long
                warranty, guaranteeing the quality and durability of our
                installations.
              </p>
              <h3>Pristine Installations</h3>
              <p>
                We take immense pride in the neatness of our conduit runs and
                pipe work. Not only is our craftsmanship top-notch, but we also
                ensure that every job site is left cleaner than we found it,
                reflecting our high standards.
              </p>
            </div>
          </div>
          <div className={styles.point}>
            <div className={styles.icon}>
              <Icon />
            </div>
            <div className={styles.details}>
              <h2>Extensive Experience and Confidence</h2>
              <h3>Versatile Expertise</h3>
              <p>
                Since our inception as a solar lead installer, we have handled
                an extensive variety of installation types. Our team is
                well-versed in working with all roof types and ground mount
                configurations, ensuring adaptability and proficiency regardless
                of project complexity.
              </p>
              <h3>Ready for Any Challenge</h3>
              <p>
                Our long-standing experience equips us to approach each project
                with confidence, fully prepared to meet and exceed the demands
                of any job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessModal;
