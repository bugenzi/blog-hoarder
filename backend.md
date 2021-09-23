# backend Ts steps

1. Create database and configure orm , as well as set up entity schema and migration script

- WE use metadata runtime, so we can parse the decorators into sql queries
- Initializing Mikorom with .init and passing the config witch has everything needed to start orm. Also in the config we can add migration path creation and aslo what kind of entities / models are we taking in ,type of database and also credentials for the db server

2. After we configure Db we initalize the express server and apollo server

- Used apollo-server-express to unify grapql with the ts-node as well as to have all data from one source of trought plus their graphql playground is amazing for testing out fetching and mutations
- To integrate appolo we need schema with our resolvers and other options in it , afther that we pass into the apollo server by calling new ApolloServer and adding the middlewear to app . This method lets us have cors , playground and body parser without writing it ourself .

3. To create resolvers we want to make that super easy and a lot less of a head scratch . We are gona use type-graphql witch helps us fetch data . After that we wrap our resolvers witch is a class decorated with type-graphql Resolver() method

4. Integrate context to pass in the resolvers , make a type definition for orm and pass it touth context , as well as use req,res for later . To be continuned
