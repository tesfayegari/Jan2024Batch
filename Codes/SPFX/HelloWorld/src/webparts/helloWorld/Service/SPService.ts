import { WebPartContext } from "@microsoft/sp-webpart-base"

export class SPService {
    private url: string
    constructor(private context: WebPartContext) {
        this.url = this.context.pageContext.site.absoluteUrl
    }

    getAllLists() {
        let restEndPoint = this.url + "/_api/web/lists?$filter=Hidden eq false";
        return []
    }

    getListItems(listName: string, siteUrl: string) {
        if (siteUrl == undefined) {
            siteUrl = this.url;
        }
        let restEndPoint = siteUrl + "/_api/web/lists/getbytitle('" + listName + "')/items?";
        return []
    }

}