from pymongo import MongoClient
from config import Config

# Establish a connection to MongoDB
client = MongoClient(Config.MONGO_URI)

# Access the 'students_db' database
db = client.students_db


# from pymongo import MongoClient
# from config import Config

# # Establish a connection to MongoDB
# client = MongoClient(Config.MONGO_URI)

# # Access the 'students_db' database
# db = client['students_db']
