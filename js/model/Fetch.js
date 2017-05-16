import fetch from "node-fetch";
import config from "./config.json";
const api = config.baseUrl + "/api";

export default class Fetch {
    constructor() {

    }

    getOrgUnitTree() {
        return fetch(
            `${api}/organisationUnits?paging=false&fields=id,name,level,children[id,name],parent[id,name]`,
            {
                compress: false
            }
        )
            .then(result => result.json())
            .then(json => json.organisationUnits);
    }

    getReportData(api) {
        return fetch(
            api,
            {
                compress: false
            }
        )
            .then(result => result.json())
            .then(json => json);
    }

}