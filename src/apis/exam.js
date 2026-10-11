import { api } from "./instance";

export const getAllExamSubjects = () => {
    return api.get("/api/v1/exams/subjects/all");
}

export const getAllExams = () => {
    return api.get("/api/v1/exams/all");
}

export const getAllExamsWithSubjects = () => {
    return api.get("/api/v1/exams/all/subjects/all");
}