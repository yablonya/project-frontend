import {TrainingProgram} from "@/types/TrainingProgram";
import {getTrainingProgram} from "@/lib/api";
import {Metadata} from "next";

interface Params {
  params: {
    programName: string
  }
}

export async function generateMetadata ({params: {programName}}: Params): Promise<Metadata> {
  const trainingProgramData: Promise<TrainingProgram> = getTrainingProgram(programName);
  const trainingProgram: TrainingProgram = await trainingProgramData;
  console.log(trainingProgram)

  return {
    title: trainingProgram.name,
  }
}

const TrainingProgram = async ({params: {programName}}: Params) => {
  const trainingProgramData: Promise<TrainingProgram> = getTrainingProgram(programName);
  const trainingProgram: TrainingProgram = await trainingProgramData;
  return (
    <main>
      {trainingProgram.name}
    </main>
  )
}

export default TrainingProgram;