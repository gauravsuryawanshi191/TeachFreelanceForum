package com.app.service;

import java.util.List;

import com.app.dto.FreelancerDTO;
import com.app.dto.InstituteDTO;
import com.app.dto.InstituteUpdateDTO;
import com.app.pojos.Institute;
import com.app.pojos.InstituteResponse;

public interface InstituteService {

	// to fetch all freelancers who applied for given job
	List<FreelancerDTO> getDetails(String applyingForJob);

	// to add new institute to DB
	InstituteDTO addInstitute(InstituteDTO institute);

	// to authenticate user
	InstituteDTO authenticateInstitute(String email, String password);

	// for admin to view all institutes
	List<InstituteDTO> getAllInstitutes();

	// for institute to view details by email
	InstituteDTO getInstituteDetails(String email);

	// to change password, first check email exists or not
	InstituteDTO authenticateEmail(String email);

	// change password of registered institute
	Integer updatePasswordWithEmail(String pass, String email);

	// update institute reamining
	Integer updateInstitute(InstituteUpdateDTO updatedInstituteDto);

	// admin delete institute by id
	String removeInstituteById(Long id);

	// admin changes status of institute
	Integer updateInstituteStatus(Long id, String status);

	// send response to particular freelancer selected for the job advertisement
	InstituteResponse addResponse(InstituteResponse s);

	// to show response according to firstName of freelancer
	InstituteResponse findByFreelancerEmail(String freelancerEmail);

	List<FreelancerDTO> getAllAplicant(Long instiId);

	InstituteDTO getInstituteById(Long id);
}
