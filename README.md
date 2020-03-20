# GRANDstack_modern

This project's idea is from [GRANDstack.io](https://grandstack.io/).

In beginning of 2020, I was assign a project to build up a capacity analysis tools which monitor all the applications in our company. An advanced requirement is to simulate the impact from a spike of input node from an upstream application to all the following downstream.

Naturally, I am thinking about the Noe4j to build up a graph for the relationhsip between each application. Once the data model has been done, we are natually thinking how to build an applicaiton around Neo4j.

After some research, we agree that GRANDstack is what we like to use in following reasons:
1. GraphQL is a modern API and we have already using it in our company.
2. React is an easy to use javascript framework for client end.
3. Apollo is a good layer around GraphQL.
4. Neo4j DB is what we build up the model.

However, we found one issue. The GRANDstack sample code provided in GRANDstack.io is too old. Javascript framework recently upgrades in a very fast pace. For this GRANDstack framework, the major component for client side is React. And React release its recent hooks feature which totally redefine itself. All the 3rd party libraries around React are updated too to support Hooks.

This project is to provide some sample code for GRANDstack idea in recent React Hooks. Hope you enjoy it. 

## Noe4j DB
Please set up your Neo4j DB first. I just download the Neo4j server version to my PC and run it. Reset the password to "test". In this case, I can open the neo4j browser in http://localhost:7474. And in the server/schema/book_neo4j.js, the server URL is hardcoded as below:  

```javascript
const driver = neo4j.driver('bolt://localhost:7687', neo4j.auth.basic('neo4j', 'test'));
```

## Server end
You may resolve the dependency first by `npm install` in server folder. After that, can run `npm run dev` to start the service.

## Client end
It is created by create-react-app. Similar as server, you may resolve the dependency by `npm install` in client folder. After that, can run `npm run start` to start the service.

## In Summary
You need to start all three services: Neo4j, Server and Client to run the project.
