# Setup file to upload data to MongoDB 
mongo qtrip --eval "db.dropDatabase()" 
mongoimport -d qtrip -c cities --file data/cities.json