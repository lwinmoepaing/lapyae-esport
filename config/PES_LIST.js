const {getUser, getUserById} = require('./USER_LIST')
const yaml = require('js-yaml');
const fs   = require('fs');

const users = getUser()


/**
 * Get All Teams
 * 
 * @return {Object[]}
 */
const getTeams = async () => {
    try {
        const dir = __dirname + '/../database/pes_team.yaml';
        const doc = yaml.safeLoad(fs.readFileSync(dir, 'utf8'));
        return doc
    } catch (e) {
        console.log(e);
        return []
    }
}


/**
 * Get Team By Id Only One Team
 * 
 * @param {string} id - TeamId
 * @param {Array} teamList - Team Array List
 * 
 * @return {Object}
 */
const getTeamById = (id, teamList) => {
    return teamList.find(team => team.id === id)
}

/**
 * Get Pes Winner List
 * 
 * @return {Object Array}
 */
const getPesWinnerList = async () => {
    const teams = await getTeams();
    const data = [
        {
            ... getUserById('lmp', users),
            ... getTeamById('liverpool', teams),
            throphy_status: 'winner',
            status: 'Champion'
        },
        {
            ... getUserById('tzp', users),
            ... getTeamById('liverpool', teams),
            throphy_status: 'first',
            status: '1st RunnerUp'
        },
        {
            ... getUserById('nyi', users),
            ... getTeamById('atletico_madrid', teams),
            throphy_status: 'second',
            status: '2nd RunnerUp'
        },
        {
            ... getUserById('mhkt', users),
            ... getTeamById('arsenal', teams),
            throphy_status: 'third',
            status: '3rd RunnerUp'
        },
        {
            ... getUserById('amk', users),
            ... getTeamById('juventus', teams),
            throphy_status: 'best',
            status: '4th RunnerUp'
        }
    ]

    return data 
}

module.exports = {
    getPesWinnerList
}