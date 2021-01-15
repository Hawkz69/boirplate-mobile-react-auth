import api from './api';

export const createTeacher = (data) => api.post(`/insert-teacher/`, data);

export const listTeachers = () => api.get(`/list-teachers/`);

export const deleteTeacher = (userId) => api.put(`/delete-user/${userId}`);

export const confirmRegisterTeacher = (userId) => api.put(`/user-confirm-by-admin/${userId}`);
