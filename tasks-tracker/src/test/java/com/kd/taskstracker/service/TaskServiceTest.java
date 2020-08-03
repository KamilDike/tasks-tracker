package com.kd.taskstracker.service;

import com.kd.taskstracker.exception.NotFoundException;
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
import java.util.Optional;

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

        Task newTask = new Task(2L, "bbb", "", "");
        given(taskRepository.findById(2L))
                .willReturn(Optional.of(newTask));
    }

    @Test
    public void getAll() {
        List<Task> tasks = taskService.getAll();

        Assert.assertThat(tasks, Matchers.hasSize(2));
    }

    @Test
    public void saveOrUpdate() {
        Task newTask = new Task(5L, "nowy", "", "");

        given(taskRepository.save(any(Task.class))).willReturn(newTask);

        Task savedTask = taskService.saveOrUpdate(new Task(6L, "TEST", "", ""));

        Assert.assertThat(savedTask.getId(), Matchers.is(5L));
        Assert.assertThat(savedTask.getSummary(), Matchers.is("nowy"));
    }

    @Test
    public void findById() throws NotFoundException {
        Optional<Task> foundTask = taskService.findById(2L);

        Assert.assertThat(foundTask.get(), Matchers.notNullValue());
        Assert.assertThat(foundTask.get().getId(), Matchers.is(2L));
        Assert.assertThat(foundTask.get().getSummary(), Matchers.is("bbb"));
    }

    private List<Task> prepareMockData() {
        List<Task> tasks = new ArrayList<>();

        tasks.add(new Task(1L, "aaa", "", ""));
        tasks.add(new Task(2L, "bbb", "", ""));

        return tasks;
    }
}