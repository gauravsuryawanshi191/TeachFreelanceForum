package com.app.service;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminRepository;
import com.app.dto.AdminAuthDTO;

@Service
@Transactional

public class AdminServiceImpl implements AdminService {
	@Autowired
	private AdminRepository adminRepo;

	@Autowired
	private ModelMapper mapper;

	@Override
	public AdminAuthDTO authenticateAdmin(String email, String password) {
		adminRepo.findByEmail(email)
				.orElseThrow(() -> new RuntimeException("Admin : Invalid Email"));
		System.out.println("Email verified");
		return mapper.map(adminRepo.findByEmailAndPassword(email, password)
				.orElseThrow(() -> new RuntimeException("Admin Login Failed : Invalid Password")), AdminAuthDTO.class);
	}

	@Override
	public Integer updatePasswordWithEmail(String email, String newPassword) {
		return adminRepo.updatePassword(email, newPassword);
	}

}
