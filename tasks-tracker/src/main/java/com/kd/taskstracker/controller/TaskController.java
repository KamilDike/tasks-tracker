package com.kd.taskstracker.controller;

import com.kd.taskstracker.service.TaskService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/task")
@CrossOrigin
public class TaskController {
    private TaskService taskService;
}
