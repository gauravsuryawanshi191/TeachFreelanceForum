package com.app.service;

import java.util.List;
import java.util.Optional;

import com.app.pojos.Freelancer;

public interface FreelancerService {

	 Optional <Freelancer> findById(Long id);
	 
	Freelancer authenticateFreelancer(String email,String pass); 
	
	Freelancer addFreelancerDetails(Freelancer transientFreelancer);
	
	Integer updateFreelancerQualificationDetails(Freelancer freelancer);
	
	Freelancer getFreelancerDetails(String firstName);
	
	Freelancer getFreelancerDetailsByEmail(String email);
	 
	Freelancer authenticateEmail(String em);
	 
	 Integer updatePasswordWithEmail(String pass,String em);
	 
	  String deleteFreelancer(Long id);
	
	  //for admin to view all freelancers
	  List<Freelancer> getAllFreelancer();
	
}
