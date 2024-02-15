package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminRepository;
import com.app.pojos.Admin;

@Service
@Transactional

public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminRepository adminRepo;

	@Override
	public Admin authenticateAdmin(String email, String password) {
		return adminRepo.findByEmailAndPassword(email, password)
				.orElseThrow(() -> new RuntimeException("Admin login failed : Invalid Credentials"));
	}

	@Override
	public Integer updatePasswordWithEmail(String email, String newPassword) {
		adminRepo.findByEmail(email)
		.orElseThrow(() -> new RuntimeException("Admin : Invalid Email"));
		System.out.println("Email verified");
		return adminRepo.updatePassword(email, newPassword);
	}

}
