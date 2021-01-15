import api from './api';

export const searchStudent = (name) => api.get(`/search-students/?name=${name}`);

export const getStudentDetail = (studentId) => api.get(`/student-detail/${studentId}`);

export const createStudent = (data) => api.post(`/student/`, data);

// export const deleteStudent = (userId) => api.put(`/delete-user/${userId}`);

// export const confirmRegisterStudent = (userId) => api.put(`/user-confirm-by-admin/${userId}`);

// export const upgradeUser = (data) => api.put(`/upgrade-user`, data);
