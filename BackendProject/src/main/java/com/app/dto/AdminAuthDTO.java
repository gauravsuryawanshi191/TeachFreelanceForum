package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AdminAuthDTO {

	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank(message = "Email is required")
	@Email(message = "Invalid email format")
	private String email;
	@JsonProperty(access = Access.READ_ONLY)
	private String firstName;
	@JsonProperty(access = Access.WRITE_ONLY)
	@NotBlank(message = "Password required")
	//@Pattern(regexp = "(/^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)", message = "Invalid password")
	private String password;

//	public String getFirstName() {
//		return firstName;
//	}
//
//	public void setFirstName(String firstName) {
//		this.firstName = firstName;
//	}
//
//	public String getLastName() {
//		return lastName;
//	}
//
//	public void setLastName(String lastName) {
//		this.lastName = lastName;
//	}
//
//	public String getEmail() {
//		return email;
//	}
//
//	public void setEmail(String email) {
//		this.email = email;
//	}
//
//	public String getPassword() {
//		return password;
//	}
//
//	public void setPassword(String password) {
//		this.password = password;
//	}
//
//	@Override
//	public String toString() {
//		return "Admin [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + "]";
//	}		
}
