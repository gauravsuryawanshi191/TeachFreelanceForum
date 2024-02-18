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
public class InstituteAuthDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank(message = "Email is required")
	@Email(message = "Invalid email format")
	private String instituteEmail;
	@JsonProperty(access = Access.WRITE_ONLY)
	@NotBlank(message = "Password required")
	//@Pattern(regexp = "(/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\\S+$).{8,20}$/)", message = "Invalid password.Password must contain one capital letter,one special character and one digit.")
	@Length(min = 8,message = "Password length must be atleast of 8 characters.")
	private String institutePassword;
}
