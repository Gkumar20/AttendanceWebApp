

import os
from db import db
import cv2
import face_recognition
import pickle

class Student:
    def get_students(self):
        return db.students.find()


    def add_student(self, **kwargs):
        existing_student = db.students.find_one({"$or": [{"prn": kwargs.get("prn")}, {"roll_no": kwargs.get("roll_no")}]})
        if existing_student:
            return {"error": "PRN or Roll No already exists"}, 400  

        return db.students.insert_one(kwargs)

    def load_encodings(self):
        encodings_path = 'models/encodings.pkl'

        print("Processing")
        

        with open(encodings_path, 'rb') as f:
            encodings, names = pickle.load(f)


            # print(encodings)
            # print(names)
            # print(len(encodings))
            # print(len(names))

        return encodings, names


    


    def mark_attendance_live(self):
        encodings, names = self.load_encodings()
        cap = cv2.VideoCapture(0)

        ret, frame = cap.read()

        face_locations = face_recognition.face_locations(frame)
        face_encodings = face_recognition.face_encodings(frame, face_locations)

        marked_students = []

        if len(face_encodings) == 0:
            marked_students.append("No person")
        else:
            for encoding in face_encodings:
                matches = face_recognition.compare_faces(encodings, encoding, tolerance=0.5)

                if any(matches):
                    student_index = matches.index(True)
                    student_name = names[student_index]
                    marked_students.append(student_name)
                else:
                    marked_students.append("Unknown student")
        cap.release()
        cv2.destroyAllWindows()

        return marked_students
