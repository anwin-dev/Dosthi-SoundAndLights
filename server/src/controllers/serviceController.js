import { Service } from '../models/Service.js';
import { failure, success } from '../utils/apiResponse.js';

export const createService = async (req, res) => {
  const service = await Service.create(req.body);
  return success(res, service, 'Service created', 201);
};

export const getServices = async (req, res) => {
  const query = {};
  if (req.query.category) query.category = req.query.category;
  const services = await Service.find(query).sort({ createdAt: -1 });
  return success(res, services, 'Services fetched');
};

export const getServiceById = async (req, res) => {
  const service = await Service.findById(req.params.id);
  if (!service) return failure(res, 'Service not found', 404);
  return success(res, service, 'Service fetched');
};

export const updateService = async (req, res) => {
  const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!service) return failure(res, 'Service not found', 404);
  return success(res, service, 'Service updated');
};

export const deleteService = async (req, res) => {
  const service = await Service.findByIdAndDelete(req.params.id);
  if (!service) return failure(res, 'Service not found', 404);
  return success(res, null, 'Service deleted');
};
