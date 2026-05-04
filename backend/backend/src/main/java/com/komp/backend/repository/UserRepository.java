package com.komp.backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.komp.backend.entity.User;
public interface UserRepository extends JpaRepository<User, Long> {

}
