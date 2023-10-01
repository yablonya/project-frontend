import {TrainingProgram} from "@/types/TrainingProgram";
import {FC} from "react";
import ExerciseCard from "@/components/exercise-card/ExerciseCard";
import styles from "@/components/training-program-info/TrainingProgramInfo.module.css"

interface TrainingProgramProps {
  trainingProgram: TrainingProgram
}
const TrainingProgramInfo:FC<TrainingProgramProps> = ({trainingProgram}) => {
  return (
    <div className={styles.wrapper}>
      {trainingProgram.exercises.map((exercise, index) => (
        <ExerciseCard key={index} exercise={exercise}/>
      ))}
    </div>
  );
};

export default TrainingProgramInfo;
