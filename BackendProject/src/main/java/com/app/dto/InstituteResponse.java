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
public class InstituteResponse{

	@ToString.Exclude
	private InstituteDTO institute;
	
	@ToString.Exclude
	private FreelancerDTO freelancer;

	@Column(length = 100)
	private String comment;

//	public InstituteResponse(Institute institute, Freelancer freelancer, String comment) {
//		super();
//		this.institute = institute;
//		this.freelancer = freelancer;
//		this.comment = comment;
//	}
//
//	public InstituteResponse() {
//		super();
//	}

//	public Institute getInstitute() {
//		return institute;
//	}
//
//	public void setInstitute(Institute institute) {
//		this.institute = institute;
//	}
//
//	public Freelancer getFreelancer() {
//		return freelancer;
//	}
//
//	public void setFreelancer(Freelancer freelancer) {
//		this.freelancer = freelancer;
//	}
//
//	public String getComment() {
//		return comment;
//	}
//
//	public void setComment(String comment) {
//		this.comment = comment;
//	}

//	@Override
//	public String toString() {
//		return "InstituteResponse [comment=" + comment + "]";
//	}
	
}
