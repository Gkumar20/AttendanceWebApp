from flask import jsonify, request
from bson import json_util
from models.student import Student 


student = Student()

def get_students():
    students = student.get_students()
    return jsonify(json_util.dumps(list(students)))


def add_student():
    try:
        data = request.get_json()

        # Extract all fields from the request
        fields = {field: data.get(field) for field in data.keys()}

        # Pass the fields to the add_student method
        result = student.add_student(**fields)

        if isinstance(result, dict) and 'error' in result:
            return jsonify({'error': result['error']}), 400  # Return status 400 (Bad Request) for errors

        print("Student added successfully!")
        return jsonify({'message': 'Student added successfully!'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500  # Return status 500 (Internal Server Error) for other exceptions


def mark_attendance_route():
    marked_students = student.mark_attendance_live()
    # print(f"Marked Students: {marked_students}")
    return jsonify({"students": marked_students}), 200

