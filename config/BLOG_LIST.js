const yaml = require('js-yaml');
const fs   = require('fs');

/**
 * Get User Synchnous
 * 
 * @return {Array}
 */
const getBlogs = () => {
    try {
        const dir = __dirname + '/../database/blogs.yaml';
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
const getBlogById = (id) => {
    try {
        const dir = `${__dirname}/../blogs/${id}.yaml`;
        const doc = yaml.safeLoad(fs.readFileSync(dir, 'utf8'));
        return doc
    } catch (e) {
        return null
    }
}


module.exports = {
    getBlogs,
    getBlogById
}