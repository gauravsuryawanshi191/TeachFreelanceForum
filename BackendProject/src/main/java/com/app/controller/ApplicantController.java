//package com.app.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.web.bind.annotation.CrossOrigin;
//import org.springframework.web.bind.annotation.DeleteMapping;
//import org.springframework.web.bind.annotation.GetMapping;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.app.pojos.Applicant;
//import com.app.pojos.User;
//import com.app.service.IApplicantService;
//
//@CrossOrigin(origins = "*")
//@RestController
//@RequestMapping("/api/Applicant")
//public class ApplicantController {
//
//	@Autowired
//	private IApplicantService app;
//
//	public ApplicantController() {
//		super();
//	}
//
//	@GetMapping("/{firstName}")
//	public Applicant getApplicantDetails(@PathVariable String firstName) {
//		System.out.println("in applicant details methods");
//		return app.getDetail(firstName);
//
//	}
//
//	@DeleteMapping("/delete/{id}")
//	public String deleteJobByfirstName(@PathVariable Integer id) {
//
//		app.getApp(id);
//
//		return "deleted";
//
//	}
//
//}
