package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojos.Freelancer;
import com.app.pojos.Institute;
import com.app.pojos.InstituteResponse;


public interface InstituteResponseRepository extends JpaRepository<InstituteResponse,Long> {

	Optional<InstituteResponse> findByFreelancer(Freelancer freelancer);

	
	Optional<InstituteResponse> findByFreelancerEmail(String freelancerEmail);
	
}
