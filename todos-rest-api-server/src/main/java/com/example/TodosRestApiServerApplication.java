package com.example;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.TimeUnit;


@NoArgsConstructor
@AllArgsConstructor
@Data
class Todo{
	private int id;
	private String title;
	private boolean completed;
}

@AllArgsConstructor
@NoArgsConstructor
@Data
class NewTodoRequest{
	private String title;
}

@RestController
@RequestMapping("/api/v1/todos")
@CrossOrigin(origins = "*")
class TodoController{

	private static List<Todo> todos=new ArrayList<>();
	static{
		todos.add(new Todo(1,"learn javascript",true));
		todos.add(new Todo(1,"learn react",false));
		todos.add(new Todo(1,"learn redux",false));
	}

	@GetMapping
	public ResponseEntity<?> getAllTodos() throws InterruptedException {
		TimeUnit.SECONDS.sleep(1);
		return ResponseEntity.ok(todos);
	}

	@PostMapping
	public ResponseEntity<?> addNewTodo(@RequestBody NewTodoRequest request){
		Todo newTodo = new Todo(todos.size()+1,request.getTitle(),false);
		todos.add(newTodo);
		return ResponseEntity.status(HttpStatus.CREATED).body(newTodo);
	}

}


@SpringBootApplication
public class TodosRestApiServerApplication {

	public static void main(String[] args) {
		SpringApplication.run(TodosRestApiServerApplication.class, args);
	}

}
