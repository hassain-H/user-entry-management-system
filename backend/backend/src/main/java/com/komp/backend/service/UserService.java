package com.komp.backend.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.komp.backend.entity.User;
import com.komp.backend.repository.UserRepository;

@Service
public class UserService {

    @Autowired
    private UserRepository repo;

    public List<User> getAllUsers() {
        return repo.findAll();
    }

    public User saveUser(User user) {
        return repo.save(user);
    }

    public void deleteUser(Long id) {
        repo.deleteById(id);
    }


    public User updateUser(Long id, User user) {

        User existingUser = repo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));

        existingUser.setUserName(user.getUserName());
        existingUser.setUserAge(user.getUserAge());
        existingUser.setUserPlace(user.getUserPlace());

        return repo.save(existingUser);
    }

    public User getUserById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }
}
