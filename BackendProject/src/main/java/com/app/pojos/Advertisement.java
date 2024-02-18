package com.app.pojos;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.ToString;

@Entity
@Table(name = "advertisement_tbl")

public class Advertisement extends BaseEntity {

	@Column(length = 20)
	private String occupationTitle;

	@Column
	private Integer vacancyAvailable;

	@Column(length = 20)
	private Double salary;

	@Column
	private Integer durationOfEmployment;

	@Column
	private Double workExperienceRequired;

	@Column(length = 50)
	private String description;

	@Column(length = 20)
	private String preferedGender;

	@Column
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate postingDate;

	@Column(length = 50)
	private String skill;

	// owning -> child
	@JsonIgnore
	@ToString.Exclude
	@ManyToMany(cascade = CascadeType.PERSIST)
	@JoinTable(name = "application_tbl", joinColumns = @JoinColumn(name = "advertisement_id"), inverseJoinColumns = @JoinColumn(name = "freelancer_id"))
	private Set<Freelancer> applicants = new HashSet<>();

	public Set<Freelancer> getApplicants() {
		return applicants;
	}

	public void setApplicants(Set<Freelancer> applicants) {
		this.applicants = applicants;
	}

	@JsonIgnore
	@ToString.Exclude
	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "institute_id", nullable = true)
	private Institute instituteRef;

	public Advertisement(Long id, String occupationTitle, Integer vacancyAvailable, Double salary,
			Integer durationOfEmployment,
			Double workExperienceRequired, String description, String preferedGender, LocalDate postingDate,
			String skill) {
		super();
		this.setId(id);
		this.occupationTitle = occupationTitle;
		this.vacancyAvailable = vacancyAvailable;
		this.salary = salary;
		this.durationOfEmployment = durationOfEmployment;
		this.workExperienceRequired = workExperienceRequired;
		this.description = description;
		this.preferedGender = preferedGender;
		this.postingDate = LocalDate.now();
		this.skill = skill;
	}

	public Advertisement(String occupationTitle, Integer vacancyAvailable, Double salary, Integer durationOfEmployment,
			Double workExperienceRequired, String description, String preferedGender, LocalDate postingDate,
			String skill) {
		super();
		this.occupationTitle = occupationTitle;
		this.vacancyAvailable = vacancyAvailable;
		this.salary = salary;
		this.durationOfEmployment = durationOfEmployment;
		this.workExperienceRequired = workExperienceRequired;
		this.description = description;
		this.preferedGender = preferedGender;
		this.postingDate = LocalDate.now();
		this.skill = skill;
	}

	public Advertisement() {
		super();
	}

	@Override
	public String toString() {
		return "Advertisement [occupationTitle=" + occupationTitle + ", vacancyAvailable=" + vacancyAvailable
				+ ", salary=" + salary + ", durationOfEmployment=" + durationOfEmployment + ", workExperienceRequired="
				+ workExperienceRequired + ", description=" + description + ", preferedGender=" + preferedGender
				+ ", postingDate=" + postingDate + ", skill=" + skill + "]";
	}

	public String getOccupationTitle() {
		return occupationTitle;
	}

	public void setOccupationTitle(String occupationTitle) {
		this.occupationTitle = occupationTitle;
	}

	public Integer getVacancyAvailable() {
		return vacancyAvailable;
	}

	public void setVacancyAvailable(Integer vacancyAvailable) {
		this.vacancyAvailable = vacancyAvailable;
	}

	public Double getSalary() {
		return salary;
	}

	public void setSalary(Double salary) {
		this.salary = salary;
	}

	public Integer getDurationOfEmployment() {
		return durationOfEmployment;
	}

	public void setDurationOfEmployment(Integer durationOfEmployment) {
		this.durationOfEmployment = durationOfEmployment;
	}

	public Double getWorkExperienceRequired() {
		return workExperienceRequired;
	}

	public void setWorkExperienceRequired(Double workExperienceRequired) {
		this.workExperienceRequired = workExperienceRequired;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPreferedGender() {
		return preferedGender;
	}

	public void setPreferedGender(String preferedGender) {
		this.preferedGender = preferedGender;
	}

	public LocalDate getPostingDate() {
		return postingDate;
	}

	public void setPostingDate(LocalDate postingDate) {
		this.postingDate = postingDate;
	}

	public String getSkill() {
		return skill;
	}

	public void setSkill(String skill) {
		this.skill = skill;
	}

	public Institute getInstituteRef() {
		return instituteRef;
	}

	public void setInstituteRef(Institute instituteRef) {
		this.instituteRef = instituteRef;
	}

}
