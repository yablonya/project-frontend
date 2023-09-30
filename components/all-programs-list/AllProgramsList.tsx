import styles from "@/components/all-programs-list/AllProgramsList.module.css";
import TrainingProgramCard from "@/components/training-program-card/TrainingProgramCard";
import {TrainingProgram} from "@/types/TrainingProgram";
import {FC} from "react";
import dumbbell from "@/public/icons/dumbbell.png"
import back from "@/public/icons/back.png";
import running from "@/public/icons/running.png";
import cardio from "@/public/icons/cardio.png";

interface AllProgramsListProps {
  allPrograms: TrainingProgram[],
}

const AllProgramsList:FC<AllProgramsListProps> = ({allPrograms}) => {
  const colors = ["#E7CEA6", "#97DECE", "#5A96E3", "#EF9595"];
  const pictures = [dumbbell, back, running, cardio];

  return (
    <div className={styles.wrapper}>
      {allPrograms && allPrograms.map(({name}, index) => (
        <TrainingProgramCard
          key={name}
          name={name}
          backgroundColor={colors[index]}
          picture={pictures[index]}
        />
      ))}
    </div>
  )
}

export default AllProgramsList;