import { Chrono } from "react-chrono";
import styles from "./TimeLine.module.css";
export default function TimeLine() {
  const items = [
    {
      title: "Curso de Platzi 1",
      cardTitle: "Event 1",
      cardSubtitle: "Event 1 Subtitle",
      cardDetailedText: "This is the first event on the timeline.",
    },
    {
      title: "Curso de Platzi 2",
      cardTitle: "Event 2",
      cardSubtitle: "Event 2 Subtitle",
      cardDetailedText: "This is the second event on the timeline.",
    },
    {
      title: "Curso de Platzi 3",
      cardTitle: "Event 3",
      cardSubtitle: "Event 3 Subtitle",
      cardDetailedText: "This is the third event on the timeline.",
    },
    {
      title: "UTN",
      cardTitle: "Event 3",
      cardSubtitle: "Event 3 Subtitle",
      cardDetailedText: "This is the third event on the timeline.",
    },
    {
      title: "SoyHenry Start",
      cardTitle: "Event 3",
      cardSubtitle: "Event 3 Subtitle",
      cardDetailedText: "This is the third event on the timeline.",
    },
    {
      title: "PI - food",
      cardTitle: "Event 3",
      cardSubtitle: "Event 3 Subtitle",
      cardDetailedText: "This is the third event on the timeline.",
    },
    {
      title: "PI - Human Conet",
      cardTitle: "Event 3",
      cardSubtitle: "Event 3 Subtitle",
      cardDetailedText: "This is the third event on the timeline.",
    },
    {
      title: "Henry Finish",
      cardTitle: "Event 3",
      cardSubtitle: "Event 3 Subtitle",
      cardDetailedText: "This is the third event on the timeline.",
    },
  ];

  return (
    <div className={styles.timeLineContainer}>
      <Chrono items={items} mode="VERTICAL_ALTERNATING" itemWidth={150} />
    </div>
  );
}
