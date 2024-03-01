package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "Institute_tbl")
public class Institute extends BaseEntity {

	@Column(length = 20)
	private String instituteName;
	
	@Column(length = 100)
	private String instituteMission;
	
	@Column(length = 40,unique = true)
	private String instituteEmail;
	
	@Column(length = 20)
	private String institutePassword;
	
	@Column(length = 20)
	private String instituteStatus;

	public Institute() {
		super();
	}

	public Institute(String instituteName, String instituteMission, String instituteEmail) {
		super();
		this.instituteName = instituteName;
		this.instituteMission = instituteMission;
		this.instituteEmail = instituteEmail;
	}

	public String getInstituteName() {
		return instituteName;
	}

	public void setInstituteName(String instituteName) {
		this.instituteName = instituteName;
	}

	public String getInstituteMission() {
		return instituteMission;
	}

	public void setInstituteMission(String instituteMission) {
		this.instituteMission = instituteMission;
	}

	public String getInstituteEmail() {
		return instituteEmail;
	}

	public void setInstituteEmail(String instituteEmail) {
		this.instituteEmail = instituteEmail;
	}

	public String getInstitutePassword() {
		return institutePassword;
	}

	public void setInstitutePassword(String institutePassword) {
		this.institutePassword = institutePassword;
	}

	public String getInstituteStatus() {
		return instituteStatus;
	}

	public void setInstituteStatus(String instituteStatus) {
		this.instituteStatus = instituteStatus;
	}

	@Override
	public String toString() {
		return "Institute [instituteName=" + instituteName + ", instituteMission=" + instituteMission
				+ ", instituteEmail=" + instituteEmail + ", institutePassword=" + institutePassword
				+ ", instituteStatus=" + instituteStatus + "]";
	}
	
	
}
