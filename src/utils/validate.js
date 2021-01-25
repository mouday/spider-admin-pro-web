/**
 * Created by PanJiaChen on 16/11/18.
 */

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  return str.length >= 3;
}

export function validateUsername (rule, value, callback) {
  if (!validUsername(value)) {
    callback(new Error("请输入正确的用户名"));
  } else {
    callback();
  }
};

/**
 *  验证密码
 * @param {*} rule 
 * @param {*} value 
 * @param {*} callback 
 */
export function validatePassword (rule, value, callback) {
  if (value.length < 6) {
    callback(new Error("请输入正确的密码"));
  } else {
    callback();
  }
};