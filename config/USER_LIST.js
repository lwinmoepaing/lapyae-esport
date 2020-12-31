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


/**
 * Get Throphy User Synchnous
 * 
 * @param {'pc' | 'console'} type - Type Throphy User
 * 
 * @return {Array}
 */
const getThrophyUser = (type = 'pc') => {
    try {
        const dir = __dirname + `/../database/${type}_throphy_player.yaml`;
        const doc = yaml.safeLoad(fs.readFileSync(dir, 'utf8'));
        return doc
    } catch (e) {
        console.log(e);
        return []
    }
}




module.exports = {
    getUser,
    getUserById,
    getThrophyUser
}