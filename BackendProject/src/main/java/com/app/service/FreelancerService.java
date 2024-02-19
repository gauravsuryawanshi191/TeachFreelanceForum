package com.app.service;

import java.util.List;

import com.app.dto.FreelancerAuthDTO;
import com.app.dto.FreelancerDTO;
import com.app.dto.FreelancerQualificationDTO;
import com.app.dto.InstituteResponseDTO;

public interface FreelancerService {

	FreelancerDTO findById(Long id);

	FreelancerAuthDTO authenticateFreelancer(String email, String pass);

	FreelancerDTO addFreelancerDetails(FreelancerDTO freelancerDto);

	Integer updateFreelancerQualificationDetails(FreelancerQualificationDTO freelancerDto);

	FreelancerDTO getFreelancerDetails(String firstName);

	FreelancerDTO getFreelancerDetailsByEmail(String email);

	FreelancerAuthDTO authenticateEmail(String em);

	Integer updatePasswordWithEmail(String pass, String em);

	String deleteFreelancer(Long id);

	// for admin to view all freelancers
	List<FreelancerDTO> getAllFreelancer();

	Integer applyToJob(Long free_id, Long adv_id);

	FreelancerDTO getFreelancerById(Long id);

	List<InstituteResponseDTO> getResponse(Long freelancerId);

}
