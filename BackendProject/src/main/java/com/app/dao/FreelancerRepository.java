package com.app.dao;

import java.util.Optional;
import java.util.*;
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
	Integer updateFreelancerQualification(@Param("q") String qual, @Param("u") String u, @Param("g") Double g,
			@Param("p") Integer p, @Param("e") String em);

	@Modifying
	@Query(value = "insert into application_tbl values(?1,?2)", nativeQuery = true)
	public Integer addApplication(@Param("a") Long advId, @Param("f") Long freeId);

	@Query(value = "select distinct freelancer_tbl.* from freelancer_tbl join application_tbl on freelancer_tbl.id = application_tbl.freelancer_id \n"
			+ "and application_tbl.advertisement_id in (select advertisement_tbl.id from advertisement_tbl where advertisement_tbl.institute_id = ?1);", nativeQuery = true)
	public List<Freelancer> allApplications(@Param("instiId") Long instiId);

}
