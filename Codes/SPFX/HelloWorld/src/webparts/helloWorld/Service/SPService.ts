import { WebPartContext } from "@microsoft/sp-webpart-base";
import { SPHttpClient } from "@microsoft/sp-http";


export class SPService {
    private url: string
    constructor(private context: WebPartContext) {
        this.url = this.context.pageContext.site.absoluteUrl;
    }
    private GetSharePointData(url: string) {
        return this.context.spHttpClient.get(url, SPHttpClient.configurations.v1)
            .then(response => response.json())

    }

    getAllLists() {
        let restEndPoint = this.url + "/_api/web/lists?$filter=Hidden eq false";
        return this.GetSharePointData(restEndPoint);
    }

    getListItems(listName: string, siteUrl: string) {
        if (siteUrl == undefined) {
            siteUrl = this.url;
        }
        let restEndPoint = siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items";
        return this.GetSharePointData(restEndPoint);
    }

}


// let funcHappy = (param: string) => param;

// function funcSad(param: string){
//     return param;
// }