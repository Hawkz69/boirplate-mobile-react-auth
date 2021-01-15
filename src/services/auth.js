import api from './api';

export const createUser = (data) => api.post(`/users/`, data );
export const confirmRegister = (data) => api.post(`/user-confirm/`, data );
export const getUser = () => api.get(`/user/`);
export const resendConfirm = (mobile) => api.post(`/resend-confirm/`, {mobile});

export const forgotPassword = (mobile) => api.post(`/forgot-password/`, { mobile });
export const resetPassword = (data) => api.put(`/forgot-password/`, data);

export const login = (data) => api.post(`/session/`, data);
export const logoff = () => api.post(`/logoff/`);
export const signupStudent = (data) => api.post(`/create-student/`, data);
