import { heroes } from "../data/heroes"


export const getHeroById = (id = '') => {

    // const validPublishers = ['DC Comics', 'Marvel Comics'];
    // if (!validPublishers.includes(publisher)) {
    //     throw new Error(`${publisher} is not a valid publisher`)
    // }
    return heroes.find(hero => hero.id === id)

}