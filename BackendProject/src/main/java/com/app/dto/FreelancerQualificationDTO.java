package com.app.dto;

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
public class FreelancerQualificationDTO{
	@JsonProperty(access = Access.READ_ONLY)
	private Long id;
	private String email;
	private Double graduationMarks;
	private Integer passoutYear;
	private String qualification;
	private String university;
	
//	@Override
//	public int hashCode() {
//		final int prime = 31;
//		int result = 1;
//		result = prime * result + ((email == null) ? 0 : email.hashCode());
//		return result;
//	}
//
//	@Override
//	public boolean equals(Object obj) {
//		if (this == obj)
//			return true;
//		if (obj == null)
//			return false;
//		if (getClass() != obj.getClass())
//			return false;
//		Freelancer other = (Freelancer) obj;
//		return Objects.equals(email, other.email);
//	}
//
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
//	public String getMobileNumber() {
//		return mobileNumber;
//	}
//
//	public void setMobileNumber(String mobileNumber) {
//		this.mobileNumber = mobileNumber;
//	}
//
//	public String getCity() {
//		return city;
//	}
//
//	public void setCity(String city) {
//		this.city = city;
//	}
//
//	public String getState() {
//		return state;
//	}
//
//	public void setState(String state) {
//		this.state = state;
//	}
//
//	public String getPincode() {
//		return pincode;
//	}
//
//	public void setPincode(String pincode) {
//		this.pincode = pincode;
//	}
//
//	public String getCurrentAddress() {
//		return currentAddress;
//	}
//
//	public void setCurrentAddress(String currentAddress) {
//		this.currentAddress = currentAddress;
//	}
//
//	public Double getExperience() {
//		return experience;
//	}
//
//	public void setExperience(Double experience) {
//		this.experience = experience;
//	}
//
//	public Integer getGraduationMarks() {
//		return graduationMarks;
//	}
//
//	public void setGraduationMarks(Integer graduationMarks) {
//		this.graduationMarks = graduationMarks;
//	}
//
//	public Integer getPassoutYear() {
//		return passoutYear;
//	}
//
//	public void setPassoutYear(Integer passoutYear) {
//		this.passoutYear = passoutYear;
//	}
//
//	public String getQualification() {
//		return qualification;
//	}
//
//	public void setQualification(String qualification) {
//		this.qualification = qualification;
//	}
//
//	public String getUniversity() {
//		return university;
//	}
//
//	public void setUniversity(String university) {
//		this.university = university;
//	}
//
//	public Set<Advertisement> getAdvertisements() {
//		return advertisements;
//	}
//
//	public void setAdvertisements(Set<Advertisement> advertisements) {
//		this.advertisements = advertisements;
//	}
//
//	public Freelancer() {
//		super();
//	}
//
//	public Freelancer(String firstName, String lastName, String email, String password, String mobileNumber,
//			String city, String state, String pincode, String currentAddress, Double experience,
//			Integer graduationMarks, Integer passoutYear, String qualification, String university,
//			Set<Advertisement> advertisements) {
//		super();
//		this.firstName = firstName;
//		this.lastName = lastName;
//		this.email = email;
//		this.password = password;
//		this.mobileNumber = mobileNumber;
//		this.city = city;
//		this.state = state;
//		this.pincode = pincode;
//		this.currentAddress = currentAddress;
//		this.experience = experience;
//		this.graduationMarks = graduationMarks;
//		this.passoutYear = passoutYear;
//		this.qualification = qualification;
//		this.university = university;
//		this.advertisements = advertisements;
//	}
//
//	@Override
//	public String toString() {
//		return "Freelancer [firstName=" + firstName + ", lastName=" + lastName + ", email=" + email + ", password="
//				+ password + ", mobileNumber=" + mobileNumber + ", city=" + city + ", state=" + state + ", pincode="
//				+ pincode + ", currentAddress=" + currentAddress + ", experience=" + experience + ", graduationMarks="
//				+ graduationMarks + ", passoutYear=" + passoutYear + ", qualification=" + qualification
//				+ ", university=" + university +"]";
//	}
	
}