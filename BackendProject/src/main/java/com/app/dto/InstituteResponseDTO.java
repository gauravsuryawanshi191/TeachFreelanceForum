package com.app.dto;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class InstituteResponseDTO {

	@ToString.Exclude
	private InstituteDTO institute;

	@ToString.Exclude
	private FreelancerDTO freelancer;

	@Column(length = 100)
	private String comment;


	public void setInstituteDTO(InstituteDTO institute2) {
		institute = institute2;
	}

	public void setFreelancerDTO(FreelancerDTO freelancer2) {
		freelancer = freelancer2;
	}

}
