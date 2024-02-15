package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.FreelancerRepository;
import com.app.dao.InstituteRepository;
import com.app.dao.InstituteResponseRepository;
import com.app.pojos.Freelancer;
import com.app.pojos.Institute;
import com.app.pojos.InstituteResponse;

@Service
@Transactional
public class InstituteServiceImpl implements InstituteService{

	@Autowired
	public FreelancerRepository freelancerRepo;
	
	@Autowired
	public InstituteRepository instituteRepo;
	
	@Autowired
	public InstituteResponseRepository feedback;
	
//	@Override
//	public Applicant AddApplicant(Applicant b) {
//		// TODO Auto-generated method stub
//		return instittuteRepo.save(b);
//	}

	@Override
	public List<Freelancer> getDetails(String applyingForJob) {
		// TODO Auto-generated method stub
		return instituteRepo.applyingForTheJob(applyingForJob);
	}

//	@Override
//	public List<Applicant> getAllApplicant() {
//		// TODO Auto-generated method stub
//		return instittuteRepo.findAll();
//	}


//	@Override
//	public Institute addOrUpdateDetails(Institute a) {
//		// TODO Auto-generated method stub
//		return instittuteRepo.save(a);
//	}

	@Override
	public Institute addInstitute(Institute institute) {
		// TODO Auto-generated method stub
		return instituteRepo.save(institute);
	}

	@Override
	public Institute authenticateUser(String em, String pass) {
		// TODO Auto-generated method stub
		return instituteRepo.findByInstituteEmailAndInstitutePassword(em, pass)
				.orElseThrow(() -> new RuntimeException("Institute login failed : Invalid Credentials"))	;
	
	}
	
	@Override
	public List<Institute> getAllInstitutes() {
		// TODO Auto-generated method stub
		return instituteRepo.findAll();
	}

	@Override
	public Institute getInstituteDetails(String email) {
		return instituteRepo.findByInstituteEmail(email);
		
	}
	@Override
	public String removeInstituteById(Long id) {
		// TODO Auto-generated method stub
		instituteRepo.deleteById(id);
		 return "ok deleted";
	}


	@Override
	public InstituteResponse addResponse(InstituteResponse s) {
		// TODO Auto-generated method stub
		return feedback.save(s);
	}


//	@Override
//	public InstituteResponse getSelected(Long freelancerId) {
//		Freelancer freelancer = freelancerRepo.findById(freelancerId).orElseThrow(()-> new RuntimeException("failed : No such freelancer exist"));
//		InstituteResponse f=feedback.findByEmail(freelancer.getEmail()).orElseThrow(() -> new RuntimeException("failed : Invalid Credentials"));
//		
//		return f ;
//	}

	@Override
	public Integer updateInstituteStatus(Long id, String status) {
		return instituteRepo.updateInstituteStatus(id,status);
	}

	@Override
	public InstituteResponse findByFreelancerEmail(String freelancerEmail) {
		// TODO Auto-generated method stub
		return feedback.findByFreelancerEmail(freelancerEmail)
				.orElseThrow(() -> new RuntimeException("Invalid Freelancer Email"));
	}

	@Override
	public Integer updateInstitute(Institute updatedInstitute) {
		return instituteRepo.updateInstitute(updatedInstitute.getInstituteName(),updatedInstitute.getInstituteMission(), updatedInstitute.getInstituteEmail());
	}


}
//findByApplyingForJob(applyingForJob).orElseThrow(() -> new RuntimeException("No job found skill " +applyingForJob));