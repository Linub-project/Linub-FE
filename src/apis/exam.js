import { api } from "./instance";

export const getAllExamSubjects = () => {
    return api.get("/api/v1/exams/subjects/all");
}