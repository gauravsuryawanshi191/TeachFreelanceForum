package com.app.service;

import java.util.List;

import com.app.dto.FreelancerDTO;

public interface FreelancerService {

	FreelancerDTO findById(Long id);

	FreelancerDTO authenticateFreelancer(String email, String pass);

	FreelancerDTO addFreelancerDetails(FreelancerDTO freelancerDto);

	Integer updateFreelancerQualificationDetails(FreelancerDTO freelancerDto);

	FreelancerDTO getFreelancerDetails(String firstName);

	FreelancerDTO getFreelancerDetailsByEmail(String email);

	FreelancerDTO authenticateEmail(String em);

	Integer updatePasswordWithEmail(String pass, String em);

	String deleteFreelancer(Long id);

	// for admin to view all freelancers
	List<FreelancerDTO> getAllFreelancer();

	Integer applyToJob(Long free_id, Long adv_id);

	FreelancerDTO getFreelancerById(Long id);

}
