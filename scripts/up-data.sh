#!/bin/bash

db="molly-matching-app"
echo `
    mongo mongodb://localhost:27017/${db} --eval "
        db.users.drop();
        db.posts.drop();
        db.thoughts.drop();
        db.upvotes.drop();
    "
`

echo `
    mongoimport --jsonArray --db ${db} --collection users --file scripts/users.json 
`