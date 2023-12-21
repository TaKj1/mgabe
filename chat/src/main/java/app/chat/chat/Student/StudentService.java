package app.chat.chat.Student;

import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.GetMapping;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Component
public class StudentService {

    public List<Student> getStudents(){
        return List.of(
                new Student(
                        1L,
                        "Rumen",
                        "rumen8891@gmail.com",
                        LocalDate.of(2004, Month.MARCH ,3 ),
                        21




                )
        );
    }


    }


