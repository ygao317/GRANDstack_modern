# GRANDstack_modern/server

Server end no much change and very straight forward. We try to make the demo as simple as possible. 

We use Apollo server alone and run all neo4j Cypher query through Noe4j driver. 

1. You may resolve the dependency first by `npm install` in server folder. 
2. After that, you can run `npm run dev` to start the service.
3. You can access the GraphQL Playground http://localhost:4000

It is a good pratice to test our GraphQL query in Playground first before implement it in the client side.