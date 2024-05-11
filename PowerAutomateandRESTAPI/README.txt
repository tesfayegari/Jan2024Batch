SharePoint REST API 

REST API has different parameters 

1. API End point or URL 
2. Method (Get, Put, Post, Delete, Patch, Head, Options,...)
3. Headers (Authentication and Authorization, content type, ... )

API End Point or URL or SharePoint REST 
Starts with SharePoint Site collection URL, and followed by /_api/web

SiteCollUrl/_api/web   returns all information about that site 

example https://abc.sharepoint.com/sites/HumanResource/_api/web is data about the site (web) Human resources


SiteCollectionUrl/_api/web/lists  - Returns all sharepoint lists in the site collection including hidden lists

To return just one list using list title 
SiteCollectionURl/_api/web/lists/getbytitle('ListName')
SiteCollectionURl/_api/Web/Lists(guid'guidOfList')

To get all items in one list 
SiteCollectionURl/_api/web/lists/getbytitle('ListName')/items

To return one item from sharepoint list 
SiteCollectionURl/_api/web/lists/getbytitle('ListName')/items(itemID)

oDATA $filter - is used to filter records based on value of the property 
example return all lists that are not hidden (hidden equal false)

SiteCollectionURl/_api/web/lists?$filter=Hidden eq false

How do we limit specific properties when REST API returns 
Example for all list I want to see only these properties 
BaseTemplate
ItemCount
Created
Title
We have to use oData $select to limit properties or fields or columns 
example 
SiteCollectionURl/_api/web/lists?$filter=Hidden eq false&$select=BaseTemplate,ItemCount,Created,Title
Note: If we are using more than one oData we have to separate by &(ampersand)

I dont like to filter just give me the top 5 lists from sharepoint that are not hidden 
We have to use oData $top=maxvalue to see maxValue records
$top=5
SiteCollectionURl/_api/web/lists?$filter=Hidden eq false&$select=BaseTemplate,ItemCount,Created,Title&$top=5

I want to see the top 5 lists that has max item in it 
to do this we have to sort the lists by its ItemCount in descending order 
use oData $ordeby=columnName desc for desceding and asc for ascending 
SiteCollectionURl/_api/web/lists?$filter=Hidden eq false&$select=BaseTemplate,ItemCount,Created,Title&$top=5&$ordeby=ItemCount desc

REST API to get all SharePoint site groups 
SiteCollectionUrl/_api/Web/sitegroups

One SharePoint can be accessed like below 
SiteCollectionUrl/_api/Web/sitegroups(groupID)

List members in a sharepoint group
SiteCollectionUrl/_api/Web/sitegroups(groupID)/users

Get one user in a group with id = groupID 
SiteCollectionUrl/_api/Web/sitegroups(groupID)/users/getbyemail('email@email.com')

How to add a user to a SharePoint group using REST API
The method we have to use is POST 
Required are 
REST API end POINT SiteCollectionUrl/_api/Web/sitegroups(groupID)/users
Method POST
Payload (Body) JSON formatted as below 
{
	'__metadata':{'type': 'SP.User'},
	'LoginName' : 'i:0#.f|membership|emailofUser'
}
Header:
"accept": "application/json;odata=verbose",
"content-type": "application/json;odata=verbose"


How to remove a user from a SharePoint group using REST API
The method we have to use is POST 
Required are 
REST API end POINT SiteCollectionUrl/_api/Web/sitegroups(groupID)/users/getbyemail('emailOfUser')
Method POST
Header:
"accept": "application/json;odata=verbose",
"content-type": "application/json;odata=verbose"
"X-HTTP-Method":"DELETE"


