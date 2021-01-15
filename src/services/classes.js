import api from './api';

export const createClass = (data) => api.post(`/class/`, data);

export const listClasses = () => api.get(`/class/`);
export const listFreeClasses = () => api.get(`/free-classes/`);

export const deleteTeacher = (classId) => api.delete(`/class/${classId}`);

// export const confirmRegisterTeacher = (userId) => api.put(`/user-confirm-by-admin/${userId}`);
