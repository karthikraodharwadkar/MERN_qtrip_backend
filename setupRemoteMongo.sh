mongoimport --uri "mongodb://ac-nucdxly-shard-00-00.i9okk5n.mongodb.net:27017,ac-nucdxly-shard-00-01.i9okk5n.mongodb.net:27017,ac-nucdxly-shard-00-02.i9okk5n.mongodb.net:27017/qtrip?replicaSet=atlas-eb6em2-shard-0" --ssl --authenticationDatabase admin --username admin --password pa55word --drop --collection cities --file data/cities.json