package com.app.service;

import com.app.dto.AdminDTO;

public interface AdminService {
	
	AdminDTO authenticateAdmin(String email, String password);
	 
	Integer updatePasswordWithEmail(String email, String newPassword);
	
}
