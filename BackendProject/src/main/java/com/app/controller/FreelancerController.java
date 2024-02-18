package com.app.controller;

import java.util.List;

import javax.validation.Valid;

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

import com.app.dto.FreelancerDTO;
import com.app.service.FreelancerService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/Freelancer")
public class FreelancerController {

	@Autowired
	private FreelancerService freelancer;

	public FreelancerController() {
		System.out.println("in ctor of " + getClass());
	}

	/*
	 * @GetMapping("/{id}") public ResponseEntity<?>
	 * getUserDetailsById(@PathVariable int id){ return new
	 * ResponseEntity<>(user.findById(id),HttpStatus.OK); }
	 */

	@PostMapping("/authenticate")
	public FreelancerDTO loginFreelancer(@RequestBody FreelancerDTO freelancerDto) {
		FreelancerDTO u = null;
		String em = freelancerDto.getEmail();
		String pass = freelancerDto.getPassword();
		if (em != null && pass != null) {
			u = freelancer.authenticateFreelancer(em, pass);
		}
		if (u != null) {
			return u;
		} else {
			return null;
		}
	}

	@PostMapping("/add")
	public FreelancerDTO addFreelancer(@Valid @RequestBody FreelancerDTO newFreelancerDto) {
		return freelancer.addFreelancerDetails(newFreelancerDto);
	}

	@GetMapping("/{firstName}")
	public FreelancerDTO getFreelancerDetailsByFirstName(@PathVariable String firstName) {
		System.out.println("in Freelancer details methods");
		return freelancer.getFreelancerDetails(firstName);
	}
	
	@GetMapping("/email/{email}")
	public FreelancerDTO getFreelancerDetailsByEmail(@PathVariable String email) {
		System.out.println("in Freelancer details methods");
		return freelancer.getFreelancerDetailsByEmail(email);
	}

	@PostMapping("/changePassword")
	public Integer changePassword(@RequestBody FreelancerDTO f) {
		String pass = f.getPassword();
		System.out.println(pass);

		String em = f.getEmail();
		System.out.println(em);

		if (pass != null && em != null) {
			freelancer.authenticateEmail(em);
			System.out.println("email varified");
			return freelancer.updatePasswordWithEmail(pass, em);
		} else {
			return null;
		}
	}
	
	//PutMapping: to add qualification details
	@PutMapping("/updateQualification")
	public Integer updateQualification(@RequestBody FreelancerDTO updateFreelancerDto){
		return freelancer.updateFreelancerQualificationDetails(updateFreelancerDto);
		
	}

	@DeleteMapping("/delete/{id}")
	public String deleteFreelancerById(@PathVariable Long id) {
		freelancer.deleteFreelancer(id);
		return "deleted";
	}

	@GetMapping("/all")
	public List<FreelancerDTO> getAllFreelancerDetails() {
		System.out.println("in get all user");
		return freelancer.getAllFreelancer();
	}
}
