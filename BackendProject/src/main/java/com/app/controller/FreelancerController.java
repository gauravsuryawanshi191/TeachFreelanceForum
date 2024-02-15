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
	public Freelancer loginFreelancer(@RequestBody Freelancer a) {
		Freelancer u = null;
		String em = a.getEmail();
		String pass = a.getPassword();
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
	public Freelancer addFreelancer(@RequestBody Freelancer newFreelancer) {
		return freelancer.addFreelancerDetails(newFreelancer);
	}

	@GetMapping("/{firstName}")
	public Freelancer getFreelancerDetailsByFirstName(@PathVariable String firstName) {
		System.out.println("in Freelancer details methods");
		return freelancer.getFreelancerDetails(firstName);
	}
	
	@GetMapping("/email/{email}")
	public Freelancer getFreelancerDetailsByEmail(@PathVariable String email) {
		System.out.println("in Freelancer details methods");
		return freelancer.getFreelancerDetailsByEmail(email);
	}

	@PostMapping("/changePassword")
	public Integer forgetPassword(@RequestBody Freelancer f) {
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
	public Integer updateQualification(@RequestBody Freelancer updateFreelancer){
		return freelancer.updateFreelancerQualificationDetails(updateFreelancer);
		
	}

	@DeleteMapping("/delete/{id}")
	public String deleteFreelancerById(@PathVariable Long id) {
		freelancer.deleteFreelancer(id);
		return "deleted";
	}

	@GetMapping("/all")
	public List<Freelancer> getAllFreelancerDetails() {
		System.out.println("in get all user");
		return freelancer.getAllFreelancer();
	}
}
