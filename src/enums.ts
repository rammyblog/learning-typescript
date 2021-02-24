// Keywords are associated with a specific number i.e Book =0, Author=1
enum ResourceType {BOOK, AUTHOR, FILM, DIRECTOR, PERSON}

interface ResourceEnums<T> {
    uid: number;
    resourceType: ResourceType;
    data: T
}

const doc1: ResourceEnums<string> ={
    uid:1,
    resourceType: ResourceType.BOOK,
    data: 'name'
}

const doc2: ResourceEnums<string[]> ={
    uid:1,
    resourceType: ResourceType.PERSON,
    data: ['name']
}

