import axios from "axios";
import store from '../redux/store';
import { LoaderVisible} from '../redux/LoaderAction';

async function getApiData(url: string, method: string, body?: Object) {
    let response;
    switch (method) {
        case 'POST': {
            response = await axios.post(url,body)
            .then(res => {return res})
            .catch(err => {throw err;})
            break;
        }
        case 'GET': {
             response = await axios.get(url)
            .then(res => {return res})
            .catch(err => {throw err;})
            break;
        }
        case 'PUT': {
            response = await axios.put(url,body)
            .then(res => {return res})
            .catch(err => {throw err;})
            break;
        }
        case 'DELETE': {
            response = await axios.delete(url)
            .then(res => {return res})
            .catch(err => {throw err;})
            break;
        }
        case 'PATCH': {
            response = await axios.patch(url,body)
            .then(res => {return res})
            .catch(err => {throw err;})
            break;
        }
    }
    return response;
}


axios.interceptors.request.use(function (config) {
    store.dispatch(LoaderVisible(true));
    config.headers['app-id'] = '642ac2085d0debb908350d35';
    return config;
  }, 
  function (error) {
    store.dispatch(LoaderVisible(false));
    return Promise.reject(error);
  });

  axios.interceptors.response.use(function (config) {
    store.dispatch(LoaderVisible(false));
    return config;
  }, 
  function (error) {
    store.dispatch(LoaderVisible(false));
    return Promise.reject(error);
  });

export { getApiData };