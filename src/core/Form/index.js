import axios from 'axios';
import Errors from './Errors';

class Form {
  /**
   * Create a new Form instance.
   *
   * @param {object} data
   */
  constructor(data) {
    this.originalData = data;

    for (let field in data) { // eslint-disable-line
      this[field] = data[field];
    }

    this.errors = new Errors();
  }


  /**
   * Fetch all relevant data for the form.
   */
  data() {
    const data = {};

    for (let property in this.originalData) { // eslint-disable-line
      data[property] = this[property];
    }

    return data;
  }


  /**
   * Reset the form fields.
   */
  reset() {
    for (let field in this.originalData) { // eslint-disable-line
      this[field] = '';
    }

    this.errors.clear();
  }


  /**
   * Send a POST request to the given URL.
   * .
   * @param {string} url
   */
  post(url) {
    return this.submit('post', url);
  }


  /**
   * Send a PUT request to the given URL.
   * .
   * @param {string} url
   */
  put(url) {
    return this.submit('put', url);
  }


  /**
   * Send a PATCH request to the given URL.
   * .
   * @param {string} url
   */
  patch(url) {
    return this.submit('patch', url);
  }


  /**
   * Send a DELETE request to the given URL.
   * .
   * @param {string} url
   */
  delete(url) {
    return this.submit('delete', url);
  }


  /**
   * Submit the form.
   *
   * @param {string} requestType
   * @param {string} url
   */
  submit(requestType, url) {
    return new Promise((resolve, reject) => {
      axios[requestType](url, this.data())
        .then((response) => {
          this.onSuccess(response.data);

          resolve(response.data);
        })
        .catch((error) => {
          this.onFail(error.response.data);

          reject(error.response.data);
        });
    });
  }


  /**
   * Handle a successful form submission.
   *
   * @param {object} data
   */
  onSuccess() {
    this.reset();
  }


  /**
   * Handle a failed form submission.
   *
   * @param {object} errors
   */
  onFail(errors) {
    this.errors.record(errors);
  }
}

export default Form;
