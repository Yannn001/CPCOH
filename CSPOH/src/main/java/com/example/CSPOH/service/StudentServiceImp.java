package com.example.CSPOH.service;

import com.example.CSPOH.model.Student;
import com.example.CSPOH.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentServiceImp implements StudentService {

    @Autowired
    private StudentRepository studentRepository;

    @Override
    public Student saveStudent(Student student) {
        return studentRepository.save(student);
    }

    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public Student get(Integer id) {
        return studentRepository.findById(id).get();
    }

    @Override
    public void delete(Integer id) {
        studentRepository.deleteById(id);
    }

    @Override
    public Student getByEmail(String email) {
        List<Student> allStudents = studentRepository.findAll();
        Student student = new Student();
        for (Student s : allStudents) {
            if (s.getEmail().equals(email)) {
                student = s;
                break;
            }
        }
        return student;
    }
    @Override
    public Boolean verification(String email, String password){

        Student studentWithEmail = getByEmail(email);
        if(studentWithEmail!=null&&password.equals(studentWithEmail.getPassword())){
            return true;
        }
        return false;
    }

    @Override
    public void clearAll() {
        studentRepository.deleteAll();
    }

    @Override
    public Student findStudent(String lastName) {
        List<Student> allStudents = studentRepository.findAll();
        Student student = new Student();
        for (Student s : allStudents) {
            if (s.getLastName().equals(lastName)) {
                student = s;
                break;
            }
        }
        return student;
    }
}
