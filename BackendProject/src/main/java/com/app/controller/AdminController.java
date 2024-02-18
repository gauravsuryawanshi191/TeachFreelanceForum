package com.app.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AdminDTO;
import com.app.dto.ApiResponse;
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
	public ResponseEntity<?> authenticateAdmin(@RequestBody AdminDTO adminDto) {
		try{
			AdminDTO ad = null;
			String em = adminDto.getEmail();
			String pass = adminDto.getPassword();
			if (em.trim() != null && pass.trim() != null) {
				ad = adminService.authenticateAdmin(em, pass);
				return ResponseEntity.status(HttpStatus.ACCEPTED).body(ad);
			}
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse("Email id and password can not be empty"));
		}catch(RuntimeException e) {
			System.out.println("in catch " + e.getMessage());
			return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(e.getMessage()));
		}
	}

	@PostMapping("/changePassword")
	public ResponseEntity<?> changePassword(@RequestBody AdminDTO adminDto) {
		String pass = adminDto.getPassword();
		System.out.println(pass);

		String em = adminDto.getEmail();
		System.out.println(em);
		try {
			return ResponseEntity.status(HttpStatus.OK)
					.body(adminService.updatePasswordWithEmail(em, pass));
		}
		catch (RuntimeException e) {
			System.out.println("err" + e);
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new ApiResponse(e.getMessage()));
		}
	}
}
