package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Freelancer;
import com.app.pojos.Institute;
import com.app.pojos.InstituteResponse;
import com.app.service.InstituteService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/Institute")
public class InstituteController {

	@Autowired
	private InstituteService instituteService;

	public InstituteController() {
		System.out.println("in ctor of " + getClass());
	}

//	@PostMapping("/add")
//	public Applicant applyForJob(@RequestBody Applicant a) {
//		return instituteService.AddApplicant(a);
//	}

	@GetMapping("/{applyingForJob}")
	public List<Freelancer> getAppliedApplicant(@PathVariable String applyingForJob) {
		System.out.println("in getAppliedApplicant methods" + applyingForJob);
		return instituteService.getDetails(applyingForJob);
	}

//	@GetMapping
//	public List<Applicant> getAllApplicant() {
//
//		return instituteService.getAllApplicant();
//	}

//	@PutMapping("/put")
//	public Applicant updateApplicantDetails(@RequestBody Applicant e) // de-serial (un marshalling)
//	{
//		// e : DETACHED POJO , containing updated state
//		System.out.println("in add job " + e);
//		return instituteService.addOrUpdateDetails(e);
//	}

	@PostMapping("/addNew")
	public Institute addInstitute(@RequestBody Institute c) {
		c.setInstituteStatus("NOTAPPROVED");
		Institute d = instituteService.addInstitute(c);
		return d;
	}

	@PostMapping("/authenticate")
	public Institute loginInstitute(@RequestBody Institute a) {
		System.out.println(a);
		Institute c = null;
		String em = a.getInstituteEmail();
		String pass = a.getInstitutePassword();
		System.out.println(em + " " + pass);
		if (em != null && pass != null) {
			c = instituteService.authenticateInstitute(em, pass);
		}
		if (c != null) {
			return c;
		} else {
			return null;
		}

	}

	@PostMapping("/changePassword")
	public Integer changePassword(@RequestBody Institute institute) {
		String pass = institute.getInstitutePassword();
		System.out.println(pass);
		String email = institute.getInstituteEmail();
		System.out.println(email);
		if (pass != null && email != null) {
			instituteService.authenticateEmail(email);
			System.out.println("email varified");
			return instituteService.updatePasswordWithEmail(pass, email);
		} else {
			return null;
		}
	}
	
	@GetMapping("/getInstitute/{email}")
	public Institute getInstituteDetails(@PathVariable String email) {
		System.out.println("in get institute");
		return instituteService.getInstituteDetails(email);
	}

	@GetMapping("/getInstitutes")
	public List<Institute> getAllDetails() {
		System.out.println("in get all institutes");
		return instituteService.getAllInstitutes();
	}

	@GetMapping("/approve/{id}/{status}")
	public Integer approve(@PathVariable Long id, @PathVariable String status) {
		System.out.println(status);
		String statusNotApproved = "NOTAPPROVED";
		String statusApproved = "APPROVED";
		if (statusNotApproved.equalsIgnoreCase(status)) {
			return instituteService.updateInstituteStatus(id, statusApproved);
		} else {

			return instituteService.updateInstituteStatus(id, statusNotApproved);
		}
	}

	@DeleteMapping("/deleteInstitute/{id}")
	public String deleteInstituteById(@PathVariable Long id) {
		instituteService.removeInstituteById(id);
		return "deleted";
	}
	
	@PutMapping("/update")
	public Integer updateInstitute(@RequestBody Institute updatedInstitute) {
		System.out.println(updatedInstitute);
		return instituteService.updateInstitute(updatedInstitute);
	}

	@PostMapping("/sendResponse")
	public InstituteResponse sendResponseToFreelancer(@RequestBody InstituteResponse s) {
		InstituteResponse f = instituteService.addResponse(s);
		return f;
	}

	@GetMapping("/selectedFreelancer/{freelancerEmail}")
	public InstituteResponse getSelectedFreelancer(@PathVariable String freelancerEmail) {
		System.out.println("in applicant details methods");
		//return null;
		return instituteService.findByFreelancerEmail(freelancerEmail);
	}

}
