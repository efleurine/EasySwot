export const schema = {
    "models": {
        "Task": {
            "syncable": true,
            "name": "Task",
            "pluralName": "Tasks",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ],
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "title": {
                    "name": "title",
                    "isArray": false,
                    "type": "string",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "string",
                    "isRequired": false,
                    "attributes": []
                },
                "status": {
                    "name": "status",
                    "isArray": false,
                    "type": "string",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Note": {
            "syncable": true,
            "name": "Note",
            "pluralName": "Notes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ],
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "content": {
                    "name": "content",
                    "isArray": false,
                    "type": "string",
                    "isRequired": true,
                    "attributes": []
                }
            }
        },
        "User": {
            "syncable": true,
            "name": "User",
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                }
            ],
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "firstName": {
                    "name": "firstName",
                    "isArray": false,
                    "type": "string",
                    "isRequired": false,
                    "attributes": []
                },
                "lastName": {
                    "name": "lastName",
                    "isArray": false,
                    "type": "string",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "enums": {},
    "version": "1a25f3ac4fd8d37f831026250207cdc1"
};