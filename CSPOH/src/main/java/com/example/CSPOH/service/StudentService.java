package com.example.CSPOH.service;
import com.example.CSPOH.model.Student;

import java.util.List;

public interface StudentService {
    public Student saveStudent(Student student);
    public List<Student> getAllStudents();
    public Student get(Integer id);
    public void delete(Integer id);
    public Student getByEmail(String email);
    public Boolean verification(String email, String password);
    public void clearAll();
    public Student findStudent(String lastName);


}
