package com.app.controller;

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
import com.app.dto.FreelancerAuthDTO;
import com.app.dto.FreelancerDTO;
import com.app.dto.FreelancerQualificationDTO;
import com.app.service.FreelancerService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/Freelancer")
@Validated
public class FreelancerController {

	@Autowired
	private FreelancerService freelancer;

	public FreelancerController() {
		System.out.println("in ctor of " + getClass());
	}

	@PostMapping("/authenticate")
	public ResponseEntity<?> loginFreelancer(@Valid @RequestBody FreelancerAuthDTO freelancerDto) {
		try {
			FreelancerAuthDTO u = null;
			String em = freelancerDto.getEmail();
			String pass = freelancerDto.getPassword();
			if (em != null && pass != null) {
				u = freelancer.authenticateFreelancer(em, pass);
			}
			return ResponseEntity.status(HttpStatus.ACCEPTED).body(u);
		} catch (RuntimeException e) {
			System.out.println("in catch " + e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}

	}

	@PostMapping("/add")
	public ResponseEntity<?> addFreelancer(@Valid @RequestBody FreelancerDTO newFreelancerDto) {
		return new ResponseEntity<>(freelancer.addFreelancerDetails(newFreelancerDto), HttpStatus.CREATED);
	}

	@GetMapping("/{firstName}")
	public ResponseEntity<?> getFreelancerDetailsByFirstName(@Valid @PathVariable String firstName) {
		try {
			System.out.println("in Freelancer details methods");
			return new ResponseEntity<>(freelancer.getFreelancerDetails(firstName), HttpStatus.OK);
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}

	@GetMapping("/getFreelancer/{id}")
	public ResponseEntity<?>  getFreelancerDetailsById(@Valid @PathVariable Long id) {
		System.out.println("in Freelancer details methods by ID");
		return  ResponseEntity.status(HttpStatus.OK).body(freelancer.getFreelancerById(id));
	}
	
	@GetMapping("/getResponse/{freelancerId}")
	public ResponseEntity<?> getResponeMessage(@Valid @PathVariable Long freelancerId) {
		System.out.println("id " +freelancerId);
		return ResponseEntity.status(HttpStatus.OK).body(freelancer.getResponse(freelancerId));
	}

	@GetMapping("/email/{email}")
	public ResponseEntity<?> getFreelancerDetailsByEmail(@Valid @PathVariable String email) {
		try {
			System.out.println("in Freelancer details method email");
			return new ResponseEntity<>(freelancer.getFreelancerDetailsByEmail(email), HttpStatus.OK);
		} catch (RuntimeException e) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}

	@PostMapping("/changePassword")
	public ResponseEntity<?> changePassword(@Valid @RequestBody FreelancerAuthDTO f) {
		String pass = f.getPassword();
		System.out.println(pass);

		String em = f.getEmail();
		System.out.println(em);
		try {
			if (pass != null && em != null) {
				freelancer.authenticateEmail(em);
				System.out.println("email varified");
				return ResponseEntity.status(HttpStatus.OK).body(freelancer.updatePasswordWithEmail(pass, em));
			} else {
				return null;
			}
		} catch (RuntimeException e) {
			System.out.println("err" + e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ApiResponse(e.getMessage()));
		}
	}

	// PutMapping: to add qualification details
	@PutMapping("/updateQualification")
	public ResponseEntity<?> updateQualification(@Valid @RequestBody FreelancerQualificationDTO updateFreelancerDto) {
		System.out.println("update qual" + updateFreelancerDto);
		try {
			return new ResponseEntity<>(freelancer.updateFreelancerQualificationDetails(updateFreelancerDto),
					HttpStatus.ACCEPTED);
		} catch (RuntimeException e) {
			System.out.println("err" + e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ApiResponse(e.getMessage()));
		}

	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<?> deleteFreelancerById(@Valid @PathVariable Long id) {
		freelancer.deleteFreelancer(id);
		return new ResponseEntity<>("deleted", HttpStatus.OK);
	}

	@GetMapping("/all")
	public ResponseEntity<?> getAllFreelancerDetails() {
		System.out.println("in get all user");
		return  ResponseEntity.status(HttpStatus.OK).body(freelancer.getAllFreelancer());
	}

	// applying for adv
	@PostMapping("/apply/{free_id}/{adv_id}")
	public Integer applyForJob(@Valid @PathVariable Long free_id,@Valid @PathVariable Long adv_id) {
		System.out.println("freeId: " + free_id + " AdvId: " + adv_id);

		return freelancer.applyToJob(free_id, adv_id);
	}

}
