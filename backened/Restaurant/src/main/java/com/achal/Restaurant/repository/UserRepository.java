package com.achal.Restaurant.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.achal.Restaurant.model.User;

@Repository
	public interface UserRepository extends JpaRepository<User, Long> {
	    User findByEmail(String email);
	}


