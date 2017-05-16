import fetch from "node-fetch";
const auth = "Basic " + btoa("dung:ABCD1234");
const api = "https://hispvn.org/grd/api";

export default class Fetch {
    constructor() {

    }

    getOrgUnitTree() {
        return fetch(
            `${api}/organisationUnits?paging=false&fields=id,name,level,children[id,name],parent[id,name]`,
            {
                headers: {
                    Authorization: auth
                },
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
                headers: {
                    Authorization: auth
                },
                compress: false
            }
        )
            .then(result => result.json())
            .then(json => json);
    }

}