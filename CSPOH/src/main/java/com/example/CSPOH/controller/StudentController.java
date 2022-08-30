package com.example.CSPOH.controller;
import com.example.CSPOH.model.Student;
import com.example.CSPOH.service.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.NoSuchElementException;

@RestController
@RequestMapping("/student")
@CrossOrigin
public class StudentController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/add")
    public String add(@RequestBody Student student){
        studentService.saveStudent(student);
        return "New student is added";
    }

    @GetMapping("/getAll")
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Student> get(@PathVariable Integer id){
        try{
            Student student = studentService.get(id);
            return new ResponseEntity<Student>(student,HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Student> update(@RequestBody Student student, @PathVariable Integer id){
        try{
            Student existingStudent = studentService.get(id);
            studentService.saveStudent(student);
            return new ResponseEntity<>(student,HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable Integer id){
        studentService.delete(id);
        return "student with #ID: " + id + " was deleted";
    }

    @GetMapping("/get-by-email/{email}")
    public ResponseEntity<Student> get(@PathVariable String email){
        try{
            Student student = studentService.getByEmail(email);
            return new ResponseEntity<Student>(student,HttpStatus.OK);
        }catch(NoSuchElementException e){
            return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/verify/{email}/{password}")
    public ResponseEntity<Boolean> verification(@PathVariable("email") String email, @PathVariable("password") String password){
        try{
            Boolean flag = studentService.verification(email, password);
            return new ResponseEntity<Boolean>(flag,HttpStatus.OK);

        }catch(NoSuchElementException e){
            return new ResponseEntity<Boolean>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/deleteAll")
    public String deleteAll(){
        studentService.clearAll();
        return "Database has been cleared out.";
    }

    @GetMapping("/findByLastname/{lName}")
    public ResponseEntity<Student> findByLname (@PathVariable("lName") String lName){
        try{
            Student student = studentService.findStudent(lName);
            return new ResponseEntity<Student>(student,HttpStatus.OK);

        }catch(NoSuchElementException e){
            return new ResponseEntity<Student>(HttpStatus.NOT_FOUND);
        }
    }

}
