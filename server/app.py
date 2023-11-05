from flask import Flask
from config import Config  # Import Config from config.py
from controllers.student_controller import get_students, add_student , mark_attendance_route
from flask_pymongo import PyMongo
from flask import Flask, render_template




app = Flask(__name__)
app.config.from_object(Config)
mongo = PyMongo(app)

# Enable CORS
from flask_cors import CORS
CORS(app)

app.route('/students_get', methods=['GET'])(get_students)
app.route('/students', methods=['POST'])(add_student)

@app.route('/', methods=['GET'])  # New route added here
def hello_world():
    return "hello world"

# Define your routes
@app.route('/mark_attendance_live', methods=['GET'])
def mark_attendance_live():
    return mark_attendance_route()

if __name__ == '__main__':
    app.run(debug=True)





