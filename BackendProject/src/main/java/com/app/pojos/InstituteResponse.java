package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "feedback_tbl")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class InstituteResponse extends BaseEntity {

	@ToString.Exclude
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "institute_id", nullable = true)
	private Institute institute;

	@ToString.Exclude
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "freelancer_id", nullable = true)
	private Freelancer freelancer;

	@Column(length = 100)
	private String comment;

	// public InstituteResponse(Institute institute, Freelancer freelancer, String
	// comment) {
	// super();
	// this.institute = institute;
	// this.freelancer = freelancer;
	// this.comment = comment;
	// }

	// public InstituteResponse() {
	// super();
	// }

	// public Institute getInstitute() {
	// return institute;
	// }

	// public void setInstitute(Institute institute) {
	// this.institute = institute;
	// }

	// public Freelancer getFreelancer() {
	// return freelancer;
	// }

	// public void setFreelancer(Freelancer freelancer) {
	// this.freelancer = freelancer;
	// }

	// public String getComment() {
	// return comment;
	// }

	// public void setComment(String comment) {
	// this.comment = comment;
	// }

	// @Override
	// public String toString() {
	// return "InstituteResponse [comment=" + comment + "]";
	// }

}
