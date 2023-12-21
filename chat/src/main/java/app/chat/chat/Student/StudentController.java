package app.chat.chat.Student;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/student")
public class StudentController {


    private final StudentService StudentService;

    @Autowired
    public StudentController(app.chat.chat.Student.StudentService studentService) {
        this.StudentService = studentService;
    }

    @GetMapping
    public List<Student> getStudents() {
       return StudentService.getStudents();
    }




}
