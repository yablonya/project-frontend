import AllProgramsList from "@/components/all-programs-list/AllProgramsList";
import {getAllTrainingPrograms} from "@/lib/api";
import {TrainingProgram} from "@/types/TrainingProgram";
import UserInfo from "@/components/user-info/UserInfo";

const Home = async () => {
  const allProgramsData: Promise<TrainingProgram[]> = getAllTrainingPrograms();
  const allTrainingPrograms: TrainingProgram[] = await allProgramsData;
  return (
    <main style={{
      padding: "30px 100px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    }}>
      <AllProgramsList allPrograms={allTrainingPrograms}/>
      <UserInfo/>
    </main>
  )
}

export default Home;
