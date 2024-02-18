package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.Freelancer;
import com.app.pojos.InstituteResponse;

@Repository
public interface InstituteResponseRepository extends JpaRepository<InstituteResponse,Long> {

	Optional<InstituteResponse> findByFreelancer(Freelancer freelancer);

	
	Optional<InstituteResponse> findByFreelancerEmail(String freelancerEmail);
	
}
