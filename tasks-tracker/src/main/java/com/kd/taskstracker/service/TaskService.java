package com.kd.taskstracker.service;

import com.kd.taskstracker.exception.NotFoundException;
import com.kd.taskstracker.model.Task;
import com.kd.taskstracker.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task saveOrUpdate(Task task) {
        if (task.getStatus() == null || task.getStatus() == "") {
            task.setStatus("To Do");
        }

        return taskRepository.save(task);
    }

    public List<Task> getAll() {
        return taskRepository.findAll();
    }

    public Optional<Task> findById(Long id) {
        try {
            Optional<Task> byId = Optional.ofNullable(taskRepository.findById(id)
                    .orElseThrow(() -> new NotFoundException("Not found task with id: " + id)));
        } catch (NotFoundException e) {
            e.printStackTrace();
        }
        return taskRepository.findById(id);
    }

    public HttpStatus deleteById(Long id) {
        Optional<Task> byId = findById(id);
        HttpStatus status = HttpStatus.NOT_FOUND;

        if (byId.isPresent()) {
            taskRepository.deleteById(id);
            status = HttpStatus.OK;
        }

        return status;
    }
}
