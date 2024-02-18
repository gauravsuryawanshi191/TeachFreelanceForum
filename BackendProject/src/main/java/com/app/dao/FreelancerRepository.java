package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Freelancer;
@Repository
public interface FreelancerRepository extends JpaRepository<Freelancer, Long> {

	Optional<Freelancer> findByEmailAndPassword(String email, String pwd);

	Optional<Freelancer> findByFirstName(String firstName);

	Optional<Freelancer> findByEmail(String em);

	@Modifying
	@Query("Update Freelancer f set f.password=:p where f.email=:e")
	Integer updatePassword(@Param("p") String pass, @Param("e") String em);

	@Modifying
	@Query("Update Freelancer f set f.qualification=:q, f.university=:u, f.passoutYear=:p, f.graduationMarks=:g where f.email=:e")
	Integer updateFreelancerQualification(@Param("q") String qual, @Param("u") String u,@Param("g") Integer g, @Param("p") Integer p,@Param("e") String em);

}
