const yaml = require('js-yaml');
const fs   = require('fs');

/**
 * Get User Synchnous
 * 
 * @return {Array}
 */
const getUser = () => {
    try {
        const dir = __dirname + '/../database/user.yaml';
        const doc = yaml.safeLoad(fs.readFileSync(dir, 'utf8'));
        return doc
    } catch (e) {
        console.log(e);
        return []
    }
}

/**
 * Get User By Id Only One User
 * 
 * @param {string} id - UserId
 * @param {Array} userList - User Array List
 */
const getUserById = (id, userList) => {
    return userList.find(user => user.id === id)
}


module.exports = {
    getUser,
    getUserById
}