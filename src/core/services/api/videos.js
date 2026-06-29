import { getArticleById, listArticles } from "@/src/lib/articles"

export const getPostsData = async (locale = "en") => {
  return listArticles({ locale, onlyActive: true })
}

export const getSinglePostData = async (id, locale = "en") => {
  return getArticleById(id, { locale, onlyActive: true })
}
