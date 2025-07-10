import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modules: [
    {
      id: 1,
      title: "Entendendo algoritmos",
      lessons: [
        {
          id: 1,
          title: "Primeira aula de algoritmos",
          video: "https://www.youtube.com/watch?v=0IAPZzGSbME",
        },
        {
          id: 2,
          title: "Segunda aula de algoritmos",
          video: "https://www.youtube.com/watch?v=-JTq1BFBwmo"
        },
      ]
    },
    {
      id: 2,
      title: "Entendendo estrutura de dados",
      lessons: [
        {
          id: 1,
          title: "Primeira aula de estrutura de dados",
          video: "https://www.youtube.com/watch?v=Qmt0QwzEmh0"
        },
        {
          id: 2,
          title: "Segunda aula de estrutura de dados",
          video: "https://www.youtube.com/watch?v=2USMAwcRWHE",
        },
      ]
    }
  ],
  currentModuleId: 1,
  currentLessonId: 1,
}

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    selectLesson(state, action) {
      const { moduleId, lessonId } = action.payload;
      state.currentLessonId = lessonId
      state.currentModuleId = moduleId
    }
  }
})

export const { selectLesson } = modulesSlice.actions
export default modulesSlice.reducer