from pymongo import MongoClient

# Use the correct username and password you created
client = MongoClient("mongodb://capstone:project@172.19.19.104:27017/?authSource=admin")

# Select database and collection
db = client["cheetah"]
collection = db["my_cheetahs"]

# Document to insert
data = {
    "name": "OGNI",
    "email": "john@example.com",
    "age": 30
}

# Insert document
result = collection.insert_one(data)
print("Inserted ID:", result.inserted_id)
