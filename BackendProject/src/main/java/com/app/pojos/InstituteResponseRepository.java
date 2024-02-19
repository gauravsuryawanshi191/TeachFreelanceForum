package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Freelancer;
import com.app.pojos.InstituteResponse;

@Repository
public interface InstituteResponseRepository extends JpaRepository<InstituteResponse,Long> {

	Optional<InstituteResponse> findByFreelancer(Freelancer freelancer);

	
	Optional<InstituteResponse> findByFreelancerEmail(String freelancerEmail);
	
	@Query(value = "select * from feedback_tbl where freelancer_id = ?1", nativeQuery = true)
	List<InstituteResponse> findResponse(@Param("freeId") Long freelancerId);

	@Modifying
	@Query(value = "delete from feedback_tbl where freelancer_id = ?1", nativeQuery = true)
	Integer deleteByFreelancerId(@Param("freeId") Long id);
	
}
