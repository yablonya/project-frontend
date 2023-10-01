import {Exercise} from "@/types/Exercise";
import styles from "@/components/exercise-card/ExerciseCard.module.css"
import Image from "next/image";
import {FC} from "react";

interface ExerciseCardProps {
  exercise: Exercise,
}

const ExerciseCard:FC<ExerciseCardProps> = ({exercise}) => {
  return (
    <div className={styles.exerciseContainer}>
      <div className={styles.textContainer}>
        <h3>{exercise.name}</h3>
        {exercise.repetitions.length === 2 ?
          <div className={styles.repetitionsBlock}>
            <div>Number of repetitions: {exercise.repetitions[0]}</div>
            <div>Number of approaches: {exercise.repetitions[1]}</div>
          </div>
          :
          <div className={styles.durationBlock}>Number of approaches: {exercise.repetitions[0]}</div>
        }
      </div>
      <img
        className={styles.exerciseImage}
        src={`data:image/jpeg;base64,${exercise.image}`}
        alt="exercise-picture"
      />
    </div>
  );
};

export default ExerciseCard;