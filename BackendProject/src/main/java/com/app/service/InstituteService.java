package com.app.service;

import java.util.List;

import com.app.pojos.Freelancer;
import com.app.pojos.Institute;
import com.app.pojos.InstituteResponse;

public interface InstituteService {

	//Applicant AddApplicant(Applicant b)
	
	//to fetch all freelancers who applied for given job
	public List<Freelancer> getDetails(String applyingForJob);
	
	//List<Applicant> getAllApplicant();
	
	//to add new institute to DB
	Institute addInstitute(Institute institute);
	
	//to authenticate user
	Institute authenticateInstitute(String email, String password);
	
	//to change password, first check email exists or not
	public Institute authenticateEmail(String email);

	//change password of registered institute
	public Integer updatePasswordWithEmail(String pass, String email);
	
	//for admin to view all institutes
	List<Institute> getAllInstitutes();
	
	//for institute to view details by email
	Institute getInstituteDetails(String email);
	
	//update institute reamining
	Integer updateInstitute(Institute updatedInstitute);
	
	//admin delete institute by id
	String removeInstituteById(Long id);
	
	//admin changes status of institute
	Integer updateInstituteStatus(Long id, String status);
	
	//send response to particular freelancer selected for the job advertisement
	InstituteResponse addResponse(InstituteResponse s);
	
	//to show response according to firstName of freelancer
	InstituteResponse findByFreelancerEmail(String freelancerEmail);
	
}
