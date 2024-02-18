package com.app.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ApiResponse;
import com.app.dto.InstituteAuthDTO;
import com.app.dto.InstituteDTO;
import com.app.dto.InstituteUpdateDTO;
import com.app.pojos.Freelancer;
import com.app.pojos.Institute;
import com.app.pojos.InstituteResponse;
import com.app.service.FreelancerService;
import com.app.service.InstituteService;

@CrossOrigin(origins = "*")
@RestController
@Validated
@RequestMapping("/api/Institute")
public class InstituteController {

	@Autowired
	private InstituteService instituteService;

	@Autowired
	private FreelancerService freelancerService;

	public InstituteController() {
		System.out.println("in ctor of " + getClass());
	}

	@GetMapping("/{applyingForJob}")
	public ResponseEntity<?> getAppliedApplicant(@Valid @PathVariable String applyingForJob) {
		System.out.println("in getAppliedApplicant methods" + applyingForJob);
		return ResponseEntity.status(HttpStatus.CREATED).body(instituteService.getDetails(applyingForJob));
	}

	@PostMapping("/addNew")
	public ResponseEntity<?> addInstitute(@Valid @RequestBody InstituteDTO instituteDto) {
		try {
			instituteDto.setInstituteStatus("NOTAPPROVED");
			return ResponseEntity.status(HttpStatus.CREATED).body(instituteService.addInstitute(instituteDto));
		} catch (RuntimeException e) {
			System.out.println("in catch " + e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_ACCEPTABLE).body(new ApiResponse(e.getMessage()));
		}
	}

	@PostMapping("/authenticate")
	public ResponseEntity<?> loginInstitute(@Valid @RequestBody InstituteAuthDTO instituteDto) {
		try {
			InstituteDTO institute = null;
			String em = instituteDto.getInstituteEmail();
			String pass = instituteDto.getInstitutePassword();
			System.out.println();
			if (em.trim() != null && pass.trim() != null) {
				institute = instituteService.authenticateInstitute(em, pass);
				return ResponseEntity.status(HttpStatus.ACCEPTED).body(institute);
			}
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
					.body(new ApiResponse("Email id and password can not be empty"));

		} catch (RuntimeException e) {
			System.out.println("in catch " + e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}

	}

	@PostMapping("/changePassword")
	public ResponseEntity<?> changePassword(@Valid @RequestBody InstituteAuthDTO instituteDto) {
		try {
			String pass = instituteDto.getInstitutePassword();
			System.out.println(pass);
			String email = instituteDto.getInstituteEmail();
			System.out.println(email);
			System.out.println(email + " " + pass);
			if (pass.trim() != null && email.trim() != null) {
				instituteService.authenticateEmail(email);
				System.out.println("email varified");
				return ResponseEntity.status(HttpStatus.OK).body(instituteService.updatePasswordWithEmail(pass, email));
			} else {
				return ResponseEntity.status(HttpStatus.NO_CONTENT).body(new ApiResponse("Enter valid password"));
			}
		} catch (RuntimeException e) {
			System.out.println("in catch " + e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}

	@GetMapping("/getInstitute/{email}")
	public ResponseEntity<?> getInstituteDetails(@Valid @PathVariable String email) {
		System.out.println("in get institute");
		try {
			return ResponseEntity.status(HttpStatus.OK).body(instituteService.getInstituteDetails(email));
		} catch (RuntimeException e) {
			System.out.println("in catch " + e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}

	@GetMapping("/getInstitutes")
	public ResponseEntity<?> getAllDetails() {
		System.out.println("in get all institutes");
		return ResponseEntity.status(HttpStatus.OK).body(instituteService.getAllInstitutes());
	}

	@GetMapping("/approve/{id}/{status}")
	public ResponseEntity<?> approve(@Valid @PathVariable Long id, @Valid @PathVariable String status) {
		System.out.println(status);
		String statusNotApproved = "NOTAPPROVED";
		String statusApproved = "APPROVED";
		if (statusNotApproved.equalsIgnoreCase(status)) {
			return ResponseEntity.status(HttpStatus.OK)
					.body(instituteService.updateInstituteStatus(id, statusApproved));
		} else {
			return ResponseEntity.status(HttpStatus.OK)
					.body(instituteService.updateInstituteStatus(id, statusNotApproved));
		}
	}

	@DeleteMapping("/deleteInstitute/{id}")
	public ResponseEntity<?> deleteInstituteById(@Valid @PathVariable Long id) {
		System.out.println(id);
		return ResponseEntity.status(HttpStatus.OK).body(new ApiResponse(instituteService.removeInstituteById(id)));
	}

	@PutMapping("/update")
	public ResponseEntity<?> updateInstitute(@Valid @RequestBody InstituteUpdateDTO updatedInstituteDto) {
		System.out.println(updatedInstituteDto);
		return ResponseEntity.status(HttpStatus.OK).body(instituteService.updateInstitute(updatedInstituteDto));
	}

	@PostMapping("/sendResponse/{instituteId}/{jobId}")
	public InstituteResponse sendResponseToFreelancer(@RequestBody InstituteResponse s, @PathVariable Long instituteId,
			@PathVariable Long jobId) {
		Institute institute = instituteService.getInstituteById(instituteId);
		Freelancer freelancer = freelancerService.getFreelancerById(jobId);
		System.out.println("1" + institute);
		System.out.println("2 " + freelancer);
		s.setInstitute(institute);
		s.setFreelancer(freelancer);
		InstituteResponse f = instituteService.addResponse(s);
		return ResponseEntity.status(HttpStatus.OK).body(f);
	}

	// changes required
	@GetMapping("/selectedFreelancer/{freelancerEmail}")
	public ResponseEntity<?> getSelectedFreelancer(@Valid @PathVariable String freelancerEmail) {
		System.out.println("in applicant details methods");
		try {
			return ResponseEntity.status(HttpStatus.OK).body(instituteService.findByFreelancerEmail(freelancerEmail));
		} catch (RuntimeException e) {
			System.out.println("in catch " + e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}

	@GetMapping("/applicants/{instituteId}")
	public List<Freelancer> getApplicants(@Valid @PathVariable Long instituteId) {
		System.out.println("instituteId: " + instituteId);
		return instituteService.getAllAplicant(instituteId);
	}
}
