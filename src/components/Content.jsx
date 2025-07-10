import { useSelector } from "react-redux";
import VideoPlayer from "./VideoPlayer";

export default function Content() {
  const { modules, currentModuleId, currentLessonId } = useSelector(state => state.modules)
  const { title: titleModule, lessons } = modules.find(mod => mod.id == currentModuleId)
  const { title: titleLessons, video: videoLesson } = lessons.find(lesson => lesson.id == currentLessonId)

  console.log("teste")

  return (
    <div className="float-right w-full h-full flex justify-center items-center">
      <div className="w-[80%] h-[70%] relative flex flex-col ">
        <div>
          <div className="text-white text-5xl font-bold">{titleLessons}</div>
          <div className="text-white text-xl font-extralight opacity-40 mt-3">Module {currentModuleId}: {titleModule}</div>
        </div>

        <VideoPlayer video={videoLesson}/>
      </div>
    </div>
  )
}