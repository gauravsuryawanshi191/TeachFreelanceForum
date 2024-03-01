package com.app.dto;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.validation.constraints.NotBlank;

import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class AdvertisementDTO{
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	@NotBlank(message = "Occupation Title is required")
	private String occupationTitle;
	//@NotEmpty(message = "Please enter available vacancies")
	private Integer vacancyAvailable;
	//@NotEmpty(message = "Please enter salary")
	private Double salary;
	//@NotEmpty(message = "Please enter duration of employment")
	private Integer durationOfEmployment;
	//@NotEmpty(message = "Please enter work experience required")
	private Double workExperienceRequired;
	@NotBlank(message = "Job Description is required")
	private String description;
	@NotBlank(message = "Please select prefered gender")
	private String preferedGender;
	@DateTimeFormat(pattern = "yyyy-MM-dd")
	private LocalDate postingDate;
	@NotBlank(message = "Skills are required")
	private String skill;

	//owning -> child
	@JsonIgnore
	@ToString.Exclude
	private Set<FreelancerDTO> applicants = new HashSet<>();

	@JsonIgnore
	@ToString.Exclude
	private InstituteDTO instituteRef;	
	
//	public Advertisement(Long id, String occupationTitle, Integer vacancyAvailable, Double salary, Integer durationOfEmployment,
//			Double workExperienceRequired, String description, String preferedGender, LocalDate postingDate,
//			String skill) {
//		super();
//		this.setId(id);
//		this.occupationTitle = occupationTitle;
//		this.vacancyAvailable = vacancyAvailable;
//		this.salary = salary;
//		this.durationOfEmployment = durationOfEmployment;
//		this.workExperienceRequired = workExperienceRequired;
//		this.description = description;
//		this.preferedGender = preferedGender;
//		this.postingDate = LocalDate.now();
//		this.skill = skill;
//	}
//	
//	public Advertisement(String occupationTitle, Integer vacancyAvailable, Double salary, Integer durationOfEmployment,
//			Double workExperienceRequired, String description, String preferedGender, LocalDate postingDate,
//			String skill) {
//		super();
//		this.occupationTitle = occupationTitle;
//		this.vacancyAvailable = vacancyAvailable;
//		this.salary = salary;
//		this.durationOfEmployment = durationOfEmployment;
//		this.workExperienceRequired = workExperienceRequired;
//		this.description = description;
//		this.preferedGender = preferedGender;
//		this.postingDate = LocalDate.now();
//		this.skill = skill;
//	}
//
//	public Advertisement() {
//		super();
//	}
//
//	@Override
//	public String toString() {
//		return "Advertisement [occupationTitle=" + occupationTitle + ", vacancyAvailable=" + vacancyAvailable
//				+ ", salary=" + salary + ", durationOfEmployment=" + durationOfEmployment + ", workExperienceRequired="
//				+ workExperienceRequired + ", description=" + description + ", preferedGender=" + preferedGender
//				+ ", postingDate=" + postingDate + ", skill=" + skill + "]";
//	}
//
//	public String getOccupationTitle() {
//		return occupationTitle;
//	}
//
//	public void setOccupationTitle(String occupationTitle) {
//		this.occupationTitle = occupationTitle;
//	}
//
//	public Integer getVacancyAvailable() {
//		return vacancyAvailable;
//	}
//
//	public void setVacancyAvailable(Integer vacancyAvailable) {
//		this.vacancyAvailable = vacancyAvailable;
//	}
//
//	public Double getSalary() {
//		return salary;
//	}
//
//	public void setSalary(Double salary) {
//		this.salary = salary;
//	}
//
//	public Integer getDurationOfEmployment() {
//		return durationOfEmployment;
//	}
//
//	public void setDurationOfEmployment(Integer durationOfEmployment) {
//		this.durationOfEmployment = durationOfEmployment;
//	}
//
//	public Double getWorkExperienceRequired() {
//		return workExperienceRequired;
//	}
//
//	public void setWorkExperienceRequired(Double workExperienceRequired) {
//		this.workExperienceRequired = workExperienceRequired;
//	}
//
//	public String getDescription() {
//		return description;
//	}
//
//	public void setDescription(String description) {
//		this.description = description;
//	}
//
//	public String getPreferedGender() {
//		return preferedGender;
//	}
//
//	public void setPreferedGender(String preferedGender) {
//		this.preferedGender = preferedGender;
//	}
//
//	public LocalDate getPostingDate() {
//		return postingDate;
//	}
//
//	public void setPostingDate(LocalDate postingDate) {
//		this.postingDate = postingDate;
//	}
//
//	public String getSkill() {
//		return skill;
//	}
//
//	public void setSkill(String skill) {
//		this.skill = skill;
//	}
//
//	public Institute getInstituteRef() {
//		return instituteRef;
//	}
//
//	public void setInstituteRef(Institute instituteRef) {
//		this.instituteRef = instituteRef;
//	}	
//	
}
