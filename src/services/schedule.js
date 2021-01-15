import api from './api';

export const listModalities = (franchiseId) => api.get(`/modalities/${franchiseId}`);
export const listModalitiesRoom = (roomId) => api.get(`/modalities-room/${roomId}`);

export const listFreePositions = (scheduleId, modalityId) => api.get(`/free-positions/${scheduleId}/${modalityId}`);

export const createScheduleStudent = (studentId, data) => api.post(`/schedule-student/${studentId}/`, data);
export const cancelScheduleStudent = (scheduleId, studentId) => api.post(`/cancel-schedule-student/${scheduleId}/${studentId}`);

export const listSchedule = (franchiseId) => api.get(`/schedule/${franchiseId}`);
export const listFullSchedule = (franchiseId) => api.get(`/list-full-schedules/${franchiseId}`);

export const createScheduleClass = (franchiseId, data) => api.post(`/schedule/${franchiseId}`, data);

export const listRooms = (franchiseId) => api.get(`/rooms/${franchiseId}`);

// VER COMO FAZER
// export const listTeachersFromModality = (modalityId) => api.get(`/teachers-modality/${modalityId}`);

export const listTeachers = (franchiseId) => api.get(`/teachers/${franchiseId}`);

export const presenceList = (scheduleId) => api.get(`/schedule-presential/${scheduleId}`);
export const checkPresence = (scheduleId, studentId) => api.post(`/check-present/${scheduleId}/${studentId}`);
export const checkAbsence = (scheduleId, studentId) => api.post(`/check-absence/${scheduleId}/${studentId}`);
