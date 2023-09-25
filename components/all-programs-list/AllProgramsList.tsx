import styles from "@/components/all-programs-list/AllProgramsList.module.css";
import TrainingProgramCard from "@/components/training-program-card/TrainingProgramCard";
import {TrainingProgram} from "@/types/TrainingProgram";
import {FC} from "react";

interface AllProgramsListProps {
  allPrograms: TrainingProgram[],
}

const AllProgramsList:FC<AllProgramsListProps> = ({allPrograms}) => {
  const colors = ["#E7CEA6", "#97DECE", "#5A96E3", "#EF9595"];

  return (
    <div className={styles.wrapper}>
      {allPrograms && allPrograms.map(({name}, index) => (
        <TrainingProgramCard key={name} name={name} backgroundColor={colors[index]}/>
      ))}
    </div>
  )
}

export default AllProgramsList;