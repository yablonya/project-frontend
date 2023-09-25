import styles from "@/components/training-program-card/TrainingProgram.module.css";
import {FC} from "react";

interface TrainingProgramProps {
  name: string,
  backgroundColor: string
}

const TrainingProgramCard:FC<TrainingProgramProps> = ({name, backgroundColor} ) => {
  return (
    <div style={{backgroundColor: `${backgroundColor}`}} className={styles.programContainer}>
      {name}
    </div>
  )
}

export default TrainingProgramCard;