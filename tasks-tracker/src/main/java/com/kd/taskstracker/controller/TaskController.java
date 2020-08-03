package com.kd.taskstracker.controller;

import com.kd.taskstracker.exception.NotFoundException;
import com.kd.taskstracker.model.Task;
import com.kd.taskstracker.service.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/api/task")
@CrossOrigin
public class TaskController {
    @Autowired
    private TaskService taskService;

    @PostMapping("")
    public ResponseEntity<?> addTask(@Valid @RequestBody Task task, BindingResult result) {
        if (result.hasErrors()) {
            Map<String, String> errorMap = new HashMap<>();

            for(FieldError error : result.getFieldErrors()) {
                errorMap.put(error.getField(), error.getDefaultMessage());
            }

            return new ResponseEntity<Map<String, String>>(errorMap, HttpStatus.BAD_REQUEST);
        }

        Task newTask = taskService.saveOrUpdate(task);
        return new ResponseEntity<Task>(newTask, HttpStatus.CREATED);
    }

    @GetMapping("/all")
    public List<Task> getAll() {
        List<Task> all = taskService.getAll();
        return all;
    }

    @GetMapping("/{id}")
    public Optional<Task> getById(@PathVariable Long id) throws NotFoundException {
        Optional<Task> task = taskService.findById(id);
        HttpStatus status = HttpStatus.OK;

        return task;
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) throws NotFoundException {
        taskService.deleteById(id);
    }
}
