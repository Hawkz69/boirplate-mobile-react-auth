import api from './api';

export const listPackages = (franchiseId) => api.get(`/package/${franchiseId}`);

export const createPackage = (franchiseId, data) => api.post(`/package/${franchiseId}`, data);

export const buyPackage = (packageId, studentId) => api.post(`/buy-package/${packageId}/${studentId}`);

export const listPaymentMethod = (franchiseId) => api.get(`/payment-methods/${franchiseId}`);
