import {TrainingProgram} from "@/types/TrainingProgram";
import {getTrainingProgram} from "@/lib/api";
import {Metadata} from "next";
import TrainingProgramInfo from "@/components/training-program-info/TrainingProgramInfo";


interface Params {
  params: {
    programName: string
  }
}

export async function generateMetadata ({params: {programName}}: Params): Promise<Metadata> {
  const trainingProgramData: Promise<TrainingProgram> = getTrainingProgram(programName);
  const trainingProgram: TrainingProgram = await trainingProgramData;

  return {
    title: trainingProgram.name,
  }
}


const TrainingProgram = async ({params: {programName}}: Params) => {
  const trainingProgramData: Promise<TrainingProgram> = getTrainingProgram(programName);
  const trainingProgram: TrainingProgram = await trainingProgramData;
  return (
    <main style={{padding: "30px 100px"}}>
      <h2 style={{
        textAlign: "center",
        fontSize: "30px",
        padding: "10px 0 15px"
      }}>
        Training program " {trainingProgram.name} "
      </h2>
      <TrainingProgramInfo trainingProgram={trainingProgram}/>
    </main>
  )
}

export default TrainingProgram;