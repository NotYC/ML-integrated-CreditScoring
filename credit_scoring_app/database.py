from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client["credit_scoring"]
collection = db["users"]

def insert_user(data):
    collection.insert_one(data)

def fetch_users():
    return list(collection.find({}, {"_id": 0}))
