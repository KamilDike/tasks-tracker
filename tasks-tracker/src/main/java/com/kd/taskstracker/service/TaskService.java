package com.kd.taskstracker.service;

import com.kd.taskstracker.exception.NotFoundException;
import com.kd.taskstracker.model.Task;
import com.kd.taskstracker.repository.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TaskService {

    @Autowired
    private TaskRepository taskRepository;

    public Task saveOrUpdate(Task task) {
        if (task.getStatus() == null || task.getStatus() == "") {
            task.setStatus("TO_DO");
        }

        return taskRepository.save(task);
    }

    public List<Task> getAll() {
        return taskRepository.findAll();
    }

    public Optional<Task> findById(Long id) throws NotFoundException {

            Optional<Task> byId = Optional.ofNullable(taskRepository.findById(id)
                    .orElseThrow(() -> new NotFoundException("Not found task with id: " + id)));

        return taskRepository.findById(id);
    }

    public void deleteById(Long id) {
        taskRepository.deleteById(id);
    }
}
