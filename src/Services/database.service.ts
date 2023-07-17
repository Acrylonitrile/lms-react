import axios from "axios"
import { apiUrl } from "../constants"
import { IChapterDetails } from "../pages/DashBoard/CoursePage"

export const getChapters = async (languageId: string) => {
  const result = await axios.get(`${apiUrl}/chapters/${languageId}`)
  return result.data
}

export const addChapters = async (
  chapterList: string[],
  languageId: number
) => {
  const result = await axios.post(`${apiUrl}/chapters/add`, {
    chapterList: chapterList,
    languageId: languageId
  })
  return result
}

export const getLanguages = async () => {
  const result = await axios.get(`${apiUrl}/language`)
  //console.log(result)
  return result.data
}

export const addLanguage = async (name: string) => {
  const languageResult = await axios.post(`${apiUrl}/language/add`, {
    name
  })
  console.log(languageResult)
  const languageId = languageResult.data.languageId as number
  return languageId
}
