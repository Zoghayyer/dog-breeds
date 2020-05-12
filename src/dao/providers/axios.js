import axios from 'axios';
import { config as environmentConfig } from '../../static';

// ------------------------------------
// Environment api base urls
// ------------------------------------
const baseUrls = environmentConfig.api;

// ------------------------------------
// Provider API
// ------------------------------------
/**
 * Create a baseline axios instance for dog breeds. A baseline axios instance:
 *   - adds appropriate JSON-related headers to all requests
 *   - turns on CORS
 *
 *   @param {string} baseURL: the base URL to use for this axios instance
 *   @returns {axios.AxiosInstance}
 */
export const createBaselineInstance = (baseURL) => {
  const axiosInstance = axios.create({
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    timeout: 66000,
    baseURL
  });

  return axiosInstance;
};



/**
 * @type {axios.AxiosInstance}
 */
export const dogClient = createBaselineInstance(baseUrls.dog.url);