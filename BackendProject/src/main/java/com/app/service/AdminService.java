package com.app.service;

import com.app.dto.AdminAuthDTO;

public interface AdminService {

	AdminAuthDTO authenticateAdmin(String email, String password);

	Integer updatePasswordWithEmail(String email, String newPassword);

}
