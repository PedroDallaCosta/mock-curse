import { useSelector } from "react-redux";

export default function Content() {
  const { modules, currentModuleId, currentLessonId } = useSelector(state => state.modules)
  const { title: titleModule, lessons } = modules.find(mod => mod.id == currentModuleId)
  const { title: titleLessons } = lessons.find(lesson => lesson.id == currentLessonId)

  return (
    <>
      <div>titleModule = {titleModule}</div>
      <div>titleLessons = {titleLessons}</div>
    </>
  )
}