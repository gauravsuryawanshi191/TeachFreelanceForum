package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojos.Admin;
import com.app.service.AdminService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/Admin")
public class AdminController {

	@Autowired
	private AdminService adminService;

	public AdminController() {
		System.out.println("in ctor of " + getClass());
	}

	@PostMapping("/authenticate")
	public Admin authenticateAdmin(@RequestBody Admin admin) {
		Admin ad = null;
		String em = admin.getEmail();
		String pass = admin.getPassword();
		if (em != null && pass != null) {
			ad = adminService.authenticateAdmin(em, pass);
		}
		if (ad != null) {
			return ad;
		} else {
			return null;
		}
	}
	
//	@GetMapping("/{firstName}")
//	public Freelancer getFreelancerDetailsByFirstName(@PathVariable String firstName) {
//		System.out.println("in Freelancer details methods");
//		return freelancer.getFreelancerDetails(firstName);
//
//	}

	@PostMapping("/changePassword")
	public Integer changePassword(@RequestBody Admin admin) {
		String pass = admin.getPassword();
		System.out.println(pass);

		String em = admin.getEmail();
		System.out.println(em);

		if (pass != null && em != null) {
			return adminService.updatePasswordWithEmail(em, pass);
		} else {
			return null;
		}

	}

}
