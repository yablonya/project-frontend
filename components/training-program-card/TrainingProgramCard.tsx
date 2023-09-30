import styles from "@/components/training-program-card/TrainingProgram.module.css";
import {FC} from "react";
import Image, {StaticImageData} from "next/image";
import Link from "next/link";

interface TrainingProgramProps {
  name: string,
  backgroundColor: string
  picture: StaticImageData
}

const TrainingProgramCard:FC<TrainingProgramProps> = ({name, backgroundColor, picture} ) => {
  return (
    <Link style={{backgroundColor: `${backgroundColor}`}} className={styles.programContainer} href={name}>
      <h1>{name}</h1>
      <Image
        src={picture}
        height={150}
        style={{opacity: "0.5"}}
        alt="program-picture"
      />
    </Link>
  )
}

export default TrainingProgramCard;