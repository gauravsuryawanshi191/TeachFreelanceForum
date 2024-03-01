package com.app.dto;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;

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
public class FreelancerAuthDTO{
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@JsonProperty(access = Access.READ_ONLY)
	private String firstName; 
	@NotBlank(message = "Email is required")
	@Email(message = "Invalid email format")
	private String email;
	@JsonProperty(access = Access.WRITE_ONLY)
	@NotBlank(message = "Password required")
	@Length(min = 8,message = "Password length must be atleast of 8 characters.")
	private String password;
	
	
	
}
