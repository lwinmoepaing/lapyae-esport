const yaml = require('js-yaml');
const fs   = require('fs');

/**
 * Get User Synchnous
 * 
 * @return {Array}
 */
const getBlogs = async () => {
    try {
        const blogFolder = __dirname + '/../blogs'
        const doc = []
        const files = fs.readdirSync(blogFolder)
        files.reverse().splice(0, 5).map(file => doc.push(file.replace(".yaml", "")))
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

/**
 * Get Latest Blog List
 * 
 * @param {string} id - Blog
 * @param {Array} userList - User Array List
 */
 const getLastBlog = () => {
    try {
        const blogFolder = __dirname + '/../blogs'
        const files = fs.readdirSync(blogFolder)
        const dirList = files.reverse().splice(0, 1).map(file => file.replace(".yaml", ""))
        const dir = `${__dirname}/../blogs/${dirList.length > 0 ? dirList[0] : '2020-12-26'}.yaml`;
        const doc = yaml.safeLoad(fs.readFileSync(dir, 'utf8'));
        return doc
    } catch (e) {
        return null
    }
}


module.exports = {
    getBlogs,
    getBlogById,
    getLastBlog
}