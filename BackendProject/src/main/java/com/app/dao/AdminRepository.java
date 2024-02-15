package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.app.pojos.Admin;

public interface AdminRepository extends JpaRepository<Admin,Long> {
	
	Optional<Admin> findByFirstNameAndLastName(String firstName, String lastName);
	
	Optional<Admin> findByEmailAndPassword(String email, String pwd);
	
	Optional<Admin> findByEmail(String email);

	@Modifying
	@Query("Update Admin a set a.password=:p where a.email=:e")
	Integer updatePassword(@Param("e") String em,@Param("p") String pass);	
		
}
