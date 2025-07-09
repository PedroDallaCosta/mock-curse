import { useDispatch, useSelector } from "react-redux"
import { selectLesson } from "@/store/modulesSlice"
import { useState } from "react"

export default function Navbar() {
  const { modules, currentModuleId, currentLessonId } = useSelector(state => state.modules)
  const dispatch = useDispatch()

  const [ openModule, setOpenModule ] = useState({ [currentModuleId]: true })

  const toggleModuleOpen = (id) => {
    setOpenModule(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  return (
    <div className="bg-[#1A1820] w-[27%] border-r border-[#2D2938] min-h-[100vh] flex flex-col">
      <div className="w-full h-35 border-b border-[#2D2938] flex justify-start items-center">
        <img src="https://pngimg.com/d/copyright_PNG41.png" className="w-18 h-18 ml-11 mr-7" />
        <div className="text-white text-3xl font-bold leading-tight tracking-[-0.015em]">QuantumLeap</div>
      </div>

      <div className="w-full flex-1 flex justify-center relative">
        <div className="h-all w-[83%] mt-8">
          <div className="font-bold text-white text-2xl">Course Modules</div>
          <div className="mt-8">
            {modules.map(mod => (
              <div key={mod.id} className="mb-8" onClick={() => toggleModuleOpen(mod.id)}>
                <div className={`font-medium text-xl px-5 py-5 rounded-md truncate ${currentModuleId == mod.id ? 'text-white bg-[#4a0ccd]' : 'text-gray-300'}`}>Module {mod.id}: {mod.title}</div>

                <ul className={`w-full ${openModule[mod.id] ? "block" : "hidden"} mt-6 pl-8`}>
                  {mod.lessons.map(lesson => (
                    <li key={lesson.id}
                      onClick={(e) => {
                        e.stopPropagation(),
                        dispatch(selectLesson({ moduleId: mod.id, lessonId: lesson.id }))
                      }}

                      className={`hover:cursor-pointer text-white w-full flex items-center p-4 text-base rounded-md mb-3 ${currentModuleId == mod.id && currentLessonId == lesson.id && 'bg-white/10'}`}>
                      <div className="w-4 h-4 mr-3 bg-green-500/30 ring-2 ring-green-500/30 rounded-3xl"></div>
                      <div className="truncate">Lesson {lesson.id}: {lesson.title}</div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}