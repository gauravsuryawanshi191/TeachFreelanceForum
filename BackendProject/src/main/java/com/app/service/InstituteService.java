package com.app.service;

import java.util.List;

import com.app.dao.InstituteResponseRepository;
import com.app.pojos.Freelancer;
import com.app.pojos.Institute;
import com.app.pojos.InstituteResponse;

public interface InstituteService {

	//Applicant AddApplicant(Applicant b)
	
	//to fetch all freelancers who applied for given job
	public List<Freelancer> getDetails(String applyingForJob);
	
	//List<Applicant> getAllApplicant();
	
	//Institute addOrUpdateDetails(Institute a);
	
	//to add new institute to DB
	Institute addInstitute(Institute c);
	
	//to authenticate user
	Institute authenticateUser(String em, String pass);
	
	//for admin to view all institutes
	List<Institute> getAllInstitutes();
	
	//for institute to view details by email
	Institute getInstituteDetails(String email);
	
	//update institute by email
	Integer updateInstitute(Institute updatedInstitute);
	
	//to delete institute by id
	String removeInstituteById(Long id);
	
	//update status of institute
	Integer updateInstituteStatus(Long id, String status);
	
	//send response to particular freelancer selected for the job advertisement
	InstituteResponse addResponse(InstituteResponse s);
	
	//to show response according to firstName of freelancer
	InstituteResponse findByFreelancerEmail(String freelancerEmail);
	
}
