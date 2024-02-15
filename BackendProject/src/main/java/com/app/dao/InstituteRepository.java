package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Freelancer;
import com.app.pojos.Institute;

public interface InstituteRepository extends JpaRepository<Institute,Long> {

//	@Query("select f from Freelancer f left join fetch f.advertisements a where f.id = a.applicants.freelancer_id "
//			+ "and a.applicants.advertisement_id = (select adv.id from Advertisement adv "
//			+ "where adv.occupationTitle =: subject)")
	@Query(value = "select freelancer_tbl.* from freelancer_tbl join application_tbl on freelancer_tbl.id = application_tbl.freelancer_id "
			+ "and application_tbl.advertisement_id = (select advertisement_tbl.id from advertisement_tbl "
			+ "where advertisement_tbl.occupationTitle = ?1)", nativeQuery = true)
	public List <Freelancer> applyingForTheJob(@Param("subject") String a);
	
	//authentication of institute
	Optional <Institute>findByInstituteEmailAndInstitutePassword(String em, String pass);
	
	//Approving status of institute by admin
	@Modifying 
	@Query("Update Institute i set i.instituteStatus=:e where i.id=:p")
	Integer updateInstituteStatus(@Param("p") Long id,@Param("e") String a);
	
	//find institute  by email

	public Institute findByInstituteEmail(String email);
	
	@Modifying 
	@Query("Update Institute i set i.instituteName=:name, i.instituteMission=:mission where i.instituteEmail=:email")
	public Integer updateInstitute(String name, String mission, String email);

}
