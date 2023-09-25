import AllProgramsList from "@/components/all-programs-list/AllProgramsList";
import {getAllTrainingPrograms} from "@/lib/api";
import {TrainingProgram} from "@/types/TrainingProgram";

const Home = async () => {
  const allProgramsData: Promise<TrainingProgram[]> = getAllTrainingPrograms();
  const allTrainingPrograms: TrainingProgram[] = await allProgramsData;
  return (
    <main>
      <AllProgramsList allPrograms={allTrainingPrograms}/>
    </main>
  )
}

export default Home;
