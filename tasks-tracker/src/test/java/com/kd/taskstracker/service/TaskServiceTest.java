package com.kd.taskstracker.service;

import com.kd.taskstracker.model.Task;
import com.kd.taskstracker.repository.TaskRepository;
import org.hamcrest.Matchers;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;

@RunWith(MockitoJUnitRunner.class)
public class TaskServiceTest {

    @Mock
    private TaskRepository taskRepository;

    @InjectMocks
    TaskService taskService;
    
    @Before
    public void setUp() throws Exception {
        given(taskRepository.findAll()).willReturn(prepareMockData());
    }

    @Test
    public void getAll() {
        List<Task> tasks = taskService.getAll();

        Assert.assertThat(tasks, Matchers.hasSize(2));
    }

    private List<Task> prepareMockData() {
        List<Task> tasks = new ArrayList<>();

        tasks.add(new Task(1L, "aaa", "", ""));
        tasks.add(new Task(2L, "bbb", "", ""));

        return tasks;
    }

    @Test
    public void saveOrUpdate() {
        Task newTask = new Task(5L, "nowy", "", "");

        given(taskRepository.save(any(Task.class))).willReturn(newTask);

        Task savedTask = taskService.saveOrUpdate(new Task(6L, "TEST", "", ""));

        Assert.assertThat(savedTask.getId(), Matchers.is(5L));
        Assert.assertThat(savedTask.getSummary(), Matchers.is("nowy"));
    }
}