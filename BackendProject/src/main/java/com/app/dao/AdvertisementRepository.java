package com.app.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Advertisement;
@Repository
public interface AdvertisementRepository extends JpaRepository<Advertisement, Long> {

	Optional<Advertisement> findByOccupationTitle(String occupationTitle);

	@Query("select new Advertisement(occupationTitle,vacancyAvailable, salary, durationOfEmployment,workExperienceRequired, description, preferedGender, postingDate,skill) from Advertisement a where a.occupationTitle = :p")
	Optional<Advertisement> advertisementDescription(@Param("p") String advertisementDescription);

	@Query("select new Advertisement(occupationTitle,vacancyAvailable, salary, durationOfEmployment,workExperienceRequired, description, preferedGender, postingDate,skill) from Advertisement a where a.occupationTitle = :p and a.instituteRef.id =:ref")
	Optional<Advertisement> advertisementDescriptionforInstitute(@Param("p") String advertisementDescription,@Param("ref") Long instituteId);

	@Query("select new Advertisement(id, occupationTitle,vacancyAvailable, salary, durationOfEmployment,workExperienceRequired, description, preferedGender, postingDate,skill) from Advertisement a where a.instituteRef.id =:instId")
	Optional<List<Advertisement>> findByInstituteId(@Param("instId") Long instituteId);

}
