package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Length;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class InstituteDTO{
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank(message = "Institute Name is required")
	private String instituteName;
	@NotBlank(message = "Institute Mission is required")
	private String instituteMission;
	@NotBlank(message = "Email is required")
	@Email(message = "Invalid email format")
	private String instituteEmail;
	@JsonProperty(access = Access.WRITE_ONLY)
	@NotBlank(message = "Password required")
	//@Pattern(regexp = "(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$/)", message = "Invalid password.Password must contain one capital letter,one special character and one digit.")
	@Length(min = 8,message = "Password length must be atleast of 8 characters.")
	private String institutePassword;
	@JsonProperty(access = Access.READ_ONLY)
	private String instituteStatus;

//	public Institute() {
//		super();
//	}
//
//	public Institute(String instituteName, String instituteMission, String instituteEmail) {
//		super();
//		this.instituteName = instituteName;
//		this.instituteMission = instituteMission;
//		this.instituteEmail = instituteEmail;
//	}
//
//	public String getInstituteName() {
//		return instituteName;
//	}
//
//	public void setInstituteName(String instituteName) {
//		this.instituteName = instituteName;
//	}
//
//	public String getInstituteMission() {
//		return instituteMission;
//	}
//
//	public void setInstituteMission(String instituteMission) {
//		this.instituteMission = instituteMission;
//	}
//
//	public String getInstituteEmail() {
//		return instituteEmail;
//	}
//
//	public void setInstituteEmail(String instituteEmail) {
//		this.instituteEmail = instituteEmail;
//	}
//
//	public String getInstitutePassword() {
//		return institutePassword;
//	}
//
//	public void setInstitutePassword(String institutePassword) {
//		this.institutePassword = institutePassword;
//	}
//
//	public String getInstituteStatus() {
//		return instituteStatus;
//	}
//
//	public void setInstituteStatus(String instituteStatus) {
//		this.instituteStatus = instituteStatus;
//	}
//
//	@Override
//	public String toString() {
//		return "Institute [instituteName=" + instituteName + ", instituteMission=" + instituteMission
//				+ ", instituteEmail=" + instituteEmail + ", institutePassword=" + institutePassword
//				+ ", instituteStatus=" + instituteStatus + "]";
//	}
//	
	
}
