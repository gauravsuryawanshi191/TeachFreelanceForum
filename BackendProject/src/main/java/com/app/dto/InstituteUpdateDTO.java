package com.app.dto;

import javax.validation.constraints.NotBlank;

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
public class InstituteUpdateDTO {
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank(message = "Institute Name is required")
	private String instituteName;
	@NotBlank(message = "Institute Mission is required")
	private String instituteMission;
	private String instituteEmail;
}
