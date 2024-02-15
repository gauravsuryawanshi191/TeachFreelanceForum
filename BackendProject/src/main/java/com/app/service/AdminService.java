package com.app.service;

import com.app.pojos.Admin;

public interface AdminService {
	
	Admin authenticateAdmin(String email, String password);
	 
	Integer updatePasswordWithEmail(String email, String newPassword);
	
}
