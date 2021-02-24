"use strict";
// Keywords are associated with a specific number i.e Book =0, Author=1
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
    ResourceType[ResourceType["DIRECTOR"] = 3] = "DIRECTOR";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
var doc1 = {
    uid: 1,
    resourceType: ResourceType.BOOK,
    data: 'name'
};
var doc2 = {
    uid: 1,
    resourceType: ResourceType.PERSON,
    data: ['name']
};
