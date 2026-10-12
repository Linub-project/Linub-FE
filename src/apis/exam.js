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

export const freeExam = (form) => {
    return api.post("/api/v1/exams/sessions/free", form);
}

export const mockExam = (examId) => {
    return api.post(`/api/v1/exams/sessions/mock`, examId);
}

export const getExamSessionProblems = (id) => {
    return api.get(`/api/v1/exams/sessions/${id}`);
}