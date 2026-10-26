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
    return api.post(`/api/v1/exams/sessions/mock`, JSON.stringify(examId), {headers: {"Content-Type": "application/json"}});
}

export const getExamSessionProblems = (id) => {
    return api.get(`/api/v1/exams/sessions/problems/${id}`);
}

export const getExamSession = (id) => {
    return api.get(`/api/v1/exams/sessions/${id}`);
}

export const updateExamSession = (id, form) => {
    return api.patch(`/api/v1/exams/sessions/${id}`, form);
}

export const updateExamSessionProblems = (id, problemId, optionId) => {
    return api.patch(
        `/api/v1/exams/sessions/${id}/problems/${problemId}`, null, {params: {optionId: optionId}}
    );
};

export const submitExamSession = (id) => {
    return api.patch(`/api/v1/exams/sessions/${id}/submit`);
}

export const getExamSessions = (pageable) => {
    return api.get(`/api/v1/exams/sessions`,
        {
            params: {
                page: pageable.page,
                size: pageable.size,
                sort: `${pageable.sort},${pageable.direction}`
            }
        }
    );
}